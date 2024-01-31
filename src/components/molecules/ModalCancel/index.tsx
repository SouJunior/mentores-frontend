import { Button } from '@/components/atoms/Button'
import { Modal } from '@/components/atoms/Modal'
import { ContainerBtn, ContainerModalCancel, HeadingModal } from './style'

interface ModalCancelProps {
  open: boolean
  onClose: () => void
  height: number
  width: number
  bgColor: string
}

export function ModalCancel({
  open,
  onClose,
  height,
  width,
  bgColor,
}: ModalCancelProps) {
  return (
    <Modal
      open={open}
      width={width}
      onClose={onClose}
      bgColor={bgColor}
      showBtn={true}
      height={height}
    >
      <ContainerModalCancel>
        <HeadingModal>Deseja descartar o cadastro?</HeadingModal>
        <p>As informações inseridas não serão salvas.</p>
        <ContainerBtn>
          <Button onClick={onClose} variant="secondary">
            Cancelar
          </Button>

          <button>Descartar</button>
        </ContainerBtn>
      </ContainerModalCancel>
    </Modal>
  )
}
