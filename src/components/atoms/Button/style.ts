import styled, { css } from 'styled-components'

const BaseStylesButton = styled.button`
  all: unset;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border-radius: 0.5rem;
  cursor: pointer;

  font-size: 1rem;
  font-weight: 500;
  line-height: 0.7;

  transition: 0.3s ease;

  ${(props) => {
    if (props.disabled) {
      return css`
        cursor: not-allowed;
      `
    }
  }}
`

export interface ButtonStyleProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'lg' | 'md' | 'sm'
}

export const ButtonStyle = styled(BaseStylesButton)<ButtonStyleProps>`
  ${({ variant, theme, disabled }) => {
    switch (variant) {
      case 'primary':
        return css`
          border: 2px solid
            ${!disabled ? theme.colors.blue[800] : theme.colors.gray[500]};
          background-color: ${!disabled
            ? theme.colors.blue[800]
            : theme.colors.gray[500]};
          color: ${theme.colors.white};

          &:not(:disabled):hover {
            border-color: ${theme.colors.blue[850]};
            background-color: ${theme.colors.blue[850]};
          }
        `
      case 'secondary':
        return css`
          border: 2px solid ${theme.colors.blue[800]};
          color: ${theme.colors.blue[800]};

          &:not(:disabled):hover {
            border-color: ${theme.colors.blue[850]};
            color: ${theme.colors.blue[850]};
          }
        `
      case 'tertiary':
        return css`
          color: ${theme.colors.blue[800]};

          &:not(:disabled):hover {
            color: ${theme.colors.blue[850]};
          }
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
