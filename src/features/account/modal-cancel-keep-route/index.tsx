import { Button } from '@/components/button';
import {
  ContainerBtn,
  ContainerModalCancel,
  DescriptionModal,
  HeadingModal,
  ModalCloseButton,
  ModalCloseCancelBtn,  
  ModalCloseDiscardBtn,
} from './style';


interface ModalCancelKeepRouteProps extends React.HTMLAttributes<HTMLDivElement> {
  handleDiscard: () => void,
}

export function ModalCancelKeepRoute({handleDiscard, ...props}: ModalCancelKeepRouteProps) {
  return (
    <ContainerModalCancel {...props}>
      <HeadingModal>Deseja descartar as alterações?</HeadingModal>
      <ModalCloseButton />
      <DescriptionModal>
        As informações inseridas não serão salvas.
      </DescriptionModal>

      <ContainerBtn>
        <ModalCloseCancelBtn asChild>
          <Button variant="secondary">Cancelar</Button>
        </ModalCloseCancelBtn>

        <ModalCloseDiscardBtn asChild>
          <Button
          onClick={handleDiscard}
          >Descartar</Button>
        </ModalCloseDiscardBtn>
      </ContainerBtn>
    </ContainerModalCancel>
  );
}
