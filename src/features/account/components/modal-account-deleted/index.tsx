import { Modal } from '@/shared/components/modal';
import Image from 'next/image';

type ModalProps = {
  isOpen: boolean;
  handleCloseModal: () => void;
};

export function ModalAccountDeleted({ isOpen, handleCloseModal }: ModalProps) {
  return (
    <Modal.Root open={isOpen} onOpenChange={handleCloseModal}>
      <Modal.Content className="flex flex-col p-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative max-w-[25rem]">
        <div className="flex items-center justify-center mt-10 mb-6">
          <Image
            alt="Imagem ilustrativa de um notebook em cima de uma cadeira"
            src={'/modalAccountDeleted/img-modal-account-deleted.svg'}
            width={170}
            height={166}
          />
        </div>
        <Modal.Title className="text-xl text-[#323232] font-medium leading-6 text-center mb-4">
          Perfil removido
        </Modal.Title>
        <Modal.Description className="text-sm text-[#666666] leading-4 font-[Radio_Canada,sans-serif] mb-2">
          Você tem 30 dias para reconsiderar e evitar a exclusão definitiva de
          sua conta.
        </Modal.Description>
        <Modal.Description className="text-sm text-[#666666] leading-4 font-[Radio_Canada,sans-serif] mb-2">
          Lembre-se, caso deseje reativar, faça o login novamente.
        </Modal.Description>
        <Modal.Close className="top-4 right-4" />
      </Modal.Content>
    </Modal.Root>
  );
}
