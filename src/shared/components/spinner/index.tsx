import { ComponentProps } from 'react';

export function Spinner({ className, ...props }: ComponentProps<'span'>) {
  return <span className={`spinner ${className ?? ''}`} {...props} />;
}
