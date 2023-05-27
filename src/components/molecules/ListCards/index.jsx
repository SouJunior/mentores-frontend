import React from 'react';
import imgCard1 from '/public/images/homepage/onboarding/marque.svg';
import imgCard2 from '/public/images/homepage/onboarding/encontre.svg';
import imgCard3 from '/public/images/homepage/onboarding/descreva.svg';
import imgCard4 from '/public/images/homepage/onboarding/conecte.svg';
import { ContainerListCard } from './style';
import Card from '@/components/atoms/Card';

export default function ListCards() {
	const dataCards = [
		{
			id: 1,
			cardContent: {
				title: 'Pesquise',
				description:
					'Encontre seu mentor especializado na área desejada e mais adequado para você.',
				img: imgCard2,
			},
		},
		{
			id: 2,
			cardContent: {
				title: 'Agende',
				description:
					'Marque um horário disponível na agenda do mentor,  que melhor  se encaixa para vocês.',
				img: imgCard1,
			},
		},
		{
			id: 3,
			cardContent: {
				title: 'Explique',
				description:
					'Descreva o seu objetivo com a mentoria, para que o mentor possa se preparar.',
				img: imgCard3,
			},
		},
		{
			id: 4,
			cardContent: {
				title: 'Conecte-se',
				description: 'Compareça no dia e horário agendado e comece a aprender.',
				img: imgCard4,
			},
		},
	];

	return (
		<ContainerListCard>
			{dataCards.map((data) => {
				return (
					<Card
						key={data.id}
						title={data.cardContent.title}
						description={data.cardContent.description}
						img={data.cardContent.img}
					/>
				);
			})}
		</ContainerListCard>
	);
}
