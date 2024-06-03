import { Footer } from '@/components/organisms/Footer'
import { DepoSection } from '@/components/organisms/DepoSection'
import { MentorSection } from '@/components/organisms/MentorSection'
import { Onboarding } from '@/components/organisms/Onboarding'
import { HeroSection } from '@/components/organisms/HeroSection'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import * as Dialog from '@radix-ui/react-dialog'
import ModalCalendlyStep1 from '@/components/atoms/ModalCalendlyStep1'
import ModalCalendlyStep2 from '@/components/atoms/ModalCalendlyStep2'
import ModalCalendlyStep3 from '@/components/atoms/ModalCalendlyStep3'
import ModalCalendlyStep4 from '@/components/atoms/ModalCalendlyStep4'
import { Modal } from '@/components/atoms/Modal'
import { ModalClose, ModalContainer } from '@/styles/pages/home'

export type ModalCalendlyProps = Dialog.DialogProps

export default function HomePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsOpen(Boolean(router.query['connect-calendly']))
  }, [router.query])

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1)
  }

  const handlePreviousStep = () => {
    setCurrentStep((prev) => prev - 1)
  }

  const handleCloseModal = () => {
    router.replace('/', undefined, {
      shallow: true,
    })
    setIsOpen(false)
  }
  return (
    <>
      <HeroSection />
      <Onboarding />
      <MentorSection />
      <DepoSection />
      <Footer />

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
