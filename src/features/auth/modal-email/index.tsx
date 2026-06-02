import { Modal } from '@/components/modal';
import Image from 'next/image';
import confirmEmail from '@/assets/ConfirmEmail.png';
import logo from '@/assets/logos/sou-junior.svg';
import {
  ContainerModal,
  FooterModal,
  Hash,
  HeaderModal,
  Message,
  TitleModal,
} from './style';

type ModalEmailProps = React.HTMLAttributes<HTMLDivElement>;

export default function ModalEmail(props: ModalEmailProps) {
  return (
    <ContainerModal {...props}>
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
  );
}
