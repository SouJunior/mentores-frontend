import { Modal } from '@/components/atoms/Modal'
import Image from 'next/image'
import confirmEmail from '@/assets/ConfirmEmail.png'
import logo from '@/assets/logos/sou-junior.svg'
import {
  ContainerModal,
  FooterModal,
  Hash,
  HeaderModal,
  Message,
  TitleModal,
} from './style'
import { DialogProps } from '@radix-ui/react-dialog'

type ModalEmailProps = DialogProps

export default function ModalEmail(props: ModalEmailProps) {
  return (
    <Modal.Root {...props}>
      <ContainerModal>
        <HeaderModal>
          <TitleModal>Cheque seu e-mail</TitleModal>
          <Image
            src={confirmEmail}
            alt="Garoto mexendo em nootebook"
            width={285}
            height={278}
          />

          <Message>Enviamos um email para você de confirmação.</Message>
        </HeaderModal>

        <FooterModal>
          <Image src={logo} alt="logo da SouJunior" width={108} height={17} />
          <Hash>#MovimentoSouJunior</Hash>
        </FooterModal>

        <Modal.Close />
      </ContainerModal>
    </Modal.Root>
  )
}
