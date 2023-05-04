import React from 'react';
import { ItemInvisible, ItemImage, ItemPrimary, ItemSecondary } from './style';
import Image from 'next/image';

export default function ItemHero({ type, image }) {
	if (type === 'invisible') {
		return <ItemInvisible />;
	}
	if (type === 'primary') {
		return <ItemPrimary />;
	}
	if (type === 'secondary') {
		return <ItemSecondary />;
	}
	if (type === 'image') {
		return (
			<ItemImage>
				<Image
					width={100}
					height={100}
					src={image}
					alt='Imagem de um Mentor'
					loading='eager'
				/>
			</ItemImage>
		);
	}
}
