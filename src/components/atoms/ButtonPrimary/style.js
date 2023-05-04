import styled from 'styled-components';

export const ButtonContainer = styled.button`
	font-size: ${(props) => props.theme.fontSizes.sm};
	border-color: ${(props) => props.theme.colors.blue[400]};
	color: ${(props) => props.theme.colors.white};
	background-color: ${(props) => props.theme.colors.blue[400]};

	&:hover {
		background-color: ${(props) => props.theme.colors.white};
		color: ${(props) => props.theme.colors.blue[400]};
	}
`;
