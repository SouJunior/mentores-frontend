import React from 'react';
import {
	ButtonDefault,
	ButtonForm,
	ButtonFormVariant,
	ButtonModalSecondary,
	ButtonModal,
	ButtonUnstyled,
	ButtonVariant,
} from './style';

import Link from 'next/link';

export default function Button({ content, btnRole, disabled, onClick }) {
	if (btnRole === 'primary') return <ButtonDefault>{content}</ButtonDefault>;

	if (btnRole === 'secondary')
		return <ButtonVariant type='button'>{content}</ButtonVariant>;

	if (btnRole === 'unstyled')
		return (
			<ButtonUnstyled
				onClick={onClick}
				type='button'>
				{content}
			</ButtonUnstyled>
		);

	if (btnRole === 'ModalSecondary')
		return (
			<ButtonModalSecondary
				onClick={onClick}
				type='button'>
				{content}
			</ButtonModalSecondary>
		);

	if (btnRole === 'ModalDefault')
		return (
			<Link href={'/'}>
				<ButtonModal type='button'>{content}</ButtonModal>
			</Link>
		);

	if (btnRole === 'formSecondary')
		return (
			<ButtonFormVariant
				onClick={onClick}
				type='button'>
				{content}
			</ButtonFormVariant>
		);

	if (btnRole === 'form')
		return (
			<ButtonForm
				type='submit'
				disabled={disabled}>
				{content}
			</ButtonForm>
		);
}
