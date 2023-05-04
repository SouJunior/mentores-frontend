import styled from 'styled-components';

export const ContainerHeader = styled.div`
	padding: 16px 0px;
	display: flex;
	justify-content: space-between;
	align-items: center;
  margin-bottom: 40px;

	div {
		display: flex;
		gap: 20px;
		align-items: center;
		span {
			background-color: ${(props) => props.theme.colors.blue[400]};
			width: 2px;
			height: 28px;
		}
	}
`;

export const GroupBtn = styled.div`
	display: flex;
	justify-content: center;
	gap: 12px;
	align-items: center;
`;
