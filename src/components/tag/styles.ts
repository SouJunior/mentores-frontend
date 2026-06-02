import styled from 'styled-components';

export const TagStyle = styled.span`
  border-radius: 2.5rem;
  background-color: ${props => props.theme.colors.blue[25]};
  padding: 0.5rem;
  color: ${props => props.theme.colors.blue[950]};

  font-size: 0.75rem;
  font-weight: 400;
  line-height: 120%;
`;
