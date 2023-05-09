import styled from 'styled-components';

export const ContainerCard = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.theme.colors.white};
	border-radius: 8px;
	gap: 16px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	padding: 24px 16px;
	width: 292px;
	height: 360px;

	h3 {
		color: ${(props) => props.theme.colors.blue[500]};
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	p {
		color: ${(props) => props.theme.colors.gray[700]};
		font-size: ${(props) => props.theme.fontSizes.sm};
	}
`;
