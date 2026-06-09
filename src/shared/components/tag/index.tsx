import { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  [key: string]: any;
}

export function Tag({ children, ...props }: TagProps) {
  return (
    <span
      className="rounded-[2.5rem] bg-blue-25 px-2 py-2 text-blue-950 text-xs font-normal leading-[120%]"
      {...props}
    >
      {children}
    </span>
  );
}
