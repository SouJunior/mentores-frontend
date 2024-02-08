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
`
