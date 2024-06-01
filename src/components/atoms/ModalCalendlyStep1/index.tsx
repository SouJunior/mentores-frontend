import React from 'react'
import { Button } from '@/components/atoms/Button'
import { ModalButton, ModalDescription, ModalTitle } from '@/styles/pages/home'

type ModalCalendlyStep1Props = {
  handleNextStep: () => void
}

export default function ModalCalendlyStep2({
  handleNextStep,
}: ModalCalendlyStep1Props) {
  const handleNextStepFromChild = () => {
    handleNextStep()
  }

  return (
    <>
      <ModalTitle>Falta pouco para você se tornar um mentor.</ModalTitle>
      <ModalDescription>
        Disponibilize seus horários, compartilhando sua agenda do Calendly.
      </ModalDescription>
      <Button as={ModalButton} onClick={handleNextStepFromChild}>
        Próximo
      </Button>
    </>
  )
}
