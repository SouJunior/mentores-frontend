import { styled } from "styled-components";


export const ContainerForm = styled.div
`

margin:0 auto;
width:504px;
height: 570px;
background: ${(props) => props.theme.colors.white};
border-radius: 12px;
padding: 12px 0px;
margin-top:30px;

form {
    p{
        color:${(props) => props.theme.colors.gray[700]};
        font-size: 24px;
        font-weight: 700;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
    }
    span {
        color:${(props) => props.theme.colors.gray[700]};
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;

    }

    button{
        margin-top:10px;
    }
}
`

export const MessagesContainer = styled.div 
`
margin: 30px 0px;
p {
    margin-bottom:20px;
}

`

// ... seu código anterior ...

export const FormWrapper = styled.div`
  padding: 10px 30px;
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
`;
