import styled, { css } from 'styled-components'

export const EyeContainer = styled.button<
  Partial<{
    marginTop: number
    position: {
      left: string
      right: string
      top: string
      bottom: string
    }
  }>
>`
  position: absolute;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.gray[700]};
  margin-top: ${(props) => props.marginTop}px;
  cursor: pointer;
  outline: none;
  padding: 0;
  z-index: 1;
  line-height: 0;

  ${(props) => {
    if (props.position) {
      return css`
        top: ${props.position.top};
        bottom: ${props.position.bottom};
        left: ${props.position.left};
        right: ${props.position.right};
      `
    }
  }}
`
