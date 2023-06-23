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
			width={'288px'}
			height={'443px'}>
			<Image
				src={mentor.image}
				width={200}
				height={200}
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
