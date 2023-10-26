import * as SelectPrimitive from '@radix-ui/react-select'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { ReactNode } from 'react'
import {
  ScrollAreaBar,
  ScrollAreaThumb,
  ScrollAreaViewport,
  SelectContent,
  SelectTrigger,
} from './styles'

interface SelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode
  placeholder: string
}

export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectTrigger>
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon asChild>
          <KeyboardArrowDownIcon />
        </SelectPrimitive.Icon>
      </SelectTrigger>

      <SelectPrimitive.Portal>
        <SelectContent side="bottom" position="popper">
          <ScrollArea.Root>
            <SelectPrimitive.Viewport>
              <ScrollAreaViewport>
                {children}

                <ScrollAreaBar>
                  <ScrollAreaThumb />
                </ScrollAreaBar>
              </ScrollAreaViewport>
            </SelectPrimitive.Viewport>
          </ScrollArea.Root>
        </SelectContent>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
