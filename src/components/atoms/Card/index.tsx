import { Box, BoxProps } from '@mui/material'
import { ReactNode } from 'react'

interface CardProps extends BoxProps {
  children: ReactNode
}

export const Card = ({ children, ...props }: CardProps) => {
  const propsDefault: BoxProps = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '8px',
    padding: '0px',
    marginBottom: '5px',
    border: '1px solid #D7D9D7',
  }

  return (
    <Box {...propsDefault} {...props}>
      {children}
    </Box>
  )
}
