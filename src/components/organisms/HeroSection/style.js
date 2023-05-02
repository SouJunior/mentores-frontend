import styled from 'styled-components';

export const ContainerHero = styled.div`
	padding: 0px 64px;

	p {
		margin-bottom: 40px;
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	input {
		background-color: transparent;
		border: none;
		height: 100%;
		width: 100%;
		padding: 24px 0px;
		font-size: ${(props) => props.theme.fontSizes.md};

		&:focus-visible {
			outline: none;
		}

		&::placeholder {
			color: ${(props) => props.theme.colors.placeholder};
			font-size: ${(props) => props.theme.fontSizes.md};
		}
	}
`;

export const ContainerInput = styled.div`
	border-radius: 8px;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.13);
	background-color: '#FAFAFA';
	width: 680px;
	border: 1px solid ${(props) => props.theme.colors.opacityGray};
	padding: 0px 12px 0px 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	div {
		display: flex;
		align-items: center;
		justify-content: left;
		gap: 16px;
		width: 74%;
	}
`;
