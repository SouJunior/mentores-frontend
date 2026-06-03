import { Button } from '@/components/button';
import { Modal } from '@/components/modal';

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
      <Modal.Title className="font-medium text-[1.4rem] text-[#323232] text-center">
        Deseja descartar as alterações?
      </Modal.Title>
      <Modal.Close className="top-[0.7rem] right-[0.7rem]" />
      <Modal.Description className="font-normal text-base text-[#5D5F5D] max-w-[23rem] mx-auto mb-[0.2rem]">
        As informações inseridas não serão salvas.
      </Modal.Description>

      <div className="flex justify-center gap-4 w-full">
        <Modal.Close
          className="static py-2 leading-6 min-w-[9rem] w-full border-[1.5px] border-[#5D5F5D] text-[#5D5F5D]"
          asChild
        >
          <Button variant="secondary">Cancelar</Button>
        </Modal.Close>

        <Modal.Close
          className="static py-2 leading-6 min-w-[9rem] w-full border-2 border-[#003986] bg-[#003986] text-white"
          asChild
        >
          <Button onClick={handleDiscard}>Descartar</Button>
        </Modal.Close>
      </div>
    </Modal.Content>
  );
}
