'use client';

import { SelectItem as ShadcnSelectItem } from '@/components/ui/select';
import { ComponentProps, ReactNode } from 'react';

interface SelectItemProps extends ComponentProps<typeof ShadcnSelectItem> {
  children: ReactNode;
}

export function SelectItem({ children, ...props }: SelectItemProps) {
  return (
    <ShadcnSelectItem
      className="px-2 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer rounded text-center mx-auto"
      {...props}
    >
      {children}
    </ShadcnSelectItem>
  );
}
