import React from 'react';
import { ContainerOnboarding } from './style';
import ListCards from '../../molecules/ListCardsOnboarding';

export default function Onboarding() {
	return (
		<ContainerOnboarding id='onboarding'>
			<h2>Conecte-se a um mentor em 4 passos</h2>
			<p>
				com a <span>facilidade e praticidade</span> oferecida pelo Portal de
				Mentorias.{' '}
			</p>
			<ListCards />
		</ContainerOnboarding>
	);
}
