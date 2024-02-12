import { Button } from '@/components/atoms/Button'
import {
  ContainerBtn,
  ContainerModalCancel,
  DescriptionModal,
  DiscardBtn,
  HeadingModal,
} from './style'
import { DialogContentProps } from '@radix-ui/react-dialog'

interface ModalCancelProps extends DialogContentProps {
  onClose: () => void
}

export function ModalCancel({ onClose, ...props }: ModalCancelProps) {
  return (
    <ContainerModalCancel {...props}>
      <HeadingModal>Deseja descartar o cadastro?</HeadingModal>
      <DescriptionModal>
        As informações inseridas não serão salvas.
      </DescriptionModal>

      <ContainerBtn>
        <Button onClick={onClose} variant="secondary">
          Cancelar
        </Button>

        <Button as={DiscardBtn} href="/">
          Descartar
        </Button>
      </ContainerBtn>
    </ContainerModalCancel>
  )
}
