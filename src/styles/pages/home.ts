import styled from 'styled-components'

export const ModalContainer = styled.section`
  padding: 1.5rem;
  padding-top: 0;
  display: grid;
  gap: 1.5rem;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

export const ModalTitle = styled.strong`
  font-size: 1.5rem;
  color: #323232;
  font-weight: 600;
  line-height: 140%;
  font-family: 'Radio Canada', sans-serif;
  text-align: center;
  max-width: 18.75rem;
  margin: 0 auto;
`

export const ModalDescription = styled.p`
  font-size: 1.25rem;
  color: #323232;
  line-height: 140%;
  font-family: 'Radio Canada', sans-serif;
  text-align: center;
`

export const ModalButton = styled.a`
  background-color: ${(props) => props.theme.colors.blue[400]};
  border-radius: 0.5rem;
  color: ${(props) => props.theme.colors.white};
  border: 0;
  font-size: 1rem;
  line-height: 150%;
  padding: 1rem;
  width: 100%;
  text-align: center;

  &:hover {
    background: ${(props) => props.theme.colors.blue[700]};
    box-shadow: 0px 1px 15px 0px rgba(17, 101, 186, 0.4);
    color: ${(props) => props.theme.colors.white};
  }
`
