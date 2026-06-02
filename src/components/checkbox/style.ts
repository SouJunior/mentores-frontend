import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-start;

  input {
    border: 1px solid ${props => props.theme.colors.black[200]} !important;
    border-radius: 4px !important;
    width: 1rem !important;
    height: 1rem !important;
    color: ${props => props.theme.colors.black[200]} !important;
  }

  label {
    color: ${props => props.theme.colors.black[200]};
    font-size: ${props => props.theme.fontSizes.xs};
    cursor: pointer;
  }
`;
