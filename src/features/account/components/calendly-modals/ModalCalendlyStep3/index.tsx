import { updateCalendlyInfo } from '@/features/account/actions/actions';
import { Button } from '@/shared/components/button';
import { Modal } from '@/shared/components/modal';
import { Spinner } from '@/shared/components/spinner';
import StepperDots from '@/shared/components/stepper-dots';
import {
  isCalendlyLink,
  isValidHttpsUrl,
  splitCalendlyName,
} from '@/shared/utils/ValidateCalendlyInput';
import { handleError } from '@/shared/utils/handleError';
import { AlertCircle as ErrorOutlineIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
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

  const router = useRouter();

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
        const result = await updateCalendlyInfo({
          calendlyName: firstPathName,
          agendaName: secondPathName,
        });
        if (result?.error) throw new Error(result.error);
        setCurrentStep(4);
        router.refresh();
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
      <Modal.Title className="text-[1.4rem] text-black-200 font-semibold leading-[140%] text-center px-16 mt-6 mx-auto">
        Compartilhe seus horários.
      </Modal.Title>
      <Modal.Description className="text-[1.1rem] text-black-200 leading-[140%] font-['Radio_Canada',sans-serif] text-center px-16">
        Agora, insira o link da sua agenda <br /> do Calendly no campo abaixo.
      </Modal.Description>
      <form onSubmit={handleSubmit}>
        <div className="relative w-full flex items-center justify-between">
          <input
            className={`flex items-center gap-2 border rounded-lg bg-white text-black-200 focus:outline-none flex-1 w-full h-full py-[0.875rem] pr-[0.875rem] text-base leading-[150%] placeholder:text-gray-250 ${
              hasError
                ? 'border-red-400 pl-[2.3rem] focus:shadow-focus-red'
                : 'border-gray-600 pl-[0.875rem] focus:border-blue-850 focus:shadow-focus-blue'
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
              className="h-[45px] p-0 w-28 cursor-wait bg-blue-800 border-blue-800"
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
