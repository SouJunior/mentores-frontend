import { Button } from '@/components/atoms/Button';
import { Modal } from '@/components/atoms/Modal';
import { Spinner } from '@/components/atoms/Spinner';
import { ModalCancelKeepRoute } from '@/components/molecules/ModalCancelKeepRoute';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { IMentorSchedule } from '@/services/interfaces/IUseMentorSchedulesService';
import { useMentorSchedulesService } from '@/services/user/useMentorSchedulesService';
import UserUpdateService from '@/services/user/userUpdateService';
import { redirectToCalendlyOAuth } from '@/utils/calendlyOAuth';
import { handleError } from '@/utils/handleError';
import {
  isCalendlyLink,
  isValidHttpsUrl,
  splitCalendlyName,
} from '@/utils/ValidateCalendlyInput';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import dayjs from 'dayjs';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TitleTab } from '../styles';
import {
  AlertContainer,
  ButtonContainer,
  ButtonLoading,
  ButtonsContainer,
  ContainerErrorInputCalendly,
  ContainerInput,
  Divider,
  ErrorOutlineRoundedIconStyled,
  InputCalendlyStyled,
  ManageScheduleLink,
  ParticipantAvatar,
  ParticipantName,
  ParticipantSummary,
  PlaceholderInput,
  ScheduleCard,
  ScheduleContent,
  ScheduleDateGroup,
  ScheduleDateTitle,
  ScheduleDetailBlock,
  ScheduleDetailLabel,
  ScheduleDetailLink,
  ScheduleDetailText,
  ScheduleDetails,
  ScheduleDetailsIcon,
  ScheduleDetailsToggle,
  ScheduleEmptyState,
  ScheduleEndMessage,
  ScheduleSubTabsContent,
  ScheduleSubTabsList,
  ScheduleSubTabsRoot,
  ScheduleSubTabsTrigger,
  ScheduleSummaryButton,
  ScheduleTabContainer,
  ScheduleTimeRange,
  SchedulesList,
  StyledErrorOutlineRoundedIcon,
} from './styles';

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0])
    .join('')
    .toUpperCase();
}

function getMainParticipant(schedule: IMentorSchedule) {
  return schedule.participants?.[0];
}

function getScheduleQuestions(schedule: IMentorSchedule) {
  return (
    getMainParticipant(schedule)?.questions?.filter(question => question.answer) ??
    []
  );
}

function groupSchedulesByDate(schedules: IMentorSchedule[]) {
  return schedules.reduce<Record<string, IMentorSchedule[]>>((acc, schedule) => {
    const dateKey = dayjs(schedule.startTime).format('YYYY-MM-DD');

    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }

    acc[dateKey].push(schedule);
    return acc;
  }, {});
}

export function ScheduleTab() {
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [savedInputValue, setSavedInputValue] = useState('');
  const [openWarningModal, setOpenWarningModal] = useState(false);
  const [expandedScheduleId, setExpandedScheduleId] = useState<string | null>(
    null
  );

  const { handleMentorCalendlyInfo, updateMentorCalendlyInfo } =
    UserUpdateService();
  const { mentor, mentorCalendlyInfo, userSession } = useAuthContext();
  const mentorSchedules = useMentorSchedulesService(
    userSession?.token,
    userSession?.id
  );

  const generateCalendlyLink = useCallback(() => {
    if (
      mentorCalendlyInfo.data?.calendlyName &&
      mentorCalendlyInfo.data?.agendaName
    ) {
      return `https://calendly.com/${mentorCalendlyInfo.data.calendlyName}/${mentorCalendlyInfo.data.agendaName}`;
    }
    return '';
  }, [
    mentorCalendlyInfo.data?.agendaName,
    mentorCalendlyInfo.data?.calendlyName,
  ]);

  useEffect(() => {
    const link = generateCalendlyLink();
    setInputValue(link);
    setSavedInputValue(link);
  }, [generateCalendlyLink]);

  const buttonDisabledVerification = useCallback(() => {
    const valid =
      inputValue.trim() === '' ||
      (isValidHttpsUrl(inputValue) && isCalendlyLink(inputValue));
    setIsValid(valid);
  }, [inputValue]);

  useEffect(() => {
    buttonDisabledVerification();
  }, [inputValue, buttonDisabledVerification]);

  const hasScheduleChanges = inputValue !== savedInputValue;
  const hasCalendlyOAuthConnection = Boolean(
    mentorCalendlyInfo.data?.isConnected
  );
  const shouldConnectCalendlyOAuth = Boolean(
    inputValue.trim() !== '' && isValid && !hasCalendlyOAuthConnection
  );
  const isButtonDisabled =
    (!hasScheduleChanges && !shouldConnectCalendlyOAuth) ||
    !isValid ||
    isLoading;

  const toastMessageSuccess = () =>
    toast('Alterações salvas', {
      icon: <CheckCircleOutlineRoundedIcon />,
      position: 'top-center',
      closeButton: false,
      style: {
        backgroundColor: '#72c270',
        color: '#175116',
        fontWeight: 500,
        marginTop: '5rem',
      },
    });

  const toastMessageDiscarded = () =>
    toast('Alterações descartadas', {
      icon: false,
      position: 'top-center',
      closeButton: false,
      style: {
        backgroundColor: '#f5dc66',
        color: '#705e0b',
        fontWeight: 500,
        marginTop: '5rem',
      },
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (inputValue.trim() === '') {
        await updateMentorCalendlyInfo({
          calendlyName: '',
          agendaName: '',
        });

        setSavedInputValue('');
        mentorCalendlyInfo.refetch();
        toastMessageSuccess();
        return;
      }

      if (isValidHttpsUrl(inputValue) && isCalendlyLink(inputValue)) {
        const { firstPathName, secondPathName } = splitCalendlyName(inputValue);
        const calendlyData = {
          calendlyName: firstPathName,
          agendaName: secondPathName,
        };

        if (mentorCalendlyInfo.data?.id) {
          await updateMentorCalendlyInfo(calendlyData);
        } else {
          await handleMentorCalendlyInfo(calendlyData);
        }

        setSavedInputValue(inputValue);
        mentorCalendlyInfo.refetch();

        if (!hasCalendlyOAuthConnection) {
          const startedOAuth = redirectToCalendlyOAuth(mentor.data?.id);

          if (!startedOAuth) {
            handleError('Não foi possível iniciar a conexão com o Calendly.');
          }

          return;
        }

        toastMessageSuccess();
      }
    } catch (error) {
      handleError('Algum erro aconteceu. Entre em contato conosco.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWarningModal = () => {
    if (hasScheduleChanges) {
      setOpenWarningModal(true);
    }
  };

  const handleDiscard = () => {
    setInputValue(savedInputValue);
    toastMessageDiscarded();
  };

  const groupedSchedules = groupSchedulesByDate(mentorSchedules.data ?? []);
  const scheduleDateKeys = Object.keys(groupedSchedules).sort();

  return (
    <ScheduleTabContainer value="schedule">
      <TitleTab>Agenda</TitleTab>

      <ScheduleSubTabsRoot defaultValue="appointments">
        <ScheduleSubTabsList aria-label="Agenda">
          <ScheduleSubTabsTrigger value="appointments">
            Meus agendamentos
          </ScheduleSubTabsTrigger>
          <ScheduleSubTabsTrigger value="settings">
            Configurações
          </ScheduleSubTabsTrigger>
        </ScheduleSubTabsList>

        <ScheduleSubTabsContent value="appointments">
          <SchedulesList>
            {mentorSchedules.isLoading ? (
              <ScheduleEmptyState>Carregando agendamentos...</ScheduleEmptyState>
            ) : mentorSchedules.isError ? (
              <ScheduleEmptyState>
                Não foi possível carregar seus agendamentos.
              </ScheduleEmptyState>
            ) : scheduleDateKeys.length ? (
              <>
                {scheduleDateKeys.map(dateKey => (
                  <ScheduleDateGroup key={dateKey}>
                    <ScheduleDateTitle>
                      {dayjs(dateKey).format('dddd, DD [de] MMMM [de] YYYY')}
                    </ScheduleDateTitle>

                    {groupedSchedules[dateKey]
                      .sort((a, b) => a.startTime.localeCompare(b.startTime))
                      .map(schedule => {
                        const participant = getMainParticipant(schedule);
                        const participantName =
                          participant?.name || 'Participante não informado';
                        const questions = getScheduleQuestions(schedule);
                        const isExpanded =
                          expandedScheduleId === schedule.eventUuid;

                        return (
                          <ScheduleCard
                            key={schedule.eventUuid}
                            $isExpanded={isExpanded}
                          >
                            <ScheduleSummaryButton
                              type="button"
                              aria-expanded={isExpanded}
                              onClick={() =>
                                setExpandedScheduleId(currentId =>
                                  currentId === schedule.eventUuid
                                    ? null
                                    : schedule.eventUuid
                                )
                              }
                            >
                              <ScheduleTimeRange>
                                {dayjs(schedule.startTime).format('HH:mm')} -{' '}
                                {dayjs(schedule.endTime).format('HH:mm')}
                              </ScheduleTimeRange>

                              <ParticipantSummary>
                                <ParticipantAvatar>
                                  {getInitials(participantName)}
                                </ParticipantAvatar>
                                <ParticipantName>{participantName}</ParticipantName>
                              </ParticipantSummary>

                              <ScheduleDetailsToggle $isExpanded={isExpanded}>
                                Detalhes
                                <ScheduleDetailsIcon />
                              </ScheduleDetailsToggle>
                            </ScheduleSummaryButton>

                            {isExpanded && (
                              <ScheduleDetails>
                                <ScheduleDetailBlock>
                                  <ScheduleDetailLabel>Email</ScheduleDetailLabel>
                                  <ScheduleDetailText>
                                    {participant?.email || 'Não informado'}
                                  </ScheduleDetailText>
                                </ScheduleDetailBlock>

                                <ScheduleDetailBlock>
                                  <ScheduleDetailLabel>
                                    Sala da chamada
                                  </ScheduleDetailLabel>
                                  {schedule.joinUrl ? (
                                    <ScheduleDetailLink
                                      href={schedule.joinUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      {schedule.joinUrl}
                                    </ScheduleDetailLink>
                                  ) : (
                                    <ScheduleDetailText>
                                      Não informada
                                    </ScheduleDetailText>
                                  )}
                                </ScheduleDetailBlock>

                                <ScheduleDetailBlock>
                                  <ScheduleDetailLabel>Questões</ScheduleDetailLabel>
                                  {questions.length ? (
                                    questions.map(question => (
                                      <ScheduleDetailText
                                        key={`${schedule.eventUuid}-${question.question}`}
                                      >
                                        {question.answer}
                                      </ScheduleDetailText>
                                    ))
                                  ) : (
                                    <ScheduleDetailText>
                                      Nenhuma resposta informada.
                                    </ScheduleDetailText>
                                  )}
                                </ScheduleDetailBlock>

                                {schedule.eventUrl && (
                                  <ManageScheduleLink
                                    href={schedule.eventUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Gerenciar chamada
                                  </ManageScheduleLink>
                                )}
                              </ScheduleDetails>
                            )}
                          </ScheduleCard>
                        );
                      })}
                  </ScheduleDateGroup>
                ))}

                <ScheduleEndMessage>
                  Você chegou ao fim da lista
                </ScheduleEndMessage>
              </>
            ) : (
              <ScheduleEmptyState>
                Nenhum agendamento aberto foi encontrado no Calendly.
              </ScheduleEmptyState>
            )}
          </SchedulesList>
        </ScheduleSubTabsContent>

        <ScheduleSubTabsContent value="settings">
          <ScheduleContent>
            <AlertContainer>
              <ErrorOutlineRoundedIconStyled />
              <p>
                Caso altere o link da sua agenda no Calendly, é necessário
                atualizá-lo também nessa página.
              </p>
            </AlertContainer>

            <ButtonContainer>
              <Button
                as="a"
                href="https://calendly.com/"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                Ir para o Calendly
              </Button>
            </ButtonContainer>

            <form onSubmit={handleSubmit}>
              <ContainerInput>
                <InputCalendlyStyled
                  className={`${isValid === false && inputValue !== '' ? 'error' : ''}`}
                  name="calendlyLink"
                  type="text"
                  value={inputValue}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setInputValue(e.target.value);
                  }}
                  onPaste={(e: React.ClipboardEvent<HTMLInputElement>) => {
                    e.preventDefault();
                    const pastedText = e.clipboardData.getData('text');
                    const valid =
                      isValidHttpsUrl(pastedText) && isCalendlyLink(pastedText);
                    setIsValid(valid);
                    setInputValue(pastedText);
                  }}
                  id="link-calendly"
                />
                <PlaceholderInput htmlFor="link-calendly">
                  Link da agenda do Calendly
                </PlaceholderInput>
                {isValid === false && inputValue !== '' && (
                  <StyledErrorOutlineRoundedIcon aria-hidden color="error" />
                )}
              </ContainerInput>
              {isValid === false && inputValue !== '' && (
                <ContainerErrorInputCalendly>
                  O link precisa ser nesse formato: <br />
                  https://calendly.com/seu-usuario-calendly/nome-do-evento
                </ContainerErrorInputCalendly>
              )}

              <Divider />

              <ButtonsContainer>
                <Button
                  type="button"
                  variant="tertiary"
                  onClick={handleWarningModal}
                  disabled={!hasScheduleChanges || isLoading}
                >
                  Cancelar
                </Button>

                <Modal.Root
                  open={openWarningModal}
                  onOpenChange={() => setOpenWarningModal(false)}
                >
                  <ModalCancelKeepRoute handleDiscard={handleDiscard} />
                </Modal.Root>

                {isLoading ? (
                  <ButtonLoading disabled>
                    <Spinner />
                  </ButtonLoading>
                ) : (
                  <Button disabled={isButtonDisabled} type="submit">
                    {shouldConnectCalendlyOAuth ? 'Vincular e salvar' : 'Salvar'}
                  </Button>
                )}
              </ButtonsContainer>
            </form>
          </ScheduleContent>
        </ScheduleSubTabsContent>
      </ScheduleSubTabsRoot>
    </ScheduleTabContainer>
  );
}
