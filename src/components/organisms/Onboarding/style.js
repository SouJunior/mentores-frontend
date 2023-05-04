import styled from 'styled-components';

export const ContainerOnboarding = styled.div`
	background: ${(props) => props.theme.colors.gradient};
	width: 100%;
	height: 100%;
	padding: 48px 64px;
	text-align: center;

	h2 {
		font-size: ${(props) => props.theme.fontSizes.xxxl};
		color: ${(props) => props.theme.colors.white};
		margin-bottom: 12px;
	}

	p {
		color: ${(props) => props.theme.colors.white};
		font-size: ${(props) => props.theme.fontSizes.lg};
		font-weight: 500;
		margin-bottom: 48px;

		span {
			color: ${(props) => props.theme.colors.white};
			font-weight: 700;
		}
	}
`;
