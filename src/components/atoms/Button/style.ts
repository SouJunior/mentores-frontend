import styled, { css } from 'styled-components'

const BaseStylesButton = styled.button`
  all: unset;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  border-radius: 0.5rem;
  cursor: pointer;

  font-size: 1rem;
  font-weight: 500;
  line-height: 0.5;
`

export interface ButtonStyleProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'lg' | 'md' | 'sm'
}

export const ButtonStyle = styled(BaseStylesButton)<ButtonStyleProps>`
  ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return css`
          border: 2px solid ${theme.colors.blue[800]};
          background-color: ${theme.colors.blue[800]};
          color: ${theme.colors.white};
        `
      case 'secondary':
        return css`
          border: 2px solid ${theme.colors.blue[800]};
          color: ${theme.colors.blue[800]};
          background-color: ${theme.colors.white};
        `
      case 'tertiary':
        return css`
          color: ${theme.colors.blue[800]};
        `
    }
  }}

  ${({ size }) => {
    switch (size) {
      case 'lg':
        return css`
          padding: 1rem 1.5rem;
        `
      case 'md':
        return css`
          padding: 0.75rem 1.5rem;
        `
      case 'sm':
        return css`
          padding: 0.5rem 1.5rem;
        `
    }
  }}
`
