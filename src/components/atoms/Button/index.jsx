import React from 'react';
import { ButtonDefault, ButtonVariant } from './style';

export default function Button({ text, btnRole }) {
	if (btnRole === 'primary') return <ButtonDefault>{text}</ButtonDefault>;

	if (btnRole === 'secondary') return <ButtonVariant>{text}</ButtonVariant>;
}
