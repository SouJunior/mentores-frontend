import * as Popover from '@radix-ui/react-popover'
import { ReactNode } from 'react'
import { CalendarTrigger } from './styles'

interface ControlProps extends Popover.PopoverTriggerProps {
  children: ReactNode
}

export function Control({ children, ...props }: ControlProps) {
  return <CalendarTrigger {...props}>{children}</CalendarTrigger>
}
