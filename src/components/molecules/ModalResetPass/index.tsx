import Image from 'next/image'
import confirmEmail from '@/assets/ConfirmEmail.png'
import logo from '@/assets/logos/sou-junior.svg'
import { ContainerModal, ImageContainer, Message, TitleModal } from './style'
import { DialogContentProps } from '@radix-ui/react-dialog'
import { Modal } from '@/components/atoms/Modal'

type ModalResetPass = DialogContentProps

export default function ModalResetPass(props: ModalResetPass) {
  return (
    <ContainerModal {...props}>
      <TitleModal>Cheque seu email</TitleModal>
      <Modal.Close />

      <ImageContainer>
        <Image
          src={confirmEmail}
          alt="Garoto mexendo em notebook"
          width={285}
          height={278}
        />
      </ImageContainer>
      <Message>
        Enviamos para você um e-mail com as instruções para redefinir sua senha.
      </Message>
      <div>
        <Image src={logo} alt="logo da SouJunior" width={108} height={17} />
      </div>
    </ContainerModal>
  )
}
