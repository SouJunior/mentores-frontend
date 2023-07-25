import { Modal } from "@/components/atoms/Modal";
import Image from "next/image";
import {
  ContainerModal,
  FooterModal,
  Hash,
  ImageEmail,
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
        <ImageEmail
          src="images/ConfirmEmail.png"
          alt="Garoto mexendo em nootebook"
        />
        <Message>Enviamos um email para você de confirmação.</Message>
        <FooterModal>
          <Image
            src={"logos/LogoSJ.svg"}
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
