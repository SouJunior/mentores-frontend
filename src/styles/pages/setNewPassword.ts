import { styled } from 'styled-components'

export const SetPassContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-top: -80px;
  background: ${(props) => props.theme.colors.gradient};
`
