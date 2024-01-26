import styled from 'styled-components'

export const ContainerForm = styled.div`
  max-width: 31.5rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  background: rgba(253, 253, 253, 0.9);
  position: absolute;
  top: 10%;
  right: 5%;
  border-radius: 0.75rem;
  padding: 2rem;

  img {
    margin-bottom: 40px;
  }

  h2 {
    font-weight: 600;
    font-size: ${(props) => props.theme.fontSizes.lg};
    line-height: 120%;
    color: ${(props) => props.theme.colors.blue[400]};
    margin-bottom: 32px;
  }

  form {
    display: flex;
    flex-direction: column;

    .group-fields {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    input {
      padding-left: 2.8rem;
      background-color: rgba(255, 255, 255, 0.1);
      font-size: 1rem;
    }
  }
`

export const ContainerInput = styled.div`
  position: relative;

  &.error span,
  &.error svg {
    color: ${(props) => props.theme.colors.error} !important;
  }

  svg {
    position: absolute;
    left: 1rem;
    top: 2.8rem;

    width: 1.5rem;
    height: 1.5rem;
    color: ${(props) => props.theme.colors.gray[700]};
  }

  &:focus-within svg {
    color: ${(props) => props.theme.colors.blue[400]};
  }

  label {
    span:first-child {
      color: ${(props) => props.theme.colors.gray[700]};
    }

    span {
      font-weight: 400;
      font-size: 1rem;
      line-height: 150%;
    }
  }

  .eye-visibility {
    right: 3.5rem;
    top: 1px;

    svg {
      color: ${(props) => props.theme.colors.blue[400]};
    }
  }
`

export const ContainerCheckbox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
`

export const CallToRegisterText = styled.p`
  color: ${(props) => props.theme.colors.gray[700]};
  line-height: 150%;
  margin-top: 1.5rem;
  padding-bottom: 0.5rem;

  span {
    color: ${(props) => props.theme.colors.blue[500]};
  }
`

export const BlockedAccountError = styled.p`
  color: ${(props) => props.theme.colors.error};
  font-size: 0.875rem;
  margin-top: 0.5rem;
`
