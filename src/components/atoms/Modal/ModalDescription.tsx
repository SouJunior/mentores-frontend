import * as Dialog from '@radix-ui/react-dialog';

export function ModalDescription({
  children,
  ...props
}: Dialog.DialogDescriptionProps) {
  return <Dialog.Description {...props}>{children}</Dialog.Description>;
}
