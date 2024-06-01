import React from 'react'
import { Button } from '@/components/atoms/Button'
import { ModalButton, ModalDescription, ModalTitle } from '@/styles/pages/home'

export type ModalCalendlyStep2Props = {
  handleNextStep: () => void
  handlePreviousStep: () => void
}

export default function ModalCalendlyStep2({
  handleNextStep,
  handlePreviousStep,
}: ModalCalendlyStep2Props) {
  const handleNextStepFromChild = () => {
    handleNextStep()
  }

  const handlePreviousStepFromChild = () => {
    handlePreviousStep()
  }
  return (
    <>
      <ModalTitle>Copie o link da sua agenda.</ModalTitle>
      <ModalDescription>
        Acesse sua conta no Calendly e copie o seu link, conforme exemplificado
        abaixo.
      </ModalDescription>
      <Button as={ModalButton} onClick={handleNextStepFromChild}>
        Ir para o Calendly
      </Button>
      <Button as={ModalButton} onClick={handlePreviousStepFromChild}>
        Voltar
      </Button>
    </>
  )
}
