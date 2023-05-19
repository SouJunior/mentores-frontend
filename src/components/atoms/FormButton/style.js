import styled from "styled-components";

export const ContainerButton = styled.div`
    width: 100%;
    height: 55px;
    text-align: center;
    justify-content: center;
    padding: 16px 0px;

        
    button{
    width: 100%;
    height: 48px;
    background:${(props) => props.theme.colors.blue[400]};
    border-radius: 8px;
    color: ${(props) => props.theme.colors.white};
    font-family: 'Radio Canada';
    font-size: ${(props) => props.theme.fontSizes.sm};
    }
`
export const SecondaryBtn = styled(ContainerButton)`
button{
background: ${(props) => props.theme.colors.white};
color: ${(props) => props.theme.colors.blue[400]};
}
`