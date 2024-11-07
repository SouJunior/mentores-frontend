import Image from 'next/image';
import styled from 'styled-components';

export const RegisterContainer = styled.div`
  width: 100%;
  height: 100vh;
  height: fit-content;
  display: flex;
  padding-bottom: 36vh;
  background: ${props => props.theme.colors.gradient.primary};
`;

export const ImageRegisterContainer = styled.div`
  height: 100%;
  width: 55%;
`;

export const MyImageRegister = styled(Image)`
  width: 100%;
  height: 100vh;
  object-fit: contain;
`;
