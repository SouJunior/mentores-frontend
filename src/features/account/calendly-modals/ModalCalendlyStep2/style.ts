import styled from 'styled-components';

export const SubDescription = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.black[200]};
  line-height: 140%;
  font-family: 'Radio Canada', sans-serif;
  text-align: center;
  padding: 0 4rem;

  a {
    color: ${props => props.theme.colors.blue[500]};
  }
`;
