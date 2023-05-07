import styled from 'styled-components';

export const ContainerForm = styled.div `
width: 30%;
height: fit-content;
position: absolute;
left: 65%;
top: 30px;
background: ${(props) => props.theme.colors.white};
border-radius: 12px;
margin-left: auto;
`
export const ContainerCadastro = styled.div`
form{
margin: 20px;
}

p{
    font-family: 'Radio Canada';
    font-style: normal;
    font-size: ${(props) => props.theme.fontSizes.xs};
    color: ${(props) => props.theme.colors.gray[700]};
}

`

