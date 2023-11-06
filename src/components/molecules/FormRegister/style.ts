import styled, { keyframes } from 'styled-components'

export const ContainerForm = styled.div`
  width: 100%;
  max-width: 500px;
  height: fit-content;
  position: absolute;
  right: 70px;
  top: 30px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 12px;
  padding: 12px 0px;
`

export const ContainerRegister = styled.div`
  form {
    margin: 8px 20px;
    height: 100%;

    img {
      width: 240px;
      height: 36px;
    }
  }

  p {
    font-family: 'Radio Canada';
    font-style: normal;
    font-size: ${(props) => props.theme.fontSizes.xs};
    color: ${(props) => props.theme.colors.gray[700]};
    margin: 8px 0px;
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
`

export const TxtTerms = styled.div`
  font-size: 14px;
  width: 100%;
  margin-left: 8px;
  color: ${(props) => props.theme.colors.blue[500]};
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

  margin-bottom: 1rem;

  span {
    span {
      color: ${(props) => props.theme.colors.blue[500]};
    }
  }

  [data-placeholder] {
    color: ${(props) => props.theme.colors.gray[300]};
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
    background: #FFF;
    position: absolute;
    left: 0;
    top: 0;
    animation: ${animloader} 2s linear infinite;
  }
  .loader::after {
    animation-delay: 1s;
  }
`