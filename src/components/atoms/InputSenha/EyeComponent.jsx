import React from 'react';
import EyeOpen from '/public/icons/EyeDefault.svg';
import EyeClose from '/public/icons/EyeClosed.svg';
import Image from 'next/image';
import { useState } from 'react';


export default function EyeComponent({ eye }) {
	return (
		<>
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
		</>
	);
}
