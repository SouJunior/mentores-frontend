import * as Select from '@radix-ui/react-select'
import { ReactNode } from 'react'
import { SelectItemContainer } from './styles'

interface SelectItemProps extends Select.SelectItemProps {
  children: ReactNode
}

export function SelectItem({ children, ...props }: SelectItemProps) {
  return (
    <SelectItemContainer {...props}>
      <Select.ItemText asChild>
        <span>{children}</span>
      </Select.ItemText>
    </SelectItemContainer>
  )
}
