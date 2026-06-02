import { DialogTrigger } from '@/components/ui/dialog';
import { ComponentProps, isValidElement, ReactNode } from 'react';

type ControlProps = ComponentProps<typeof DialogTrigger> & {
  asChild?: boolean;
  children?: ReactNode;
};

export function ModalControl({ children, asChild, ...props }: ControlProps) {
  if (asChild && isValidElement(children)) {
    return <DialogTrigger render={children} {...props} />;
  }
  return <DialogTrigger {...props}>{children}</DialogTrigger>;
}
