import styled from 'styled-components';

export const ButtonDefault = styled.button`
	font-size: ${(props) => props.theme.fontSizes.sm};
	border-color: ${(props) => props.theme.colors.blue[400]};
	color: ${(props) => props.theme.colors.white};
	background-color: ${(props) => props.theme.colors.blue[400]};

	&:hover {
		background-color: transparent;
		color: ${(props) => props.theme.colors.blue[400]};
	}
`;

export const ButtonVariant = styled(ButtonDefault)`
	border-color: ${(props) => props.theme.colors.blue[400]};
	color: ${(props) => props.theme.colors.blue[400]};
	background-color: transparent;

	&:hover {
		background-color: ${(props) => props.theme.colors.blue[400]};
		color: ${(props) => props.theme.colors.white};
	}
`;

export const ButtonForm = styled(ButtonDefault)`
	width: 100%;
	height: 48px;

	&:hover {
		background-color: ${(props) => props.theme.colors.blue[700]};
		color: ${(props) => props.theme.colors.white};
		box-shadow: 0px 1px 15px rgba(17, 101, 186, 0.4);
	}

	&:disabled {
		cursor: not-allowed;
		filter: grayscale(100%);
	}
`;

export const ButtonFormVariant = styled(ButtonForm)`
	width: 100%;
	border-color: ${(props) => props.theme.colors.blue[400]};
	color: ${(props) => props.theme.colors.blue[400]};
	background-color: ${(props) => props.theme.colors.white};
`;

export const ButtonUnstyled = styled.button`
	all: unset;
	cursor: pointer;
	margin: 0px;
	text-decoration: underline;
	transition: all 0.3s ease;

	&:hover {
		color: ${(props) => props.theme.colors.blue[300]};
	}
`;

export const ButtonModal = styled.button`
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 150%;
	color: #fff;
	padding: 8px 40px;
	border: 2px solid ${(props) => props.theme.colors.red[500]};
	background-color: ${(props) => props.theme.colors.red[500]};

	a {
		color: #fff;
		width: 100%;
		height: 100%;
		padding: 8px 40px;
	}

	&:hover {
		color: #5d5f5d;
		background-color: transparent;
		border-color: #5d5f5d;
	}
`;

export const ButtonModalSecondary = styled(ButtonModal)`
	color: #5d5f5d;
	background-color: transparent;
	border: 2px solid #5d5f5d;

	&:hover {
		background-color: ${(props) => props.theme.colors.red[500]};
		color: #fff;
		border-color: ${(props) => props.theme.colors.red[500]};
	}
`;
