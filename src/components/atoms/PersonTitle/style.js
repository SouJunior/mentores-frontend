import styled from 'styled-components';

export const ContainerTitle = styled.div`
	margin-bottom: 40px;
	margin-top: 80px;

	h1 {
		color: ${(props) => props.theme.colors.gray};
		font-size: ${(props) => props.theme.fontSizes.xl};
		span {
			color: ${(props) => props.theme.colors.blue[500]};
		}
	}
`;
