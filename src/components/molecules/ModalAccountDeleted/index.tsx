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
          <ModalTitle>Exclusão concluída</ModalTitle>
          <ModalDescription>
            A exclusão solicitada foi concluída com sucesso e não existe
            reativação automática por login.
          </ModalDescription>
          <ModalClose />
        </ModalContainer>
      </Modal.Root>
    </>
  );
}
