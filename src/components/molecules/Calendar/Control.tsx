'use client';

import { ComponentProps, ReactNode } from 'react';
import { CalendarTrigger } from './styles';

interface ControlProps extends ComponentProps<typeof CalendarTrigger> {
  children: ReactNode;
}

export function Control({ children, ...props }: ControlProps) {
  return <CalendarTrigger {...props}>{children}</CalendarTrigger>;
}
