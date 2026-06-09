import { updateCalendlyInfo } from '@/features/account/actions/actions';
import { ModalCancelKeepRoute } from '@/features/account/components/modal-cancel-keep-route';
import { Button } from '@/shared/components/button';
import { Modal } from '@/shared/components/modal';
import { Spinner } from '@/shared/components/spinner';
import { TabsContent } from '@/shared/components/ui/tabs';
import { IMentor } from '@/shared/types/Auth';
import { ICalendlyUserInfo } from '@/shared/types/IUseUserCalendlyInfoService';
import { handleError } from '@/shared/utils/handleError';
import {
  isCalendlyLink,
  isValidHttpsUrl,
  splitCalendlyName,
} from '@/shared/utils/ValidateCalendlyInput';
import {
  CheckCircle as CheckCircleOutlineRoundedIcon,
  AlertCircle as ErrorOutlineRoundedIcon,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ScheduleTabProps {
  mentor: IMentor;
  calendlyInfo: ICalendlyUserInfo;
}

export function ScheduleTab({ mentor, calendlyInfo }: ScheduleTabProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [savedInputValue, setSavedInputValue] = useState('');
  const [openWarningModal, setOpenWarningModal] = useState(false);

  const router = useRouter();

  const generateCalendlyLink = useCallback(() => {
    if (calendlyInfo?.calendlyName && calendlyInfo?.agendaName) {
      return `https://calendly.com/${calendlyInfo.calendlyName}/${calendlyInfo.agendaName}`;
    }
    return '';
  }, [calendlyInfo?.agendaName, calendlyInfo?.calendlyName]);

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
        backgroundColor: 'var(--color-green-400)',
        color: 'var(--color-green-800)',
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
        backgroundColor: 'var(--color-yellow)',
        color: 'var(--color-brown-300)',
        fontWeight: 500,
        marginTop: '5rem',
      },
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (inputValue.trim() === '') {
        const result = await updateCalendlyInfo({
          id: calendlyInfo?.id,
          calendlyName: '',
          agendaName: '',
        });
        if (result?.error) throw new Error(result.error);
        setSavedInputValue('');
        router.refresh();
        toastMessageSuccess();
        return;
      }
      if (isValidHttpsUrl(inputValue) && isCalendlyLink(inputValue)) {
        const { firstPathName, secondPathName } = splitCalendlyName(inputValue);
        const result = await updateCalendlyInfo({
          id: calendlyInfo?.id,
          calendlyName: firstPathName,
          agendaName: secondPathName,
        });
        if (result?.error) throw new Error(result.error);
        setSavedInputValue(inputValue);
        router.refresh();
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
    const calendlyAuthUrl = `https://auth.calendly.com/oauth/authorize?client_id=${calendlyClientId}&response_type=code&redirect_uri=${redirectUri}&state=${encodeURIComponent(String(mentor.id))}`;
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
        <div className="flex gap-2 items-center pl-4 pr-[0.8rem] py-4 bg-yellow rounded-lg [&_p]:text-brown-300 [&_p]:text-[0.9rem]">
          <ErrorOutlineRoundedIcon className="text-brown-700" />
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
              className={`flex items-center gap-2 border rounded-lg bg-white text-black-200 focus:outline-none flex-1 w-full h-full text-base leading-[150%] placeholder:text-gray-250 ${
                hasError
                  ? 'border-red-400 pl-[2.3rem] py-3.5 pr-3.5 focus:shadow-focus-red'
                  : 'border-gray-600 p-3.5 focus:border-blue-850 focus:shadow-focus-blue'
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
                className="w-6 h-6 absolute left-2 text-red-400"
              />
            )}
          </div>
          {hasError && (
            <span className="block text-red-400 font-bold text-xs text-center py-4">
              O link precisa ser nesse formato: <br />
              https://calendly.com/seu-usuario-calendly/nome-do-evento
            </span>
          )}

          <div className="h-px w-full bg-gray-700 my-6" />

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
                className="h-10.75 p-0 w-[5.9rem] cursor-wait bg-blue-800 border-blue-800"
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
