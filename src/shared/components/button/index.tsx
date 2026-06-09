import { cn } from '@/shared/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { ElementType, ReactNode } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg text-base font-medium leading-none transition-all duration-300 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'border-2 border-[#003986] bg-[#003986] text-white hover:border-[#002C66] hover:bg-[#002C66] disabled:border-[#C5C7C5] disabled:bg-[#C5C7C5]',
        secondary:
          'border-2 border-[#003986] text-[#003986] hover:border-[#002C66] hover:text-[#002C66]',
        tertiary: 'text-[#003986] hover:text-[#002C66]',
        danger:
          'border-2 border-[#E94242] text-[#E94242] hover:border-[#8f1e22] hover:text-[#8f1e22] disabled:border-[#C5C7C5] disabled:text-[#C5C7C5]',
      },
      size: {
        lg: 'px-6 py-4',
        md: 'px-6 py-3',
        sm: 'px-6 py-2',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'lg',
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  [key: string]: any;
}

export function Button({
  children,
  variant,
  size,
  as: Component = 'button',
  className,
  ...props
}: ButtonProps) {
  return (
    <Component
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}
