import styled from 'styled-components'

export const ContainerForm = styled.div`
  max-width: 31.5rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.white};
  border-radius: 0.5rem;
  padding: 1.5rem;

  img {
    margin-bottom: 1rem;
    width: 16.5rem;
    height: 3rem;
  }

  h2 {
    font-weight: 500;
    font-size: ${(props) => props.theme.fontSizes.lg};
    line-height: 120%;
    color: ${(props) => props.theme.colors.gray[700]};
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;

    .group-fields {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    input {
      font-size: 1rem;
    }
  }
`

export const ContainerInput = styled.div`
  position: relative;

  svg {
    width: 1.5rem;
    height: 1.5rem;
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
    right: 1rem;
    top: 2.8rem;

    svg {
      color: ${(props) => props.theme.colors.black[200]};
    }
  }

  &.error span,
  &.error svg {
    color: ${(props) => props.theme.colors.red[500]} !important;
  }

  &:focus-within svg {
    color: ${(props) => props.theme.colors.blue[800]};
  }
`

export const ContainerCheckbox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  margin-bottom: 2rem;

  a {
    color: ${(props) => props.theme.colors.blue[800]};
    font-weight: 500;
  }
`

export const CallToRegisterText = styled.p`
  color: ${(props) => props.theme.colors.black[200]};
  line-height: 150%;
  margin-top: 2.5rem;
  padding-bottom: 0.5rem;

  a {
    color: ${(props) => props.theme.colors.blue[800]};
    font-weight: 500;
  }
`

export const BlockedAccountError = styled.p`
  color: ${(props) => props.theme.colors.red[500]};
  font-size: 0.875rem;
  margin-top: 0.5rem;
`
