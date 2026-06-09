'use client';

import { PopoverTrigger } from '@/components/ui/popover';
import { ComponentProps, ReactNode } from 'react';

interface ControlProps extends ComponentProps<typeof PopoverTrigger> {
  children: ReactNode;
}

export function Control({ children, className = '', ...props }: ControlProps) {
  return (
    <PopoverTrigger
      className={`cursor-pointer py-3 px-4 border border-[#ACACAC] rounded-lg transition-all duration-300 flex items-center justify-between leading-[150%] [&_svg]:w-5 [&_svg]:h-5 disabled:text-[#ACACAC] disabled:border-[#ACACAC] disabled:bg-[#ACACAC] disabled:cursor-not-allowed hover:not-disabled:not-[data-open]:border-[#002C66] data-[state=open]:border-[#002C66] data-[state=open]:shadow-[0_0_0_1px_#002C66] data-[state=open]:[&_svg]:text-[#002C66] focus-visible:border-[#002C66] focus-visible:shadow-[0_0_0_1px_#002C66] focus-visible:[&_svg]:text-[#002C66] [&.error]:border-[#E94242] ${className}`}
      {...props}
    >
      {children}
    </PopoverTrigger>
  );
}
