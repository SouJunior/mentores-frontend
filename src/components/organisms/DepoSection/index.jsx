import React from 'react';
import { ContainerDepo, ContainerBtn } from './style';
import Button from '@/components/atoms/Button';
import Link from 'next/link';
import { mentores } from '@/mockups/mentores';
import CardDepo from '@/components/molecules/CardDepo';
import MarqueeRolagem from '@/components/atoms/MarqueeRolagem';


export default function DepoSection() {

	return (
		<ContainerDepo>
			<h2>Seja um mentor</h2>

				<MarqueeRolagem
				pauseOnHover={true}
				speed={100}
				>
					{mentores.map((mentor) => {
						return (	
							<CardDepo key={mentor.name} mentor={mentor} />
							)
						})}
				</MarqueeRolagem>

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
