import Button from '@/components/atoms/Button';
import PersonTitle from '@/components/atoms/PersonTitle';
import Header from '@/components/molecules/Header';
import ListItemsHero from '@/components/molecules/ListItemsHero';
import Image from 'next/image';
import { ContainerHero, ContainerInput } from './style';
import lupa from '/public/icons/Lupa.svg';

export default function HeroSection() {
	return (
		<ContainerHero>
			<Header />
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div>
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
