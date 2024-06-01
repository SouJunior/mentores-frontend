import React from 'react'
import { Button } from '@/components/atoms/Button'
import { ModalButton, ModalDescription, ModalTitle } from '@/styles/pages/home'

type ModalCalendlyStep4Props = {
  handleCloseModal: () => void
}

export default function ModalCalendlyStep4({
  handleCloseModal,
}: ModalCalendlyStep4Props) {
  const handleCloseFromChild = () => {
    handleCloseModal()
  }

  return (
    <>
      <ModalTitle>Parabéns!</ModalTitle>
      <ModalDescription>
        Seu cadastro como mentor foi concluído com sucesso.
      </ModalDescription>
      <Button as={ModalButton} onClick={handleCloseFromChild}>
        Fechar
      </Button>
    </>
  )
}
