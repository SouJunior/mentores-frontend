import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import ModalCalendlyStep1 from '@/components/atoms/ModalCalendlyStep1'
import ModalCalendlyStep2 from '@/components/atoms/ModalCalendlyStep2'
import ModalCalendlyStep3 from '@/components/atoms/ModalCalendlyStep3'
import ModalCalendlyStep4 from '@/components/atoms/ModalCalendlyStep4'
import { Modal } from '@/components/atoms/Modal'
import { ModalClose, ModalContainer } from '@/styles/pages/home'

export type ModalCalendlyProps = Dialog.DialogProps

export default function TestHomeWrapper() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1)
  }

  const handlePreviousStep = () => {
    setCurrentStep((prev) => prev - 1)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }
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
