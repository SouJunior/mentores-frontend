import styled from 'styled-components';

export const PerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 20px;
`;

export const StyledImportant = styled.span`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: 400;
  line-height: 1rem;
  text-align: left;
  width: 100%;
  margin-top: 1rem;
  color: ${props => props.theme.colors.black[200]};

  span {
    color: ${props => props.theme.colors.blue[600]};
  }
`;
