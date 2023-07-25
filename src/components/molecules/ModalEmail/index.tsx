import { Modal } from "@/components/atoms/Modal";
import Image from "next/image";
import confirmEmail from "@/assets/confirmEmail.png";
import logo from "@/assets/logos/sou-junior.svg";
import {
  ContainerModal,
  FooterModal,
  Hash,
  Message,
  TitleModal,
} from "./style";

interface ModalEmailProps {
  open: boolean;
  onClose: () => void;
  height: number;
}

export default function ModalEmail({ open, onClose, height }: ModalEmailProps) {
  return (
    <Modal open={open} onClose={onClose} height={height} bgColor="#fff">
      <ContainerModal>
        <TitleModal>Cheque seu email</TitleModal>
        <Image
            src={confirmEmail}
            alt="Garoto mexendo em nootebook"
            width={285}
            height={278}
          />
        <Message>Enviamos um email para você de confirmação.</Message>
        <FooterModal>
          <Image
            src={logo}
            alt="logo da SouJunior"
            width={108}
            height={17}
          />
          <Hash>#MovimentoSouJunior</Hash>
        </FooterModal>
      </ContainerModal>
    </Modal>
  );
}
