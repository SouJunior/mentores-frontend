import React from 'react'
import ModalCalendlyStep1 from '@/components/molecules/CalendlyRegisterModals/ModalCalendlyStep1'
import ModalCalendlyStep2 from '@/components/molecules/CalendlyRegisterModals/ModalCalendlyStep2'
import ModalCalendlyStep3 from '@/components/molecules/CalendlyRegisterModals/ModalCalendlyStep3'
import ModalCalendlyStep4 from '@/components/molecules/CalendlyRegisterModals/ModalCalendlyStep4'
import { Modal } from '@/components/atoms/Modal'
import {
  ModalClose,
  ModalContainer,
} from '@/components/organisms/CalendlyRegister/style'

type CalendlyRegisterProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
  handleNextStep: () => void
  handlePreviousStep: () => void
  handleCloseModal: () => void
}

export default function CalendlyRegister({
  isOpen,
  currentStep,
  setCurrentStep,
  handleNextStep,
  handlePreviousStep,
  handleCloseModal,
}: CalendlyRegisterProps) {
  return (
    <>
      <Modal.Root open={isOpen} onOpenChange={handleCloseModal}>
        <ModalContainer>
          {currentStep === 1 && (
            <ModalCalendlyStep1
              handleNextStep={handleNextStep}
              currentStep={currentStep}
            />
          )}

          {currentStep === 2 && (
            <ModalCalendlyStep2
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
              currentStep={currentStep}
            />
          )}
          {currentStep === 3 && (
            <ModalCalendlyStep3
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          )}
          {currentStep === 4 && (
            <ModalCalendlyStep4 handleCloseModal={handleCloseModal} />
          )}

          <ModalClose />
        </ModalContainer>
      </Modal.Root>
    </>
  )
}
