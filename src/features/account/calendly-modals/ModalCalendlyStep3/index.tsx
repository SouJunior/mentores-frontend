import { Button } from '@/components/button';
import { Spinner } from '@/components/spinner';
import StepperDots from '@/components/stepper-dots';
import { Modal } from '@/components/modal';
import { useAuthContext } from '@/context/Auth/AuthContext';
import UserUpdateService from '@/services/user/userUpdateService';
import {
  isCalendlyLink,
  isValidHttpsUrl,
  splitCalendlyName,
} from '@/utils/ValidateCalendlyInput';
import { handleError } from '@/utils/handleError';
import { AlertCircle as ErrorOutlineIcon } from 'lucide-react';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';

type ModalCalendlyStep3Props = {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  handlePreviousStep: () => void;
  currentStep: number;
};

export default function ModalCalendlyStep3({
  handlePreviousStep,
  setCurrentStep,
  currentStep,
}: ModalCalendlyStep3Props) {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isValid, setIsValid] = useState(false);

  const { handleMentorCalendlyInfo } = UserUpdateService();
  const { mentor } = useAuthContext();

  const buttonDisabledVerification = useCallback(() => {
    const valid = isValidHttpsUrl(inputValue) && isCalendlyLink(inputValue);
    setIsValid(valid);
    setIsButtonDisabled(!valid);
  }, [inputValue]);

  useEffect(() => {
    buttonDisabledVerification();
  }, [inputValue, buttonDisabledVerification]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (isValidHttpsUrl(inputValue) && isCalendlyLink(inputValue)) {
        const { firstPathName, secondPathName } = splitCalendlyName(inputValue);
        await handleMentorCalendlyInfo({
          calendlyName: firstPathName,
          agendaName: secondPathName,
        });
        setCurrentStep(4);
        mentor.refetch();
      }
    } catch (error) {
      handleError('Algum erro aconteceu. Entre em contato conosco.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const hasError = isValid === false && inputValue !== '';

  return (
    <>
      <Modal.Title className="text-[1.4rem] text-[#323232] font-semibold leading-[140%] text-center px-16 mt-6 mx-auto">
        Compartilhe seus horários.
      </Modal.Title>
      <Modal.Description className="text-[1.1rem] text-[#323232] leading-[140%] font-['Radio_Canada',sans-serif] text-center px-16">
        Agora, insira o link da sua agenda <br /> do Calendly no campo abaixo.
      </Modal.Description>
      <form onSubmit={handleSubmit}>
        <div className="relative w-full flex items-center justify-between">
          <input
            className={`flex items-center gap-2 border rounded-lg bg-white text-[#323232] focus:outline-none flex-1 w-full h-full py-[0.875rem] pr-[0.875rem] text-base leading-[150%] placeholder:text-[#D9D9D9] ${
              hasError
                ? 'border-[#E94242] pl-[2.3rem] focus:shadow-[0_0_0_1px_#E94242]'
                : 'border-[#ACACAC] pl-[0.875rem] focus:border-[#002C66] focus:shadow-[0_0_0_1px_#002C66]'
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
              setIsButtonDisabled(!valid);
              setInputValue(pastedText);
            }}
            id="link-calendly"
          />
          <label
            htmlFor="link-calendly"
            className="absolute left-2 leading-[1.4rem] font-normal bg-white transition-all duration-300 pointer-events-none pl-3"
          >
            Link Calendly
          </label>
          {hasError && (
            <ErrorOutlineIcon
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

        <StepperDots currentStep={currentStep} />

        <div className="flex items-center justify-center gap-4">
          <Button
            variant="secondary"
            onClick={handlePreviousStep}
            className="px-8"
          >
            Voltar
          </Button>
          {isLoading ? (
            <Button
              disabled
              className="h-[45px] p-0 w-28 cursor-wait bg-[#003986] border-[#003986]"
            >
              <Spinner />
            </Button>
          ) : (
            <Button disabled={isButtonDisabled} type="submit" className="px-8">
              Salvar
            </Button>
          )}
        </div>
      </form>
    </>
  );
}
