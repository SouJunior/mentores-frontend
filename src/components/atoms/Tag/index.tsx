import { ComponentType, ElementType, ReactNode } from 'react';
import { TagStyle } from './styles';

type ElementOrComponentType = ElementType<any> | ComponentType<any>;

interface TagProps {
  children: ReactNode;
  as?: ElementOrComponentType;
  [key: string]: any;
}

export function Tag({ children, ...props }: TagProps) {
  return <TagStyle {...props}>{children}</TagStyle>;
}
