import ModalImage from '@/assets/modalAccountDeleted/img-modal-account-deleted.svg';
import { Modal } from '@/components/atoms/Modal';
import Image from 'next/image';
import {
  ModalClose,
  ModalContainer,
  ModalDescription,
  ModalImageContainer,
  ModalTitle,
} from './style';

type ModalProps = {
  isOpen: boolean;
  handleCloseModal: () => void;
};

export function ModalAccountDeleted({ isOpen, handleCloseModal }: ModalProps) {
  return (
    <>
      <Modal.Root open={isOpen} onOpenChange={handleCloseModal}>
        <ModalContainer>
          <ModalImageContainer>
            <Image
              alt="Imagem ilustrativa de um notebook em cima de uma cadeira"
              src={ModalImage}
              width={170}
              height={166}
            />
          </ModalImageContainer>
          <ModalTitle>Perfil removido</ModalTitle>
          <ModalDescription>
            Você tem 30 dias para reconsiderar e evitar a exclusão definitiva de
            sua conta.
          </ModalDescription>
          <ModalDescription>
            Lembre-se, caso deseje reativar, faça o login novamente.
          </ModalDescription>
          <ModalClose />
        </ModalContainer>
      </Modal.Root>
    </>
  );
}
