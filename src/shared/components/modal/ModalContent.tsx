import { DialogContent } from '@/shared/components/ui/dialog';
import { ComponentProps } from 'react';

type ContentProps = ComponentProps<typeof DialogContent>;

export function ModalContent({ children, ...props }: ContentProps) {
  return (
    <DialogContent
      showCloseButton={false}
      className="bg-white rounded-lg p-0 max-w-fit overflow-hidden"
      {...props}
    >
      {children}
    </DialogContent>
  );
}
