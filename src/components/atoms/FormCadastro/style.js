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
    margin: 10px 0px;
}

input[type="radio"] {
    top: 10px;
    margin: 10px 0px;
    width: 20px;                         
    height: 20px;
}

.termo{
    position: absolute;
    top: 528px;
    font-size: ${(props) => props.theme.fontSizes.xs};
    color: ${(props) => props.theme.colors.blue[500]};
}

.termo-button{
    border: none;
    background: none;
    text-decoration: underline;
    height: 10px;
    color: ${(props) => props.theme.colors.blue[500]};
}
.asteristico{
    color: ${(props) => props.theme.colors.blue[500]};
    }

.souj{
    width: 65%;
    height: 53px;
}
`
export const ContainerEye = styled.div`
	position: absolute;
	right: 15px;
    top:415px;
    background-color: transparent;

	button {
		display: flex;
		align-items: center;
		justify-content: center;
        border: none;
        background: none;
	}
`;
