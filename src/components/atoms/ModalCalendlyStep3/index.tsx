import React from 'react'
import { Button } from '@/components/atoms/Button'
import { ModalButton, ModalDescription, ModalTitle } from '@/styles/pages/home'
import { ModalCalendlyStep2Props } from '@/components/atoms/ModalCalendlyStep2'

type ModalCalendlyStep3Props = ModalCalendlyStep2Props

export default function ModalCalendlyStep3({
  handleNextStep,
  handlePreviousStep,
}: ModalCalendlyStep3Props) {
  const handleNextStepFromChild = () => {
    handleNextStep()
  }

  const handlePreviousStepFromChild = () => {
    handlePreviousStep()
  }

  return (
    <>
      <ModalTitle>Compartilhe seus horários.</ModalTitle>
      <ModalDescription>
        Agora, insira o link da sua agenda do Calendly no campo abaixo.
      </ModalDescription>
      <Button as={ModalButton} onClick={handleNextStepFromChild}>
        Salvar
      </Button>
      <Button as={ModalButton} onClick={handlePreviousStepFromChild}>
        Voltar
      </Button>
    </>
  )
}
