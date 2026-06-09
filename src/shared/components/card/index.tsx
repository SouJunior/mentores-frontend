import { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Card = ({ children, style, ...props }: CardProps) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        boxShadow: '0px 4px 4px var(--color-shadow-black-25)',
        borderRadius: '8px',
        padding: '0px',
        marginBottom: '5px',
        border: '1px solid var(--color-gray-250)',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
