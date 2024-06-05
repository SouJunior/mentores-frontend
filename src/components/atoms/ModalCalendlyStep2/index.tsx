import React from 'react'
import { Button } from '@/components/atoms/Button'
import { ModalButton, ModalDescription, ModalTitle } from '@/styles/pages/home'
import Image from 'next/image'
import copyLinkEvent from '@/assets/modalCalendly/copyLinkEvent.png'
import Link from 'next/link'

export interface ModalCalendlyStep2Props {
  handleNextStep: () => void
  handlePreviousStep: () => void
}

export default function ModalCalendlyStep2({
  handleNextStep,
  handlePreviousStep,
}: ModalCalendlyStep2Props) {
  const handleNextStepFromChild = () => {
    handleNextStep()
  }

  const handlePreviousStepFromChild = () => {
    handlePreviousStep()
  }
  return (
    <>
      <ModalTitle>Copie o link da sua agenda.</ModalTitle>
      <ModalDescription>
        Acesse sua conta no Calendly e copie o seu link, conforme exemplificado
        abaixo.
      </ModalDescription>
      <Image
        alt="Imagem de um evento dentro do Calendly com o mouse apontando para o botão nomeado de copiar link"
        src={copyLinkEvent}
      />
      <p>
        Ou acesse esse{' '}
        <Link
          href="https://help.calendly.com/hc/en-us/articles/223193448-Sharing-your-scheduling-link#sharing-your-scheduling-link-0-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          tutorial sobre compartilhamento de links do Calendly
        </Link>{' '}
        para uma explicação detalhada.
      </p>

      <Button
        as={Link}
        href="https://calendly.com/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleNextStepFromChild}
      >
        Ir para o Calendly
      </Button>

      <Button
        as={ModalButton}
        onClick={handlePreviousStepFromChild}
        variant="secondary"
      >
        Voltar
      </Button>
    </>
  )
}
