import ItemHero from '@/components/atoms/ItemHero';
import { ContainerList } from './style';
import mentor1Png from '/public/images/homepage/heroSection/mentor1-png.png';
import mentor2Png from '/public/images/homepage/heroSection/mentor2-png.png';
import mentor3Png from '/public/images/homepage/heroSection/mentor3-png.png';

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
					image={mentor1Png}
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
					image={mentor2Png}
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
					image={mentor3Png}
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
