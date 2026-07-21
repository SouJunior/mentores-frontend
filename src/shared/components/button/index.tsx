import { Spinner } from '@/shared/components/spinner';
import { cn } from '@/shared/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { ElementType, ReactNode } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg text-base font-medium leading-none transition-all duration-300 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'border-2 border-blue-800 bg-blue-800 text-white hover:border-blue-850 hover:bg-blue-850 disabled:border-gray-500 disabled:bg-gray-500',
        secondary:
          'border-2 border-blue-800 text-blue-800 hover:border-blue-850 hover:text-blue-850',
        tertiary: 'text-blue-800 hover:text-blue-850',
        danger:
          'border-2 border-red-400 text-red-400 hover:border-red-800 hover:text-red-800 disabled:border-gray-500 disabled:text-gray-500',
      },
      size: {
        xl: 'px-6 py-5',
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
  loading?: boolean;
  disabled?: boolean;
  [key: string]: any;
}

export function Button({
  children,
  variant,
  size,
  as: Component = 'button',
  className,
  loading = false,
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <Component
      className={cn(buttonVariants({ variant, size }), loading && 'cursor-wait', className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <Spinner /> : children}
    </Component>
  );
}
