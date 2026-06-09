import { DialogTitle } from '@/shared/components/ui/dialog';
import { ComponentProps } from 'react';

export function ModalTitle({
  children,
  ...props
}: ComponentProps<typeof DialogTitle>) {
  return <DialogTitle {...props}>{children}</DialogTitle>;
}
