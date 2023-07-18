import styled from 'styled-components';

export const HeaderCardDepo = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 20px;
	

	img {
		width: 56px;
		height: 56px;
		object-fit: cover;
		border-radius: 500%;
	}
	div {
		display: flex;
		flex-direction: column;
	}

	h4 {
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 150%;
		color: #212121;
		font-family: 'Radio Canada';
	}

	h5 {
		font-family: 'Radio Canada';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 150%;
		color: #5d5f5d;
	}
`;

export const GreatContainer = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	height: 280px;
	width: 302px;
	overflow:hidden;
	text-overflow: ellipsis;


	p {
		font-family: 'Radio Canada';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 24px;
		color: #5d5f5d;

		
	}
`;
