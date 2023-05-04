import styled from 'styled-components';
import { ButtonContainer } from '../ButtonPrimary/style';

export const ButtonVariant = styled(ButtonContainer)`
	border-color: ${(props) => props.theme.colors.blue[400]};
	color: ${(props) => props.theme.colors.blue[400]};
	background-color: ${(props) => props.theme.colors.white};

	&:hover {
		background-color: ${(props) => props.theme.colors.blue[400]};
		color: ${(props) => props.theme.colors.white};
	}
`;
