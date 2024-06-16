import React from 'react'
import { Button } from '@/components/atoms/Button'
import {
  ButtonsContainer,
  ModalButton,
  ModalDescription,
  ModalTitle,
} from '@/components/organisms/CalendlyRegister/style'
import StepperDots from '@/components/atoms/StepperDots'

type ModalCalendlyStep1Props = {
  handleNextStep: () => void
  currentStep: number
}

export default function ModalCalendlyStep1({
  handleNextStep,
  currentStep,
}: ModalCalendlyStep1Props) {
  return (
    <>
      <ModalTitle>
        Falta pouco para <br /> você se tornar um mentor.
      </ModalTitle>
      <ModalDescription>
        Disponibilize seus horários, compartilhando sua agenda do Calendly.
      </ModalDescription>
      <StepperDots currentStep={currentStep} />
      <ButtonsContainer>
        <Button onClick={handleNextStep} as={ModalButton}>
          Próximo
        </Button>
      </ButtonsContainer>
    </>
  )
}
