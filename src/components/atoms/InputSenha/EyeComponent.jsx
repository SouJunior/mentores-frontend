import React from 'react';
import EyeOpen from '/public/icons/EyeDefault.svg';
import EyeClose from '/public/icons/EyeClosed.svg';
import Image from 'next/image';
import { useState } from 'react';
import { ContainerEye } from './style';

export default function EyeComponent() {
	const [eye, setEye] = useState(true);

	function toggleShow(e) {
		e.preventDefault();
		setEye(!eye);
	}

	return (
		<ContainerEye>
			<button
				type='button'
				onClick={(e) => toggleShow(e)}>
				{eye === true ? (
					<Image
						src={EyeOpen}
						alt='Olho'
						width={24}
						height={24}
					/>
				) : (
					<Image
						src={EyeClose}
						alt='Olho'
						width={24}
						height={24}
					/>
				)}
			</button>
		</ContainerEye>
	);
}
