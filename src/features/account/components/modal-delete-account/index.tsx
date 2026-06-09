import { Button } from '@/components/button';
import { Modal } from '@/components/modal';
import { DialogClose } from '@/components/ui/dialog';
import Image from 'next/image';

interface ModalDeleteAccountProps {
  handleDeleteAccount: () => void;
}

export function ModalDeleteAccount({
  handleDeleteAccount,
}: ModalDeleteAccountProps) {
  return (
    <Modal.Content className="items-center flex flex-col gap-2 max-w-[400px] p-4 relative text-center">
      <Modal.Title className="text-[#323232] text-[1.4rem] font-medium leading-6 mb-4 px-16 text-center">
        Você tem certeza que deseja fazer isso?
      </Modal.Title>

      <Modal.Close className="top-[0.7rem] right-[0.7rem]" />

      <Modal.Description className="text-[#323232] text-sm font-normal leading-[1.05rem] max-w-[352px] [&_a]:text-[#003986] [&_a]:underline">
        Se você tiver mentorias abertas no Calendly, elas continuarão ativas.
        Para fechá-las, será necessário excluí-las manualmente.
      </Modal.Description>

      <Modal.Description className="text-[#323232] text-sm font-normal leading-[1.05rem] max-w-[352px] [&_a]:text-[#003986] [&_a]:underline">
        Verifique no{' '}
        <a href="https://calendly.com/" target="_blank">
          Calendly
        </a>{' '}
        se há mentorias que precisam ser excluídas.
      </Modal.Description>

      <div className="flex gap-4 justify-between mt-4 w-full">
        <DialogClose
          render={
            <Button
              type="button"
              variant="secondary"
              className="w-full gap-px py-2 border-[#666666] text-[#666666] hover:border-[#002C66] hover:text-[#002C66]"
            >
              Cancelar
            </Button>
          }
        />

        <DialogClose
          render={
            <Button
              type="submit"
              onClick={handleDeleteAccount}
              className="w-full gap-px py-2 bg-[#E94242] border-[#E94242] text-white hover:bg-[#8f1e22] hover:border-[#8f1e22]"
            >
              <Image
                src={'/icons/bin.png'}
                alt="Delete Icon"
                width={24}
                height={24}
              />
              Excluir conta
            </Button>
          }
        />
      </div>
    </Modal.Content>
  );
}
