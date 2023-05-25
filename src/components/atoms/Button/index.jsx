import React from 'react';
import { ButtonDefault, ButtonForm, ButtonVariant } from './style';

export default function Button({ content, btnRole, disabled }) {
	if (btnRole === 'primary') return <ButtonDefault>{content}</ButtonDefault>;

	if (btnRole === 'secondary') return <ButtonVariant>{content}</ButtonVariant>;

	if (btnRole === 'form')
		return (
			<ButtonForm
				type='submit'
				disabled={disabled}>
				{content}
			</ButtonForm>
		);
}
