import styled from 'styled-components';

export const ContainerCadastro = styled.div`
	width: 100%;
	min-height: 100vh;
	height: 100%;
	background: ${(props) => props.theme.colors.gradient};
`;

export const ContainerImageCadastro = styled.div`
    width: 60%;
    min-height: 100vh;
		height: 100%;
`;

export const MyImageCadastro = styled.img`
	width: 100%;
	height:100%;
	object-fit: cover;

`;
