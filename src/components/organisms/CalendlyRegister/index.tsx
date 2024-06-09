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
import { HomePageProps } from '@/pages/home'

export default function CalendlyRegister({
  isOpen,
  currentStep,
  setCurrentStep,
  handleNextStep,
  handlePreviousStep,
  handleCloseModal,
}: HomePageProps) {
  return (
    <>
      <Modal.Root open={isOpen} onOpenChange={handleCloseModal}>
        <ModalContainer>
          {currentStep === 1 && (
            <ModalCalendlyStep1 handleNextStep={handleNextStep} />
          )}

          {currentStep === 2 && (
            <ModalCalendlyStep2
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          )}
          {currentStep === 3 && (
            <ModalCalendlyStep3
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
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
