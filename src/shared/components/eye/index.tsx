'use client';

import { Toggle } from '@/shared/components/ui/toggle';
import { cn } from '@/shared/lib/utils';
import {
  Eye as VisibilityIcon,
  EyeOff as VisibilityOffIcon,
} from 'lucide-react';
import { ComponentProps } from 'react';

type EyeProps = ComponentProps<typeof Toggle>;

export function Eye({ pressed, className, ...props }: EyeProps) {
  return (
    <Toggle
      {...props}
      pressed={pressed}
      className={cn(
        'absolute outline-none p-0 z-[1] leading-none cursor-pointer text-gray-700 focus-visible:ring-2 focus-visible:ring-blue-400 bg-transparent border-none',
        className
      )}
    >
      {pressed ? (
        <VisibilityIcon size={16} />
      ) : (
        <VisibilityOffIcon size={16} />
      )}
    </Toggle>
  );
}
