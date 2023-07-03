import React from 'react';
import {
	MentorsComponent,
	MentorsContent,
	SeeAll,
	MentorsTitle,
} from './style';
import Carousel from 'better-react-carousel';
import SliderComponent from '@/components/atoms/SliderComponent';
import CardMentor from '@/components/molecules/CardMentor';
import { mentores } from '@/mockups/mentores';

const MentorSection = () => {
	return (
		<MentorsComponent id='mentor'>
			<MentorsContent>
				<SeeAll>Ver todos</SeeAll>
				<MentorsTitle>Encontre seu mentor</MentorsTitle>
				<SliderComponent
					cols={4}
					row={1}
					autoplay={2000}
					arrowLeft={true}
					arrowRight={true}
					gap={'0px'}>
					{mentores.map((mentor) => {
						return (
							<Carousel.Item key={mentor.name}>
								<CardMentor mentor={mentor} />
							</Carousel.Item>
						);
					})}
				</SliderComponent>
			</MentorsContent>
		</MentorsComponent>
	);
};

export default MentorSection;
