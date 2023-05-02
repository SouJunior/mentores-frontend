import React from 'react';
import Header from '@/components/molecules/Header';
import ButtonPrimary from '@/components/atoms/ButtonPrimary';
import { ContainerHero, ContainerInput } from './style';
import PersonTitle from '@/components/atoms/PersonTitle';
import Image from 'next/image';
import lupa from '/public/icons/Lupa.svg';

export default function HeroSection() {
	return (
		<ContainerHero>
			<Header />
			<PersonTitle
				textGray='Decole sua carreira mais rápido com'
				textBlue={'mentorias individuais'}
			/>

			<p>
				Tenha acesso a mentorias personalizadas e <br /> gratuitas com
				profissionais renomados.
			</p>
			<ContainerInput>
				<div>
					<Image
						src={lupa}
						alt='Lupa'
					/>
					<input
						type='text'
						placeholder='Pesquisar por nome ou especialidade'
					/>
				</div>
				<ButtonPrimary text='Encontrar mentor' />
			</ContainerInput>
		</ContainerHero>
	);
}
