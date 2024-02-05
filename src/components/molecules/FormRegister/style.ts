import styled, { keyframes } from 'styled-components'

export const ContainerForm = styled.div`
  width: 100%;
  max-width: 500px;
  height: fit-content;
  position: absolute;
  right: 2.7rem;
  top: 2rem;
  background: ${(props) => props.theme.colors.white};
  border-radius: 12px;
  padding: 2rem;
`

export const ContainerRegister = styled.div`
  .container-logo-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 0.5rem;

    img {
      width: 15rem;
      height: 2.25rem;
    }

    p {
      font-size: 0.75rem;
      color: ${(props) => props.theme.colors.gray[700]};
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input[type='radio'] {
    vertical-align: middle;
    margin-right: 5px;
  }

  .asterisk {
    color: ${(props) => props.theme.colors.blue[500]};
  }
`

export const ContainerTerms = styled.div`
  display: flex;
  max-height: 100px;
  text-align: justify;
  align-items: flex-start;
  justify-content: center;
  margin-top: 0.5rem;
`

export const TxtTerms = styled.label`
  font-size: 0.875rem;
  width: 100%;
  color: ${(props) => props.theme.colors.blue[500]};
  line-height: 150%;

  margin-left: 0.5rem;
  margin-top: -5px; // Align text with checkbox input

  button {
    display: inline;
    padding: 0;
    color: ${(props) => props.theme.colors.blue[500]};

    font-size: 0.875rem;
    font-weight: 400;
    line-height: 150%;

    border-bottom: 1px solid ${(props) => props.theme.colors.blue[500]};
    border-radius: 0;
  }
`

export const ContainerBtn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0px 0px;
  margin: 0px;
  gap: 16px;
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

const animloader = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`

export const ButtonLoading = styled.button`
  display: grid;
  place-content: center;
  font-size: ${(props) => props.theme.fontSizes.sm};
  border-color: ${(props) => props.theme.colors.blue[400]};
  color: ${(props) => props.theme.colors.white};
  width: 100%;
  height: 48px;

  background: ${(props) => props.theme.colors.blue[400]};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.colors.blue[700]};
    color: ${(props) => props.theme.colors.white};
    box-shadow: 0px 1px 15px rgba(17, 101, 186, 0.4);
  }

  &:disabled {
    cursor: wait;
  }

  .loader {
    width: 24px;
    height: 24px;
    display: inline-block;
    position: relative;
  }
  .loader::after,
  .loader::before {
    content: '';
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
    animation: ${animloader} 2s linear infinite;
  }
  .loader::after {
    animation-delay: 1s;
  }
`

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
