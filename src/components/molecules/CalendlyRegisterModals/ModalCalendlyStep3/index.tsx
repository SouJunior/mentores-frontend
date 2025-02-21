import { Button } from '@/components/atoms/Button';
import { Spinner } from '@/components/atoms/Spinner';
import StepperDots from '@/components/atoms/StepperDots';
import {
  ButtonsContainer,
  ModalButton,
  ModalButtonSecondary,
  ModalDescription,
  ModalTitle,
} from '@/components/organisms/CalendlyRegister/style';
import UserUpdateService from '@/services/user/userUpdateService';
import {
  isCalendlyLink,
  isValidHttpsUrl,
  splitCalendlyName,
} from '@/utils/ValidateCalendlyInput';
import { handleError } from '@/utils/handleError';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import {
  ButtonLoading,
  ContainerErrorInputCalendly,
  ContainerInput,
  InputCalendlyStyled,
  PlaceholderInput,
  StyledErrorOutlineIcon,
} from './style';
import { useAuthContext } from '@/context/Auth/AuthContext';

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

  const { handle } = UserUpdateService();
  const { mentor } = useAuthContext()

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

        await handle({
          calendlyName: firstPathName,
          agendaName: secondPathName,
        });

        setCurrentStep(4);
        mentor.refetch()
      }
    } catch (error) {
      handleError('Algum erro aconteceu. Entre em contato conosco.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ModalTitle>Compartilhe seus horários.</ModalTitle>
      <ModalDescription>
        Agora, insira o link da sua agenda <br /> do Calendly no campo abaixo.
      </ModalDescription>
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <ContainerInput>
          <InputCalendlyStyled
            className={`${
              isValid === false && inputValue !== '' ? 'error' : ''
            }`}
            name="calendlyLink"
            type="text"
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInputValue(e.target.value);
            }}
            onPaste={(e: React.ClipboardEvent<HTMLInputElement>) => {
              e.preventDefault();
              const pastedText = e.clipboardData.getData('text');

              // Código abaixo é necessário para evitar um bug, então mesmo parecendo que a validação do link está incorretamente duplicada no código (já que o useEffect já está fazendo a validação) é necessário a repetição da validação aqui dentro do onPaste para evitar esse bug: mesmo ao colocar um link correto, por meio segundo o input ficava vermelho e com icone de ErrorOutlineIcon, e depois volta a ficar azul dizendo que o link está correto
              const temporaryInputValue = pastedText;
              const valid =
                isValidHttpsUrl(temporaryInputValue) &&
                isCalendlyLink(temporaryInputValue);
              setIsValid(valid);
              setIsButtonDisabled(!valid);
              setInputValue(temporaryInputValue);
            }}
            id="link-calendly"
          />
          <PlaceholderInput htmlFor="link-calendly">
            Link Calendly
          </PlaceholderInput>
          {isValid === false && inputValue !== '' ? (
            <StyledErrorOutlineIcon aria-hidden color="error" />
          ) : (
            ''
          )}
        </ContainerInput>
        {isValid === false && inputValue !== '' && (
          <ContainerErrorInputCalendly>
            O link precisa ser nesse formato: <br />
            https://calendly.com/seu-usuario-calendly/nome-do-evento
          </ContainerErrorInputCalendly>
        )}

        <StepperDots currentStep={currentStep} />

        <ButtonsContainer>
          <Button onClick={handlePreviousStep} as={ModalButtonSecondary}>
            Voltar
          </Button>

          {isLoading ? (
            <ButtonLoading disabled>
              <Spinner />
            </ButtonLoading>
          ) : (
            <Button disabled={isButtonDisabled} as={ModalButton} type="submit">
              Salvar
            </Button>
          )}
        </ButtonsContainer>
      </form>
    </>
  );
}
