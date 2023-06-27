import styled from 'styled-components';

export const ContainerForm = styled.div`
	width: 100%;
	max-width: 500px;
	height: fit-content;
	position: absolute;
	right: 70px;
	top: 30px;
	background: ${(props) => props.theme.colors.white};
	border-radius: 12px;
	padding: 12px 0px;
`;

export const ContainerCadastro = styled.div`
	form {
		margin: 8px 20px;
		height: 100%;

		img {
			width: 240px;
			height: 36px;
		}
	}

	p {
		font-family: 'Radio Canada';
		font-style: normal;
		font-size: ${(props) => props.theme.fontSizes.xs};
		color: ${(props) => props.theme.colors.gray[700]};
		margin: 8px 0px;
	}

	input[type='radio'] {
		vertical-align: middle;
		margin-right: 5px;
	}

	.asteristico {
		color: ${(props) => props.theme.colors.blue[500]};
	}

	.souj {
		width: 240px;
		height: 36px;
	}
`;

export const ContainerTerms = styled.div`
	display: flex;
	max-height: 100px;
	text-align: justify;
	align-items: flex-start;
	justify-content: center;
`;

export const TxtTerms = styled.div`
	font-size: 14px;
	width: 100%;
	color: ${(props) => props.theme.colors.blue[500]};
`;

export const ModalLogo = styled.img`
	max-width: 120px;
	align-self: center;
`;
export const ModalHash = styled.p`
	font-family: 'Radio Canada';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 150%;
	color: #1165ba;
	margin-top: 5px;
`;
export const ModalBox = styled.div`
	overflow: auto;
	background-color: white;
	width: 100%;
	padding: 24px;
	margin-top: 30px;
	font-family: 'Radio Canada';

	&::-webkit-scrollbar {
		width: 15px;
	}

	&::-webkit-scrollbar-thumb {
		background: #5d5f5d;
		border-radius: 100px;
	}

	&::-webkit-scrollbar-track {
		background: rgba(215, 217, 215, 0.5);
	}
`;

export const ModalBoxTitulo = styled.h2`
	width: 521px;
	height: 24px;
	font-family: 'Radio Canada';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 150%;
	color: #1165ba;
`;

export const ModalBoxSubTitulo = styled.h2`
	font-family: 'Radio Canada';
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 150%;
	color: #000000;
	margin-top: 15px;
`;
export const ModalBoxParagrafo = styled.p`
	width: 100%;
	margin: 12px 0px;
	font-family: 'Radio Canada';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 150%;
	color: #000000;
`;

export const ContainerBtn = styled.div`
	display: flex;
	flex-direction: column;
	padding: 12px 0px 0px;
	margin: 0px;
	gap: 16px;
`;
