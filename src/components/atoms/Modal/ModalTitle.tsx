import * as Dialog from '@radix-ui/react-dialog';

export function ModalTitle({ children, ...props }: Dialog.DialogTitleProps) {
  return <Dialog.Title {...props}>{children}</Dialog.Title>;
}
