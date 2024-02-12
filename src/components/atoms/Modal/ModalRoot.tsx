import * as Dialog from '@radix-ui/react-dialog'

type ModalRootProps = Dialog.DialogProps

export const ModalRoot = ({ children, ...props }: ModalRootProps) => {
  return <Dialog.Root {...props}>{children}</Dialog.Root>
}
