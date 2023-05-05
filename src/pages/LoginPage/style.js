import styled from 'styled-components';

export const ContainerLogin = styled.div`
	width: 100%;
	height: 100vh;
	background: ${(props) => props.theme.colors.gradient};
	position: relative;
`;

export const ContainerImage = styled.div`
	top: 10%;
	position: absolute;
`;

export const MyImage = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
`;
