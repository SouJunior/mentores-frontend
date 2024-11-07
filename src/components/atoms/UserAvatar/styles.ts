import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
