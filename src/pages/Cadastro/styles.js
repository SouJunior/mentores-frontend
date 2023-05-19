import styled from 'styled-components';

export const ContainerCadastro = styled.div`
	width: 100%;
	height:100%;
	background: ${(props) => props.theme.colors.gradient};
	border:1px solid red;
	position: relative;
`;

export const ContainerImageCadastro = styled.div`
    width: 50%;
    height: 100%;

`;

export const MyImageCadastro = styled.img`
	width: 118%;
	height: 99.5%;
    top:50px;
`;
