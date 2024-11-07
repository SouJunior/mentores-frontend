import { styled } from 'styled-components';

export const SetPassContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.colors.blue[600]};
`;
