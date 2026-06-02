import styled from 'styled-components';

export const ContainerInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  border: 1px solid
    ${props =>
      props.className?.includes('error')
        ? props.theme.colors.red[500]
        : props.theme.colors.gray[600]};
  border-radius: 8px;
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black[200]};
  padding: 0 1rem;

  transition: 0.3s ease;

  &.disabled {
    color: ${props => props.theme.colors.gray[600]};
    border-color: ${props => props.theme.colors.gray[200]};
    background-color: ${props => props.theme.colors.gray[200]};
    cursor: not-allowed;
  }

  &:not(.disabled):hover {
    border: 1px solid ${props => props.theme.colors.blue[850]};
  }

  &:focus-within {
    border: 1px solid ${props => props.theme.colors.blue[850]};
    box-shadow: 0 0 0 1px ${props => props.theme.colors.blue[850]};
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${props => props.theme.colors.gray[700]};
  }

  input,
  textarea,
  select {
    flex: 1;
    outline: none;
    resize: none;

    height: 100%;
    width: 100%;

    padding: 0.875rem 0;
    font-size: 0.875rem;
    line-height: 150%;

    border: 0;
    border-radius: 8px;

    &::placeholder {
      color: ${props => props.theme.colors.gray[250]};
    }

    &:disabled {
      background-color: ${props => props.theme.colors.gray[200]};
      cursor: not-allowed;

      &::placeholder {
        color: ${props => props.theme.colors.gray[600]};
      }
    }
  }

  textarea {
    height: 168px;
  }
`;

export const ContainerError = styled.span`
  color: ${props => props.theme.colors.red[500]};
  font-weight: bold;
  font-size: 0.75rem;
`;

export const StyledLabel = styled.span`
  font-size: 0.875rem;
  line-height: 150%;
  color: ${props => props.theme.colors.gray[700]};

  .asterisk {
    color: ${props => props.theme.colors.blue[700]};
  }

  &.disabled,
  &.disabled .asterisk {
    color: ${props => props.theme.colors.gray[600]};
  }
`;

export const StyledLabelError = styled(StyledLabel)`
  color: ${props => props.theme.colors.red[500]};
`;
