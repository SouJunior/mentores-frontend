import Image from 'next/image';
import { ContainerEmail } from './style';
import IconDefault from '/public/icons/EmailDefault.svg';
import IconFocus from '/public/icons/EmailSelected.svg';
import IconHover from '/public/icons/EmailHover.svg';
import { useState } from 'react';

export default function InputEmail({ setEmail, email }) {
	const [icon, setIcon] = useState(IconDefault);
	return (
		<ContainerEmail
			onClick={() => setIcon(IconFocus)}
			onChange={() => setIcon(IconFocus)}
			onMouseEnter={() => setIcon(IconHover)}>
			<Image
				src={icon}
				alt='Ícone de E-mail'
			/>
			<input
				type='email'
				placeholder='mentorsoujunior@gmail.com'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
		</ContainerEmail>
	);
}
