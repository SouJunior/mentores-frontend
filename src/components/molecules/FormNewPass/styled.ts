import { styled } from 'styled-components'

export const ContainerForm = styled.div`
  max-width: 31.5rem;
  width: 100%;
  height: 36.875rem;
  background: ${(props) => props.theme.colors.white};
  border-radius: 12px;

  form {
    display: flex;
    flex-direction: column;

    button {
      margin-top: 10px;
    }

    .new-password-field {
      margin-bottom: 1rem;
    }
  }
`

export const MessagesContainer = styled.div`
  margin: 1.5rem 0px;

  h2 {
    color: ${(props) => props.theme.colors.gray[750]};
    font-size: ${(props) => props.theme.fontSizes.lg};
    font-weight: 700;
    line-height: 1.8rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme.colors.gray[750]};
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: 400;
    line-height: 1.5rem;
  }
`

export const FormWrapper = styled.div`
  padding: 2rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    margin-top: auto;
    color: ${(props) => props.theme.colors.blue[500]};
    text-decoration: underline;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
  }

  button {
    margin-top: 1.5rem !important;
  }
`

export const WrapperInput = styled.div`
  position: relative;

  label {
    span {
      font-size: ${(props) => props.theme.fontSizes.xs};
    }

    span:first-child {
      font-size: 1rem;
      line-height: 1.5rem;
      color: ${(props) => props.theme.colors.gray[750]};
    }

    input {
      font-size: 1rem;
      padding-right: 2rem;
    }
  }

  // Eye visibility
  button {
    right: 1rem;
    top: 1.25rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`
