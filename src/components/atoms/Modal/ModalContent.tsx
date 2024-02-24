import * as Dialog from '@radix-ui/react-dialog'
import { ModalOverlay, ModalContent as ModalContentContainer } from './style'

type ContentProps = Dialog.DialogContentProps

export function ModalContent({ children, ...props }: ContentProps) {
  return (
    <Dialog.Portal>
      <ModalOverlay>
        <ModalContentContainer {...props}>{children}</ModalContentContainer>
      </ModalOverlay>
    </Dialog.Portal>
  )
}
