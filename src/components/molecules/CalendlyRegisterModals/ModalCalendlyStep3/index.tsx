import React, { ChangeEvent, useState } from 'react'
import { Button } from '@/components/atoms/Button'
import {
  ModalButton,
  ModalDescription,
  ModalTitle,
} from '@/components/organisms/CalendlyRegister/style'
import { ModalCalendlyStep2Props } from '@/components/molecules/CalendlyRegisterModals/ModalCalendlyStep2'
import { api } from '@/lib/axios'
import { Spinner } from '@/components/atoms/Spinner'
import { ButtonLoading } from '@/components/molecules/FormRegister/style'
import {
  isCalendlyLink,
  isValidHttpsUrl,
  splitCalendlyName,
} from '@/utils/ValidateCalendlyInput'
import { ContainerErrorInputCalendly, InputCalendlyStyled } from './style'
import { handleError } from '@/utils/handleError'

interface ModalCalendlyStep3Props extends ModalCalendlyStep2Props {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

export default function ModalCalendlyStep3({
  handlePreviousStep,
  setCurrentStep,
}: ModalCalendlyStep3Props) {
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [isValid, setIsValid] = useState(false)

  const buttonDisabledVerification = () => {
    const valid = isValidHttpsUrl(inputValue) && isCalendlyLink(inputValue)
    setIsValid(valid)
    setIsButtonDisabled(!valid)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      if (isValidHttpsUrl(inputValue) && isCalendlyLink(inputValue)) {
        const { firstPathName, secondPathName } = splitCalendlyName(inputValue)

        await api.post('/mentor', {
          calendlyName: firstPathName,
          agendaName: secondPathName,
        })

        setCurrentStep(4)
      }
    } catch (error) {
      handleError('Algum erro aconteceu. Entre em contato conosco.')
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <ModalTitle>Compartilhe seus horários.</ModalTitle>
      <ModalDescription>
        Agora, insira o link da sua agenda do Calendly no campo abaixo.
      </ModalDescription>
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <InputCalendlyStyled
          className={`${isValid === false && inputValue !== '' ? 'error' : ''}`}
          name="calendlyLink"
          placeholder="Calendly Link"
          type="text"
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value)
            buttonDisabledVerification()
          }}
          onPaste={(e: React.ClipboardEvent<HTMLInputElement>) => {
            const pastedText = e.clipboardData.getData('text')
            setInputValue(pastedText)
            buttonDisabledVerification()
          }}
        />
        {isValid === false && inputValue !== '' && (
          <ContainerErrorInputCalendly>
            O link precisa ser nesse formato:
            https://calendly.com/seu-usuario-calendly/nome-do-evento
          </ContainerErrorInputCalendly>
        )}

        {isLoading ? (
          <ButtonLoading disabled>
            <Spinner />
          </ButtonLoading>
        ) : (
          <Button disabled={isButtonDisabled} as={ModalButton} type="submit">
            Salvar
          </Button>
        )}

        <Button
          as={ModalButton}
          onClick={handlePreviousStep}
          variant="secondary"
        >
          Voltar
        </Button>
      </form>
    </>
  )
}
