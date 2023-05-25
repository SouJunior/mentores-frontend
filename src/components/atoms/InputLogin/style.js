import styled from 'styled-components';
import { string } from 'yup';

export const ContainerInput = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16px;
	position: relative;
	border-radius: 8px;
	margin: 8px 0px 32px;

	.icon {
		color: ${(props) => props.theme.colors.gray[700]};
		transition: all 0.2s ease;
		position: absolute;
		left: 16px;
	}

	&:hover {
		box-shadow: 0px 3px 6px rgba(17, 101, 186, 0.6);
		input {
			border: 1px solid ${(props) => props.theme.colors.blue[400]};
		}

		.icon {
			color: ${(props) => props.theme.colors.blue[400]};
		}
	}

	&:focus-within {
		.icon {
			fill: ${(props) => props.theme.colors.blue[400]};
			color: ${(props) => props.theme.colors.gray[700]};
		}
		input {
			border: 1px solid ${(props) => props.theme.colors.blue[400]};
		}
	}

	input {
		height: 100%;
		width: 100%;
		padding: 16px 48px 16px;
		width: 100%;
		outline: none;
		background-color: '#fff';
		border: 1px solid ${(props) => props.theme.colors.gray[700]};
		border-radius: 8px;

		&::placeholder {
			margin: 20px;
			color: ${(props) => props.theme.colors.gray[700]};
		}
	}
`;

export const Label = styled.label`
	color: ${(props) => props.theme.colors.gray[700]};
`;

export const ContainerEye = styled.button`
	position: absolute;
	border: none;
	height: 48px;
	background-color: transparent;
	right: 0px;
`;

export const InputError = styled.input`
	height: 100%;
	width: 100%;
	padding: 16px 48px 16px;
	width: 100%;
	outline: none;
	background-color: '#fff';
	border: 1px solid ${(props) => props.theme.colors.error};
	border-radius: 8px;
`;

export const LabelError = styled(Label)`
	color: ${(props) => props.theme.colors.error};
`;

export const ContainerInputError = styled(ContainerInput)`
	input {
		border: 1px solid ${(props) => props.theme.colors.error};
	}
	.icon {
		color: ${(props) => props.theme.colors.error};
	}
`;
