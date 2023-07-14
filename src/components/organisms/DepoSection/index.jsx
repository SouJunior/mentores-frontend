import React from 'react';
import { ContainerDepo, ContainerBtn } from './style';
import Button from '@/components/atoms/Button';
import Link from 'next/link';
import SliderComponent from '@/components/atoms/SliderComponent';
import { mentores } from '@/mockups/mentores';
import Carousel from 'better-react-carousel';
import CardDepo from '@/components/molecules/CardDepo';

export default function DepoSection() {
	return (
		<ContainerDepo>
			<h2>Seja um mentor</h2>

			<SliderComponent
				cols={4}
				row={1}
				//autoplay={3000}
				>
				{mentores.map((mentor) => {
					return (
						<Carousel.Item key={mentor.name}>
							<CardDepo mentor={mentor} />
						</Carousel.Item>
					);
				})}
			</SliderComponent>

			<ContainerBtn>
				<Link href={'/Cadastro'}>
					<Button
						content={'Quero mentorar'}
						btnRole={'primary'}
					/>
				</Link>
			</ContainerBtn>
		</ContainerDepo>
	);
}
