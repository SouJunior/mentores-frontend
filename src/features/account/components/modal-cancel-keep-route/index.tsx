import { Button } from '@/shared/components/button';
import { Modal } from '@/shared/components/modal';

interface ModalCancelKeepRouteProps
  extends React.HTMLAttributes<HTMLDivElement> {
  handleDiscard: () => void;
}

export function ModalCancelKeepRoute({
  handleDiscard,
  ...props
}: ModalCancelKeepRouteProps) {
  return (
    <Modal.Content
      className="text-center flex flex-col gap-[0.8rem] p-4 relative"
      {...props}
    >
      <Modal.Title className="font-medium text-[1.4rem] text-black-200 text-center">
        Deseja descartar as alterações?
      </Modal.Title>
      <Modal.Close className="top-[0.7rem] right-[0.7rem]" />
      <Modal.Description className="font-normal text-base text-gray-750 max-w-92 mx-auto mb-[0.2rem]">
        As informações inseridas não serão salvas.
      </Modal.Description>

      <div className="flex justify-center gap-4 w-full">
        <Modal.Close
          className="static py-2 leading-6 min-w-[9rem] w-full border-[1.5px] border-gray-750 text-gray-750"
          asChild
        >
          <Button variant="secondary">Cancelar</Button>
        </Modal.Close>

        <Modal.Close
          className="static py-2 leading-6 min-w-[9rem] w-full border-2 border-blue-800 bg-blue-800 text-white"
          asChild
        >
          <Button onClick={handleDiscard}>Descartar</Button>
        </Modal.Close>
      </div>
    </Modal.Content>
  );
}
