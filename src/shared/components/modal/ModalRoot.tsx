import { Dialog } from '@/shared/components/ui/dialog';
import { ComponentProps } from 'react';

type ModalRootProps = ComponentProps<typeof Dialog>;

export const ModalRoot = ({ children, ...props }: ModalRootProps) => {
  return <Dialog {...props}>{children}</Dialog>;
};
