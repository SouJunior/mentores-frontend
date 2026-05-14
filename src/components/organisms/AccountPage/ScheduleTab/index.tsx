import { Button } from '@/components/atoms/Button';
import { Modal } from '@/components/atoms/Modal';
import { Spinner } from '@/components/atoms/Spinner';
import { ModalCancelKeepRoute } from '@/components/molecules/ModalCancelKeepRoute';
import { useAuthContext } from '@/context/Auth/AuthContext';
import UserUpdateService from '@/services/user/userUpdateService';
import { handleError } from '@/utils/handleError';
import {
  isCalendlyLink,
  isValidHttpsUrl,
  splitCalendlyName,
} from '@/utils/ValidateCalendlyInput';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
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
  PlaceholderInput,
  ScheduleContent,
  ScheduleTabContainer,
  StyledErrorOutlineRoundedIcon,
} from './styles';

export function ScheduleTab() {
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [savedInputValue, setSavedInputValue] = useState('');
  const [openWarningModal, setOpenWarningModal] = useState(false);

  const { handleMentorCalendlyInfo, updateMentorCalendlyInfo } =
    UserUpdateService();
  const { mentor, mentorCalendlyInfo } = useAuthContext();

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
  const isButtonDisabled = !hasScheduleChanges || !isValid || isLoading;

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
        await updateMentorCalendlyInfo(
          {
            calendlyName: '',
            agendaName: '',
          }
        );

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
                Salvar
              </Button>
            )}
          </ButtonsContainer>
        </form>
      </ScheduleContent>
    </ScheduleTabContainer>
  );
}
