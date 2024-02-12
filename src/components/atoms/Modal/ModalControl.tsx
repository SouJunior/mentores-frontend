import * as Dialog from '@radix-ui/react-dialog'

type ControlProps = Dialog.DialogTriggerProps

export function ModalControl({ children, ...props }: ControlProps) {
  return <Dialog.Trigger {...props}>{children}</Dialog.Trigger>
}
