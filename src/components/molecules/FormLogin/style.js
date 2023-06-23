import styled from 'styled-components';

export const ContainerForm = styled.div`
	max-width: 500px;
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.colors.white};
	position: absolute;
	top: 10%;
	right: 5%;
	border-radius: 12px;
	padding: 32px;
	filter: drop-shadow(1px 4px 20px rgba(0, 0, 0, 0.4))
		drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

	form {
		display: flex;
		flex-direction: column;

		img {
			margin-bottom: 40px;
		}

		h2 {
			font-weight: 600;
			font-size: ${(props) => props.theme.fontSizes.lg};
			line-height: 120%;
			color: ${(props) => props.theme.colors.blue[400]};
			margin-bottom: 32px;
		}

		span {
			color: ${(props) => props.theme.colors.error};
			/* position: absolute;
			bottom: 0; */
		}

		p {
			margin-top: 12px;
		}
	}
`;
