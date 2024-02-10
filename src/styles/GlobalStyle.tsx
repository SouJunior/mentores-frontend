import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Radio Canada', sans-serif;
  }

  :root {
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  li { 
    list-style:none;
  }

  button,
  input,
  textarea,
  a {
    color: inherit;
    font-size: inherit;
  }

  a {
    text-decoration:none;
  }

  a,
  button {
    transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
    cursor: pointer;
  }

  /* Global classes */
  .container {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
  }

  .Toastify__toast-container {
    max-width: 35rem;
    --toastify-toast-width: 100%;
  }

  #toast-error {
    background-color: ${(props) => props.theme.colors.red[600]};
    padding: 1rem;
    border-radius: 0.75rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    .Toastify__toast-body {
      padding: 0;
      font-size: 1rem;
      max-width: 30.875rem;
      line-height: 2rem;
    }

    .Toastify__close-button {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      line-height: 0;

      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`
