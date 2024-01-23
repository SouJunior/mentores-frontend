import { Field as FieldComponent } from 'formik'
import styled from 'styled-components'

export const ContainerInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`

export const ContainerInput = styled.div`
  input,
  textarea,
  select {
    outline: none;
    resize: none;

    height: 100%;
    width: 100%;

    padding: 0.875rem 1rem;
    font-size: 0.875rem;
    line-height: 150%;
    border: 1px solid
      ${(props) =>
        props.className?.includes('error')
          ? props.theme.colors.red[500]
          : props.theme.colors.gray[700]};
    border-radius: 8px;
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.gray[300]};

    &:hover {
      box-shadow: 0px 3px 6px rgba(17, 101, 186, 0.6);
      border: 1px solid ${(props) => props.theme.colors.blue[400]};
    }

    &:focus-within {
      border: 1px solid ${(props) => props.theme.colors.blue[400]};
      box-shadow: 0 0 0 1px ${(props) => props.theme.colors.blue[400]};
    }
  }

  textarea {
    height: 168px;
  }
`

export const ContainerError = styled.span`
  color: ${(props) => props.theme.colors.red[500]};
  font-weight: bold;
  font-size: 0.75rem;
`

export const StyledLabel = styled.span`
  font-size: 0.875rem;
  line-height: 150%;
  color: ${(props) => props.theme.colors.gray[700]};
`

export const StyledLabelError = styled(StyledLabel)`
  color: ${(props) => props.theme.colors.error};
`

export const Field = styled(FieldComponent)`
  color: ${(props) => props.theme.colors.gray[700]} !important;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray[300]};
  }
`
