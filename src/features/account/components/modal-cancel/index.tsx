import { Button } from '@/shared/components/button';
import { Modal } from '@/shared/components/modal';
import Link from 'next/link';

type ModalCancelProps = React.HTMLAttributes<HTMLDivElement>;

export function ModalCancel(props: ModalCancelProps) {
  return (
    <Modal.Content
      className="text-center flex flex-col gap-6 px-8 py-6 relative"
      {...props}
    >
      <Modal.Title className="font-bold text-2xl leading-[120%] text-gray-750 text-center">
        Deseja descartar as alterações?
      </Modal.Title>
      <Modal.Description className="font-normal text-[1.125rem] leading-[150%] text-gray-750 max-w-[17rem] mx-auto">
        As informações inseridas não serão salvas.
      </Modal.Description>

      <div className="flex justify-center gap-4 w-full text-red-600">
        <Modal.Close
          className="static py-2 leading-6 max-w-[9rem] w-full border-[1.5px] border-gray-750 text-gray-750"
          asChild
        >
          <Button variant="secondary">Cancelar</Button>
        </Modal.Close>

        <Button
          as={Link}
          href="/"
          className="py-2 leading-6 max-w-[9rem] w-full bg-red-600 border-red-600 hover:bg-red-800 hover:border-red-800"
        >
          Descartar
        </Button>
      </div>
    </Modal.Content>
  );
}
