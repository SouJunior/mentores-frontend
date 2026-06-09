'use client';

import { PopoverTrigger } from '@/shared/components/ui/popover';
import { ComponentProps, ReactNode } from 'react';

interface ControlProps extends ComponentProps<typeof PopoverTrigger> {
  children: ReactNode;
}

export function Control({ children, className = '', ...props }: ControlProps) {
  return (
    <PopoverTrigger
      className={`cursor-pointer py-3 px-4 border border-gray-600 rounded-lg transition-all duration-300 flex items-center justify-between leading-[150%] [&_svg]:w-5 [&_svg]:h-5 disabled:text-gray-600 disabled:border-gray-600 disabled:bg-gray-600 disabled:cursor-not-allowed hover:not-disabled:not-[data-open]:border-blue-850 data-[state=open]:border-blue-850 data-[state=open]:shadow-focus-blue data-[state=open]:[&_svg]:text-blue-850 focus-visible:border-blue-850 focus-visible:shadow-focus-blue focus-visible:[&_svg]:text-blue-850 [&.error]:border-red-400 ${className}`}
      {...props}
    >
      {children}
    </PopoverTrigger>
  );
}
