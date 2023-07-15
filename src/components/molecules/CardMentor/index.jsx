import CardComponent from '@/components/atoms/CardComponent';
import React from 'react';
import {
	CardStack,
	CardButton,
	CardImage,
	CardStacks,
	CardSubtitle,
	CardTitle,
} from './style';
import Image from 'next/image';

export default function CardMentor({ mentor }) {
	return (
		<CardComponent
			width={'300px'}
			height={'350px'}>
			<Image
				src={mentor.image}
				width={120}
				height={120}
				style={{ borderRadius: '500%', objectFit: 'cover' }}
				alt={mentor.name}
			/>
			<CardTitle>{mentor.name}</CardTitle>
			<CardSubtitle>{mentor.role}</CardSubtitle>
			<CardStacks>
				{mentor.stacks.map((stack) => (
					<CardStack key={stack}>{stack}</CardStack>
				))}
			</CardStacks>
			<CardButton>Agendar um horário</CardButton>
		</CardComponent>
	);
}
