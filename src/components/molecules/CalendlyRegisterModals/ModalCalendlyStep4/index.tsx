import React from 'react'
import { Button } from '@/components/atoms/Button'
import {
  ModalButton,
  ModalDescription,
  ModalTitle,
} from '@/components/organisms/CalendlyRegister/style'
import Image from 'next/image'
import imagemParabens from '@/assets/modalCalendly/parabens.png'

type ModalCalendlyStep4Props = {
  handleCloseModal: () => void
}

export default function ModalCalendlyStep4({
  handleCloseModal,
}: ModalCalendlyStep4Props) {
  return (
    <>
      <ModalTitle>Parabéns!</ModalTitle>
      <ModalDescription>
        Seu cadastro como mentor foi concluído com sucesso.
      </ModalDescription>
      <Image
        alt="Imagem de uma mulher comemorando com um dos braços erguido"
        src={imagemParabens}
      />

      <Button as={ModalButton} onClick={handleCloseModal}>
        Fechar
      </Button>
    </>
  )
}
