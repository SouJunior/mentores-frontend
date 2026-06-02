import { DialogClose } from '@/components/ui/dialog';
import { X as CloseIcon } from 'lucide-react';
import { ComponentProps, isValidElement, ReactNode } from 'react';

type ModalCloseProps = ComponentProps<typeof DialogClose> & {
  asChild?: boolean;
  children?: ReactNode;
};

export function ModalClose({ children, asChild, ...props }: ModalCloseProps) {
  const content = children ?? <CloseIcon size={24} />;

  if (asChild && isValidElement(content)) {
    return <DialogClose render={content} {...props} />;
  }

  return (
    <DialogClose
      className="flex justify-center items-center absolute top-2 right-2 bg-transparent border-none cursor-pointer text-gray-800"
      {...props}
    >
      {content}
    </DialogClose>
  );
}
