import styled from 'styled-components';

export const ContainerCadastro = styled.div`
	width: 100%;
	height: 100vh;
	height: fit-content;
	display: flex;
	padding-bottom: 36vh;
	background: ${(props) => props.theme.colors.gradient};
`;

export const ContainerImageCadastro = styled.div`
	height: 100%;
	width: 55%;
`;

export const MyImageCadastro = styled.img`
	width: 100%;
	height: 100vh;
	object-fit: contain;
`;
