import React from 'react';
import { ButtonContainer } from './style';

export default function ButtonPrimary({text}) {

	return (
		<ButtonContainer primary >
			{text}
		</ButtonContainer>
	);
}
