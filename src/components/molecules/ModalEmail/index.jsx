import ModalComponent from "@/components/atoms/Modal";
import { ContainerModal, ImageEmail, Message, TitleModal, Hash, FooterModal } from "./style";
import Image from "next/image";


export default function ModalEmail ({open, onClose, children, height}) {

    return (
        <ModalComponent
        open={open}
        onClose={onClose}
        children={children}
        height={height}
        >
            <ContainerModal>
                <TitleModal>Cheque seu email</TitleModal>
                <ImageEmail
                src="images/ConfirmEmail.png"
                />
                <Message>Enviamos um email para você de confirmação.</Message>
                <FooterModal>

                <Image
                src={'logos/LogoSJ.svg'}
                width={108}
                height={17}                
                />
                <Hash>#MovimentoSouJunior</Hash>
                </FooterModal>
            </ContainerModal>
        </ModalComponent>
    )
    

}