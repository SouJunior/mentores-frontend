import { styled } from 'styled-components'

export const ResetPassContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  margin-top: -80px;
  background: ${(props) => props.theme.colors.gradient};
`
