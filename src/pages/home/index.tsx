import { Footer } from '@/components/organisms/Footer'
import { DepoSection } from '@/components/organisms/DepoSection'
import { MentorSection } from '@/components/organisms/MentorSection'
import { Onboarding } from '@/components/organisms/Onboarding'
import { HeroSection } from '@/components/organisms/HeroSection'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import CalendlyRegister from '@/components/organisms/CalendlyRegister'

export type HomePageProps = {
  handleCloseModal: () => void
  handleNextStep: () => void
  handlePreviousStep: () => void
  isOpen: boolean
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const router = useRouter()

  useEffect(() => {
    const openStatus = Boolean(router.query['connect-calendly'])
    setIsOpen(openStatus)
  }, [router.query])

  const handleCloseModal = () => {
    router.replace('/', undefined, {
      shallow: true,
    })
    setIsOpen(false)
  }

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1)
  }

  const handlePreviousStep = () => {
    setCurrentStep((prev) => prev - 1)
  }

  return (
    <>
      <HeroSection />
      <Onboarding />
      <MentorSection />
      <DepoSection />
      <Footer />
      <CalendlyRegister
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
        handleCloseModal={handleCloseModal}
      />
    </>
  )
}
