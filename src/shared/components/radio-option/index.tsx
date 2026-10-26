import { cn } from '@/shared/lib/utils';
import { ComponentProps, ReactNode } from 'react';

interface RadioOptionProps
  extends Omit<ComponentProps<'input'>, 'type' | 'children'> {
  children: ReactNode;
}

export function RadioOption({
  children,
  className,
  ...props
}: RadioOptionProps) {
  return (
    <label
      className={cn(
        'flex min-h-11 cursor-pointer items-center gap-2 text-[0.875rem] font-normal leading-[1.05rem]',
        className
      )}
    >
      <input
        type="radio"
        className="h-4 w-4 shrink-0 cursor-pointer accent-blue-800 focus-visible:shadow-focus-ring"
        {...props}
      />
      {children}
    </label>
  );
}
