import styled from 'styled-components'

export const ContainerHero = styled.div`
  padding: 0px 64px;
  margin: 0px 0px 100px;
  position: relative;

  p {
    margin: 80px 0px 40px;
    font-size: ${(props) => props.theme.fontSizes.md};
  }

  input {
    background-color: transparent;
    border: none;
    height: 100%;
    width: 100%;
    padding: 24px 0px;
    font-size: ${(props) => props.theme.fontSizes.md};

    &:focus-visible {
      outline: none;
    }

    &::placeholder {
      color: ${(props) => props.theme.colors.placeholder};
      font-size: ${(props) => props.theme.fontSizes.md};
    }
  }
`

export const ContainerInputForm = styled.form`
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.13);
  background-color: '#FAFAFA';
  width: 680px;
  border: 1px solid ${(props) => props.theme.colors.opacityGray};
  padding: 0.5rem 0.75rem;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1;

    svg {
      color: ${(props) => props.theme.colors.blue[400]};
    }

    input {
      padding: 0.75rem 0;
      padding-right: 1rem;
      font-size: 1.125rem;
      line-height: 1.7rem;

      &::placeholder {
        color: ${(props) => props.theme.colors.gray[500]};
      }
    }
  }
`

export const TextAnimated = styled.h3`
  color: ${(props) => props.theme.colors.blue[400]};
  font-size: ${(props) => props.theme.fontSizes.xxl};
  position: absolute;
  margin-bottom: 40px;
`

export const ButtonMentor = styled.button`
  display: block;
  max-width: 13.5rem;
  width: 100%;
  padding: 0.75rem;

  background-color: ${(props) => props.theme.colors.blue[400]};
  color: ${(props) => props.theme.colors.white};
  line-height: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.blue[400]};

  text-align: center;
  font-size: 1rem;

  &:not(:disabled):hover {
    background-color: #fff;
    color: ${(props) => props.theme.colors.blue[400]};
  }

  &:disabled {
    cursor: not-allowed;
  }
`
