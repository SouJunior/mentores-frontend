import { SelectItem } from '@/components/atoms/Select/SelectItem'
import styled from 'styled-components'

export const SelectInputContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;

  span {
    color: ${(props) => props.theme.colors.black[200]};
    font-size: ${(props) => props.theme.fontSizes.xs};
    line-height: 120%;

    .asterisk {
      color: ${(props) => props.theme.colors.blue[700]};
    }
  }

  .select-trigger {
    padding: 0.75rem 1rem;
    line-height: 1.5rem;
    font-size: 1rem;
  }
`

export const SelectItemStyled = styled(SelectItem)`
  margin: 0 !important;
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
      color: ${(props) => props.theme.colors.blue[700]};
    }

    &.disabled,
    &.disabled span {
      color: ${(props) => props.theme.colors.gray[600]} !important;
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
