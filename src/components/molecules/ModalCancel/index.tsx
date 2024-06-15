import { Button } from '@/components/atoms/Button';
import {
  ContainerBtn,
  ContainerModalCancel,
  DescriptionModal,
  DiscardBtn,
  HeadingModal,
  ModalCloseCancelBtn,
} from './style';
import { DialogContentProps } from '@radix-ui/react-dialog';

type ModalCancelProps = DialogContentProps;

export function ModalCancel(props: ModalCancelProps) {
  return (
    <ContainerModalCancel {...props}>
      <HeadingModal>Deseja descartar o cadastro?</HeadingModal>
      <DescriptionModal>
        As informações inseridas não serão salvas.
      </DescriptionModal>

      <ContainerBtn>
        <ModalCloseCancelBtn asChild>
          <Button variant="secondary">Cancelar</Button>
        </ModalCloseCancelBtn>

        <Button as={DiscardBtn} href="/">
          Descartar
        </Button>
      </ContainerBtn>
    </ContainerModalCancel>
  );
}
