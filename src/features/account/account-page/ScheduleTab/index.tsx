import { Button } from '@/components/button';
import { Modal } from '@/components/modal';
import { Spinner } from '@/components/spinner';
import { TabsContent } from '@/components/ui/tabs';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { ModalCancelKeepRoute } from '@/features/account/modal-cancel-keep-route';
import UserUpdateService from '@/services/user/userUpdateService';
import { handleError } from '@/utils/handleError';
import {
  isCalendlyLink,
  isValidHttpsUrl,
  splitCalendlyName,
} from '@/utils/ValidateCalendlyInput';
import {
  CheckCircle as CheckCircleOutlineRoundedIcon,
  AlertCircle as ErrorOutlineRoundedIcon,
} from 'lucide-react';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        await updateMentorCalendlyInfo({ calendlyName: '', agendaName: '' });
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
    if (hasScheduleChanges) setOpenWarningModal(true);
  };

  const handleDiscard = () => {
    setInputValue(savedInputValue);
    toastMessageDiscarded();
  };

  const startOAuthCalendlySync = () => {
    const calendlyClientId = 'Vx2DRKhKAvTcl5y8N1SqGg0OQ-9HR4KTO62t29C5L8M';
    const redirectUri =
      'https://p01--mentores-backend-api-dev--bj8pjy8s82zl.code.run/calendly/callback';
    const calendlyAuthUrl = `https://auth.calendly.com/oauth/authorize?client_id=${calendlyClientId}&response_type=code&redirect_uri=${redirectUri}&state=${encodeURIComponent(String(mentor.data?.id))}`;
    window.location.href = calendlyAuthUrl;
  };

  const hasError = isValid === false && inputValue !== '';

  return (
    <TabsContent
      value="schedule"
      className="flex flex-col gap-4 data-active:h-full"
    >
      <h2 className="text-2xl font-semibold leading-[1.8rem] pt-1 pb-2">
        Agenda
      </h2>

      <div className="flex flex-col gap-6 max-w-172">
        <div className="flex gap-2 items-center pl-4 pr-[0.8rem] py-4 bg-[#f5dc66] rounded-lg [&_p]:text-[#705e0b] [&_p]:text-[0.9rem]">
          <ErrorOutlineRoundedIcon className="text-[#604f01]" />
          <p>
            Caso altere o link da sua agenda no Calendly, é necessário
            atualizá-lo também nessa página.
          </p>
        </div>

        <div className="flex justify-between max-w-md">
          <Button
            as="a"
            href="https://calendly.com/"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            Ir para o Calendly
          </Button>
          <Button onClick={startOAuthCalendlySync} variant="secondary">
            Vincular Calendly OAuth
          </Button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="relative w-full flex items-center justify-between">
            <input
              className={`flex items-center gap-2 border rounded-lg bg-white text-[#323232] focus:outline-none flex-1 w-full h-full text-base leading-[150%] placeholder:text-[#D9D9D9] ${
                hasError
                  ? 'border-[#E94242] pl-[2.3rem] py-3.5 pr-3.5 focus:shadow-[0_0_0_1px_#E94242]'
                  : 'border-[#ACACAC] p-3.5 focus:border-[#002C66] focus:shadow-[0_0_0_1px_#002C66]'
              }`}
              name="calendlyLink"
              type="text"
              value={inputValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.target.value)
              }
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
            <label
              htmlFor="link-calendly"
              className="absolute left-2 leading-[1.4rem] font-normal bg-white transition-all duration-300 pointer-events-none pl-3"
            >
              Link da agenda do Calendly
            </label>
            {hasError && (
              <ErrorOutlineRoundedIcon
                aria-hidden
                className="w-6 h-6 absolute left-2 text-[#E94242]"
              />
            )}
          </div>
          {hasError && (
            <span className="block text-[#E94242] font-bold text-xs text-center py-4">
              O link precisa ser nesse formato: <br />
              https://calendly.com/seu-usuario-calendly/nome-do-evento
            </span>
          )}

          <div className="h-px w-full bg-[#666666] my-6" />

          <div className="flex items-center justify-end gap-4">
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
              <Button
                disabled
                className="h-10.75 p-0 w-[5.9rem] cursor-wait bg-[#003986] border-[#003986]"
              >
                <Spinner />
              </Button>
            ) : (
              <Button disabled={isButtonDisabled} type="submit">
                Salvar
              </Button>
            )}
          </div>
        </form>
      </div>
    </TabsContent>
  );
}
