import { Field as FieldComponent } from 'formik'
import styled from 'styled-components'

export const ContainerDiv = styled.div`
  div {
    display: flex;
    width: 100%;
  }
`
export const ContainerInput = styled.div`
  input,
  textarea,
  select {
    resize: none;
    height: 100%;
    width: 100%;
    margin: 4px 0px 16px;
    padding: 12px 32px 12px;
    font-size: 14px;
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.gray[700]};
    border-radius: 8px;
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.gray[300]};

    &:hover {
      box-shadow: 0px 3px 6px rgba(17, 101, 186, 0.6);
      input {
        border: 1px solid ${(props) => props.theme.colors.blue[400]};
      }
    }

    &:focus-within {
      border-radius: 8px;
      -moz-border-radius: 8px;
      -webkit-border-radius: 8px;
      -webkit-box-shadow: 0px 0px 15px 1px
        ${(props) => props.theme.colors.blue[700]};
      -moz-box-shadow: 0px 0px 15px 1px
        ${(props) => props.theme.colors.blue[700]};
      box-shadow: 0px 0px 5px 0px ${(props) => props.theme.colors.blue[700]};
      border: 1px solid ${(props) => props.theme.colors.blue[700]};
      outline: none;
    }
  }

  textarea {
    height: 168px;
  }
`

export const ContainerError = styled.div`
  .error-message {
    color: ${(props) => props.theme.colors.error};
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 12px;
    margin-top: -8px;
  }
`

export const StyledLabel = styled.label`
  font-size: 14px;
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
