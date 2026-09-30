import { DialogClose } from '@/shared/components/ui/dialog';
import { cn } from '@/shared/lib/utils';
import { X as CloseIcon } from 'lucide-react';
import { ComponentProps, isValidElement, ReactNode } from 'react';

type ModalCloseProps = ComponentProps<typeof DialogClose> & {
  asChild?: boolean;
  children?: ReactNode;
};

export function ModalClose({
  children,
  asChild,
  className,
  ...props
}: ModalCloseProps) {
  const content = children ?? <CloseIcon size={24} />;

  if (asChild && isValidElement(content)) {
    return <DialogClose render={content} className={className} {...props} />;
  }

  return (
    <DialogClose
      className={cn(
        'flex justify-center items-center absolute top-2 right-2 bg-transparent border-none cursor-pointer text-gray-800',
        className
      )}
      {...props}
    >
      {content}
    </DialogClose>
  );
}
