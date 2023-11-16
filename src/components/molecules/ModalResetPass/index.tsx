import { Modal } from '@/components/atoms/Modal'
import Image from 'next/image'
import confirmEmail from '@/assets/ConfirmEmail.png'
import logo from '@/assets/logos/sou-junior.svg'
import { ContainerModal, ImageContainer, Message, TitleModal } from './style'

interface ModalResetPass {
  open: boolean
  onClose: () => void
  height: number
}

export default function ModalResetPass({
  open,
  onClose,
  height,
}: ModalResetPass) {
  return (
    <Modal open={open} onClose={onClose} height={height} bgColor="#fff">
      <ContainerModal>
        <TitleModal>Cheque seu email</TitleModal>
        <ImageContainer>
          <Image
            src={confirmEmail}
            alt="Garoto mexendo em notebook"
            width={285}
            height={278}
          />
        </ImageContainer>
        <Message>
          Enviamos para você um e-mail com as instruções para redefinir sua
          senha.
        </Message>
        <div>
          <Image src={logo} alt="logo da SouJunior" width={108} height={17} />
        </div>
      </ContainerModal>
    </Modal>
  )
}
