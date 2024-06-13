import styled from 'styled-components'

export const WrapperInput = styled.label`
  position: relative;

  input {
    padding-right: 2.8rem; // Giving space to Eye icon
  }

  button {
    right: 1rem;
    top: 2.5rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`

export const DatePickerContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.gray[700]};

  &.error {
    svg {
      color: ${(props) => props.theme.colors.red[500]};
    }
  }

  span {
    span {
      color: ${(props) => props.theme.colors.blue[500]};
    }
  }

  .error-message {
    color: ${(props) => props.theme.colors.red[500]};
    font-weight: bold;
    font-size: 0.75rem;
  }

  [data-placeholder] {
    color: ${(props) => props.theme.colors.gray[250]};
  }
`
