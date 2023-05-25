import styled from 'styled-components';

export const CheckboxContainer = styled.div`
	display: flex;
	gap: 12px;
	align-items: center;
	justify-content: flex-start;

	input {
		border: 1px solid ${(props) => props.theme.colors.blue[400]} !important;
		border-radius: 4px !important;
		width: 16px !important;
		height: 16px !important;
		color: ${(props) => props.theme.colors.blue[400]} !important;
	}

	label {
		color: ${(props) => props.theme.colors.blue[400]};
		font-size: ${(props) => props.theme.fontSizes.sm};
		cursor: pointer;
	}
`;
