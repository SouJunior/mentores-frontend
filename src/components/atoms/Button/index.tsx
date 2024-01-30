import { ComponentType, ElementType, ReactNode } from 'react'
import { ButtonStyle, ButtonStyleProps } from './style'

type ElementOrComponentType = ElementType<any> | ComponentType<any>

interface ButtonProps extends ButtonStyleProps {
  children: ReactNode
  as?: ElementOrComponentType
  [key: string]: any
}

export function Button({
  children,
  variant = 'primary',
  size = 'lg',
  ...props
}: ButtonProps) {
  return (
    <ButtonStyle variant={variant} size={size} {...props}>
      {children}
    </ButtonStyle>
  )
}
