import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  transition: all 0.3s ease;  
}

body{
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    font-family: 'Radio Canada', sans-serif;
    background-color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSizes.sm};
    color: ${(props) => props.theme.colors.black};

    button{
      font-family: 'Radio Canada', sans-serif;
      padding: 12px 16px;
      text-align: center;
      border-radius: 8px;
      border: 2px solid;
      cursor: pointer;
      line-height: 150%;
    }
  
    p{
      font-size: ${(props) => props.theme.fontSizes.sm};
      color: ${(props) => props.theme.colors.gray};
    }

    li{
      list-style:none;
    }

    a{
      text-decoration:none;
      color: ${(props) => props.theme.colors.blue[400]};
      font-size: ${(props) => props.theme.fontSizes.sm};
      line-height: 150%;

      &:hover{
        text-decoration:none;
         color: ${(props) => props.theme.colors.blue[300]};
      }
    }
}
`;
