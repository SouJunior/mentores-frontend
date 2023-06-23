import React from 'react';
import Image from 'next/image';
import { ContainerCard } from './style';

export default function CardOnboarding({ title, description, img }) {
	return (
		<ContainerCard>
			<Image
				width={180}
				height={180}
				src={img}
				alt={title}
				loading='eager'
			/>
			<h3>{title}</h3>
			<p>{description}</p>
		</ContainerCard>
	);
}
