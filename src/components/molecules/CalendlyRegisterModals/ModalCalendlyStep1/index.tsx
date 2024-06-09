import React from 'react'
import { Button } from '@/components/atoms/Button'
import {
  ModalButton,
  ModalDescription,
  ModalTitle,
} from '@/components/organisms/CalendlyRegister/style'
import StepperDots from '@/components/atoms/StepperDots'

type ModalCalendlyStep1Props = {
  handleNextStep: () => void
}

export default function ModalCalendlyStep2({
  handleNextStep,
}: ModalCalendlyStep1Props) {
  return (
    <>
      <ModalTitle>Falta pouco para você se tornar um mentor.</ModalTitle>
      <ModalDescription>
        Disponibilize seus horários, compartilhando sua agenda do Calendly.
      </ModalDescription>
      <StepperDots />
      <Button as={ModalButton} onClick={handleNextStep}>
        Próximo
      </Button>
    </>
  )
}
