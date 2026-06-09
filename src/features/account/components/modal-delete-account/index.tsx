import { Button } from '@/shared/components/button';
import { Modal } from '@/shared/components/modal';
import { DialogClose } from '@/shared/components/ui/dialog';
import Image from 'next/image';

interface ModalDeleteAccountProps {
  handleDeleteAccount: () => void;
}

export function ModalDeleteAccount({
  handleDeleteAccount,
}: ModalDeleteAccountProps) {
  return (
    <Modal.Content className="items-center flex flex-col gap-2 max-w-[400px] p-4 relative text-center">
      <Modal.Title className="text-black-200 text-[1.4rem] font-medium leading-6 mb-4 px-16 text-center">
        Você tem certeza que deseja fazer isso?
      </Modal.Title>

      <Modal.Close className="top-[0.7rem] right-[0.7rem]" />

      <Modal.Description className="text-black-200 text-sm font-normal leading-[1.05rem] max-w-[352px] [&_a]:text-blue-800 [&_a]:underline">
        Se você tiver mentorias abertas no Calendly, elas continuarão ativas.
        Para fechá-las, será necessário excluí-las manualmente.
      </Modal.Description>

      <Modal.Description className="text-black-200 text-sm font-normal leading-[1.05rem] max-w-[352px] [&_a]:text-blue-800 [&_a]:underline">
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
              className="w-full gap-px py-2 border-gray-700 text-gray-700 hover:border-blue-850 hover:text-blue-850"
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
              className="w-full gap-px py-2 bg-red-400 border-red-400 text-white hover:bg-red-800 hover:border-red-800"
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
