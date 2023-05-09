import React from 'react';
import { ContainerList } from './style';
import ItemHero from '@/components/atoms/ItemHero';
import mentor1 from '/public/images/homepage/mentor1.svg';
import mentor2 from '/public/images/homepage/mentor2.svg';
import mentor3 from '/public/images/homepage/mentor3.svg';

export default function ListItemsHero() {
	return (
		<ContainerList>
			<div>
				<ItemHero
					type={'invisible'}
					image={'none'}
				/>
				<ItemHero
					type={'image'}
					image={mentor1}
				/>
				<ItemHero
					type={'secondary'}
					image={'none'}
				/>
				<ItemHero
					type={'primary'}
					image={'none'}
				/>
			</div>
			<div>
				<ItemHero
					type={'secondary'}
					image={'none'}
				/>
				<ItemHero
					type={'primary'}
					image={'none'}
				/>
				<ItemHero
					type={'image'}
					image={mentor2}
				/>
				<ItemHero
					type={'primary'}
					image={'none'}
				/>
			</div>
			<div>
				<ItemHero
					type={'primary'}
					image={'none'}
				/>
				<ItemHero
					type={'image'}
					image={mentor3}
				/>
				<ItemHero
					type={'secondary'}
					image={'none'}
				/>
				<ItemHero
					type={'invisible'}
					image={'none'}
				/>
			</div>
		</ContainerList>
	);
}
