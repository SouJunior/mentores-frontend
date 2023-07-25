import styled from 'styled-components';

export const ContainerModal = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100%;
	width: 100%;
	background-color: #fff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
	gap: 20px;
`;

export const TitleModal = styled.h1`
	color: ${(props) => props.theme.colors.blue[500]};
	font-size: ${(props) => props.theme.fontSizes.lg};
`;

export const Message = styled.span`
	color: ${(props) => props.theme.colors.gray[700]};
	font-size: ${(props) => props.theme.fontSizes.sm};
	max-width: 50%;
	text-align: center;
	line-height: 150%;
`;

export const Hash = styled.span`
	color: ${(props) => props.theme.colors.blue[500]};
	font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const FooterModal = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 10px;
`;
