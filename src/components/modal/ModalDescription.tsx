import { DialogDescription } from '@/components/ui/dialog';
import { ComponentProps } from 'react';

export function ModalDescription({
  children,
  ...props
}: ComponentProps<typeof DialogDescription>) {
  return <DialogDescription {...props}>{children}</DialogDescription>;
}
