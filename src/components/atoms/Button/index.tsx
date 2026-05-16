import { ComponentType, ElementType, ReactNode } from 'react';
import { ButtonStyle, ButtonStyleProps } from './style';

type ElementOrComponentType = ElementType<any> | ComponentType<any>;
type ButtonVariant = NonNullable<ButtonStyleProps['$variant']>;
type ButtonSize = NonNullable<ButtonStyleProps['$size']>;

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: ElementOrComponentType;
  [key: string]: any;
}

export function Button({
  children,
  variant = 'primary',
  size = 'lg',
  ...props
}: ButtonProps) {
  return (
    <ButtonStyle $variant={variant} $size={size} {...props}>
      {children}
    </ButtonStyle>
  );
}
