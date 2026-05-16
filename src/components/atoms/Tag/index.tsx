import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { TagStyle } from './styles';

interface TagProps extends ComponentPropsWithoutRef<'span'> {
  children: ReactNode;
  as?: ElementType;
}

export function Tag({ children, ...props }: TagProps) {
  return <TagStyle {...props}>{children}</TagStyle>;
}
