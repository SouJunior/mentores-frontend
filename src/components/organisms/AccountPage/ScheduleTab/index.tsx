import { Button } from '@/components/atoms/Button';
import { Modal } from '@/components/atoms/Modal';
import { Spinner } from '@/components/atoms/Spinner';
import { ModalCancelKeepRoute } from '@/components/molecules/ModalCancelKeepRoute';
import { ModalSave } from '@/components/molecules/ModalSave';
import EventAccordion from '@/components/molecules/ScheduleAccordion';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { Schedule } from '@/services/interfaces/Schedule.interface';
import { UserMentorSchedule } from '@/services/user/userMentorSchedule';
import UserUpdateService from '@/services/user/userUpdateService';
import { theme } from '@/styles/theme';
import { getFormattedDate } from '@/utils/format-date-iso8601';
import { handleError } from '@/utils/handleError';
import {
  isCalendlyLink,
  isValidHttpsUrl,
  splitCalendlyName,
} from '@/utils/ValidateCalendlyInput';
import { CheckCircleOutlineOutlined, InfoOutlined } from '@mui/icons-material';
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
  DailyEvents,
  DailyEventsTitle,
  Divider,
  ErrorOutlineRoundedIconStyled,
  EventList,
  InputCalendlyStyled,
  ListEnd,
  NavBtn,
  Navegation,
  PlaceholderInput,
  ScheduleContent,
  ScheduleTabContainer,
  StyledErrorOutlineRoundedIcon,
} from './styles';

export function ScheduleTab() {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [openDiscardModal, setOpenDiscardModal] = useState<boolean>(false);
  const [openSaveModal, setOpenSaveModal] = useState<boolean>(false);
  const [navigation, setNavigation] = useState<string>('schedule');

  const { handleMentorCalendlyInfo } = UserUpdateService();
  const { mentorCalendlyInfo } = useAuthContext();

  const handleNavigation = (option: string) => {
    setNavigation(option);
  };

  const { fetchMentorSchedule } = UserMentorSchedule();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchMentorSchedule();
        setSchedules(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [fetchMentorSchedule, schedules]);

  function extractDates(schedules: Schedule[]) {
    const dates: string[] = [];

    for (const schedule of schedules) {
      const dataISO = schedule.startTime.split('T')[0];

      if (!dates.includes(dataISO)) {
        dates.push(dataISO);
      }
    }

    return dates;
  }

  const generateCalendlyLink = useCallback(() => {
    if (
      mentorCalendlyInfo.data?.calendlyName &&
      mentorCalendlyInfo.data?.agendaName
    ) {
      return `https://calendly.com/${mentorCalendlyInfo.data.calendlyName}/${mentorCalendlyInfo.data.agendaName}`;
    }
    return '';
  }, [
    mentorCalendlyInfo.data?.calendlyName,
    mentorCalendlyInfo.data?.agendaName,
  ]);

  useEffect(() => {
    const link = generateCalendlyLink();
    setInputValue(link);
  }, [generateCalendlyLink]);

  const buttonDisabledVerification = useCallback(() => {
    const valid = isValidHttpsUrl(inputValue) && isCalendlyLink(inputValue);
    setIsValid(valid);
    setIsButtonDisabled(!valid);
  }, [inputValue]);

  useEffect(() => {
    buttonDisabledVerification();
  }, [inputValue, buttonDisabledVerification]);

  const toastMessageSuccess = () =>
    toast('Alterações salvas', {
      icon: <CheckCircleOutlineOutlined />,
      position: 'top-center',
      autoClose: 1000,
      closeButton: false,
      style: {
        backgroundColor: '#72c270',
        color: '#083D07',
        fontWeight: 500,
        fontSize: '1.25rem',
        marginTop: '5rem',
        padding: '1rem',
      },
    });

  const toastMessageDiscarded = () =>
    toast.warn('Alterações descartadas', {
      icon: <InfoOutlined />,
      position: 'top-center',
      autoClose: 1000,
      closeButton: false,
      style: {
        backgroundColor: '#f5dc66',
        color: '#5F4E00',
        fontWeight: 500,
        fontSize: '1.25rem',
        marginTop: '5rem',
        padding: '1rem',
      },
    });

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      if (isValidHttpsUrl(inputValue) && isCalendlyLink(inputValue)) {
        const { firstPathName, secondPathName } = splitCalendlyName(inputValue);
        await handleMentorCalendlyInfo({
          calendlyName: firstPathName,
          agendaName: secondPathName,
        });

        mentorCalendlyInfo.refetch();
        toastMessageSuccess();
      }
    } catch (error) {
      handleError('Algum erro aconteceu. Entre em contato conosco.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDiscardModal = () => {
    setOpenDiscardModal(true);
  };

  const handleSaveModal = () => {
    setOpenSaveModal(true);
  };

  const handleDiscard = () => {
    const link = generateCalendlyLink();
    setInputValue(link);
    toastMessageDiscarded();
  };

  return (
    <ScheduleTabContainer value="schedule">
      <TitleTab>Agenda</TitleTab>
      <ScheduleContent>
        <AlertContainer>
          <ErrorOutlineRoundedIconStyled />
          <p>
            Caso altere o link da sua agenda no Calendly, é necessário
            atualizá-lo também nessa página.
          </p>
        </AlertContainer>

        <Navegation>
          <NavBtn
            onClick={() => handleNavigation('schedule')}
            select={navigation === 'schedule'}
          >
            Meus agendamentos
          </NavBtn>
          <NavBtn
            onClick={() => handleNavigation('config')}
            select={navigation === 'config'}
          >
            Configurações
          </NavBtn>
        </Navegation>

        {navigation === 'config' ? (
          <>
            <ButtonContainer>
              <Button
                as="a"
                href="https://calendly.com/"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="md"
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
                    setIsButtonDisabled(!valid);
                    setInputValue(pastedText);
                  }}
                  id="link-calendly"
                />
                <PlaceholderInput
                  htmlFor="link-calendly"
                  style={
                    isValid === false && inputValue !== ''
                      ? { color: `${theme.colors.red[500]}` }
                      : { color: '#000000' }
                  }
                >
                  Link da agenda do Calendly
                </PlaceholderInput>
                {isValid === false && inputValue !== '' && (
                  <StyledErrorOutlineRoundedIcon aria-hidden color="error" />
                )}
              </ContainerInput>
              {isValid === false && inputValue !== '' && (
                <ContainerErrorInputCalendly>
                  Link inválido! Exemplo:
                  https://calendly.com/seu-usuario-calendly/nome-do-evento
                </ContainerErrorInputCalendly>
              )}

              <Divider />

              <ButtonsContainer>
                <Button
                  type="button"
                  variant="tertiary"
                  onClick={handleDiscardModal}
                  disabled={isLoading}
                  size="md"
                >
                  Cancelar
                </Button>

                <Modal.Root
                  open={openDiscardModal}
                  onOpenChange={() => setOpenDiscardModal(false)}
                >
                  <ModalCancelKeepRoute handleDiscard={handleDiscard} />
                </Modal.Root>

                {isLoading ? (
                  <ButtonLoading disabled>
                    <Spinner />
                  </ButtonLoading>
                ) : (
                  <Button
                    type="button"
                    onClick={handleSaveModal}
                    disabled={isButtonDisabled}
                    size="md"
                  >
                    Salvar
                  </Button>
                )}

                <Modal.Root
                  open={openSaveModal}
                  onOpenChange={() => setOpenSaveModal(false)}
                >
                  <ModalSave
                    title="Deseja realmente alterar o link da agenda?"
                    text="O link antigo será substituído"
                    onSave={handleSubmit}
                    onDiscard={handleDiscard}
                  />
                </Modal.Root>
              </ButtonsContainer>
            </form>
          </>
        ) : (
          <EventList>
            <DailyEvents>
              {schedules &&
                extractDates(schedules).map((date, index) => (
                  <div key={index}>
                    <DailyEventsTitle>
                      {getFormattedDate(date)}
                    </DailyEventsTitle>
                    {schedules
                      .filter(
                        schedule => schedule.startTime.split('T')[0] === date
                      )
                      .map((filteredSchedule, index) => (
                        <EventAccordion
                          key={index}
                          schedule={filteredSchedule}
                        />
                      ))}
                  </div>
                ))}
            </DailyEvents>

            <ListEnd>Você chegou ao fim da lista</ListEnd>
          </EventList>
        )}
      </ScheduleContent>
    </ScheduleTabContainer>
  );
}
