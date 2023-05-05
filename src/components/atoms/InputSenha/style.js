import styled from 'styled-components';

export const ContainerPassword = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16px;
	position: relative;
	border-radius: 8px;
	margin: 8px 0px 32px;

	&:hover {
		box-shadow: 0px 3px 6px rgba(17, 101, 186, 0.6);
	}

	img {
		position: absolute;
		left: 16px;
	}

	input {
		height: 100%;
		width: 100%;
		padding: 16px 48px 16px;
		width: 100%;
		outline: none;
		background-color: '#fff';
		border: 2px solid ${(props) => props.theme.colors.gray[700]};
		border-radius: 8px;

		&:focus-visible {
			border: 2px solid ${(props) => props.theme.colors.blue[400]};
		}

		&::placeholder {
			margin: 20px;
		}
	}
`;

export const ContainerEye = styled.div`
	position: absolute;
	right: 32px;

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: transparent;
		border: none;
	}
`;
