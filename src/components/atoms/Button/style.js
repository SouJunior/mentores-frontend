import styled from 'styled-components';

export const ButtonDefault = styled.button`
	font-size: ${(props) => props.theme.fontSizes.sm};
	border-color: ${(props) => props.theme.colors.blue[400]};
	color: ${(props) => props.theme.colors.white};
	background-color: ${(props) => props.theme.colors.blue[400]};

	&:hover {
		background-color: ${(props) => props.theme.colors.white};
		color: ${(props) => props.theme.colors.blue[400]};
	}
`;

export const ButtonVariant = styled(ButtonDefault)`
	border-color: ${(props) => props.theme.colors.blue[400]};
	color: ${(props) => props.theme.colors.blue[400]};
	background-color: ${(props) => props.theme.colors.white};

	&:hover {
		background-color: ${(props) => props.theme.colors.blue[400]};
		color: ${(props) => props.theme.colors.white};
	}
`;

export const ButtonForm = styled(ButtonDefault)`
	width: 100%;
	margin-top: 32px;
	height: 48px;

	&:hover {
		background-color: ${(props) => props.theme.colors.blue[700]};
		color: ${(props) => props.theme.colors.white};
		box-shadow: 0px 1px 15px rgba(17, 101, 186, 0.4);
	}

	&:disabled {
		cursor: default;
		filter: grayscale(100%);

	}
`;
