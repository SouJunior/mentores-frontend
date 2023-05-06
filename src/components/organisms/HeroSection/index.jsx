import Button from '@/components/atoms/Button';
import PersonTitle from '@/components/atoms/PersonTitle';
import Header from '@/components/molecules/Header';
import ListItemsHero from '@/components/molecules/ListItemsHero';
import Image from 'next/image';
import { ContainerHero, ContainerInput, TextAnimated } from './style';
import lupa from '/public/icons/Lupa.svg';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function HeroSection() {
	const text = [
		'mentorias individuais',
		'mentorias personalizadas',
		'profissionais experientes',
	];
	const [textHero, setTextHero] = useState(text[0]);

	function textSwitch() {
		setTimeout(() => {
			if (textHero === text[0]) {
				setTextHero(text[1]);
			}
		}, 1500);

		setTimeout(() => {
			if (textHero === text[1]) {
				setTextHero(text[2]);
			}
		}, 1500);

		setTimeout(() => {
			if (textHero === text[2]) {
				setTextHero(text[0]);
			}
		}, 1500);
	}

	useEffect(() => {
		textSwitch();
	}, [textHero]);

	return (
		<ContainerHero>
			<Header />
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div>
					<AnimatePresence>
						<PersonTitle textGray={'Decole sua carreira mais rápido com'} />
						<TextAnimated
							as={motion.h3}
							key={textHero}
							transition={{ type: 'tween', duration: 0.3, ease: 'anticipate' }}
							initial={{ y: -15, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 25, opacity: 0 }}>
							{textHero}
						</TextAnimated>
					</AnimatePresence>
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
						<Button
							text='Encontrar mentor'
							btnRole={'primary'}
						/>
					</ContainerInput>
				</div>
				<ListItemsHero />
			</div>
		</ContainerHero>
	);
}
