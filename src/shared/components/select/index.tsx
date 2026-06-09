'use client';

import {
  SelectContent,
  SelectTrigger,
  SelectValue,
  Select as ShadcnSelect,
} from '@/shared/components/ui/select';
import { ComponentProps, ReactNode } from 'react';

interface SelectProps extends ComponentProps<typeof ShadcnSelect> {
  children: ReactNode;
  placeholder: string;
}

export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <ShadcnSelect {...props}>
      <SelectTrigger className="select-trigger w-full h-14 flex-1 rounded-lg border border-gray-400 px-3 py-1 text-gray-600 focus-visible:border-blue-400 focus-visible:ring-0">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent side="bottom" className="bg-white rounded-lg shadow-md">
        {children}
      </SelectContent>
    </ShadcnSelect>
  );
}
