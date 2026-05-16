import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { ButtonStyle, ButtonStyleProps } from './style';

type ButtonVariant = NonNullable<ButtonStyleProps['$variant']>;
type ButtonSize = NonNullable<ButtonStyleProps['$size']>;

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: ElementType;
  href?: string;
  target?: string;
  rel?: string;
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
