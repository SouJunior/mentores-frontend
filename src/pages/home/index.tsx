import { Footer } from '@/components/molecules/Footer'
import { DepoSection } from '@/components/organisms/DepoSection'
import { MentorSection } from '@/components/organisms/MentorSection'
import { Onboarding } from '@/components/organisms/Onboarding'
import { HeroSection } from '../../components/organisms/HeroSection'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Modal } from '@/components/atoms/Modal'
import {
  ModalButton,
  ModalContainer,
  ModalDescription,
  ModalTitle,
} from '../../styles/pages/home'

export default function HomePage() {
  const [isConnectCalendly, setIsConnectCalendly] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsConnectCalendly(Boolean(router.query['connect-calendly']))
  }, [router.query])

  const handleCloseModal = () => {
    router.replace('/', undefined, {
      shallow: true,
    })
    setIsConnectCalendly(false)
  }

  return (
    <>
      <HeroSection />
      <Onboarding />
      <MentorSection />
      <DepoSection />
      <Footer />

      <Modal
        open={isConnectCalendly}
        bgColor="#fff"
        onClose={handleCloseModal}
        height={286}
        width={500}
      >
        <ModalContainer>
          <ModalTitle>Falta pouco para você se tornar um mentor.</ModalTitle>
          <ModalDescription>
            Para compartilhar seus horários disponíveis você deve criar a sua
            agenda pelo Calendly.
          </ModalDescription>
          <ModalButton href="https://calendly.com/pt" target="_blank">
            Ir para o Calendly
          </ModalButton>
        </ModalContainer>
      </Modal>
    </>
  )
}
