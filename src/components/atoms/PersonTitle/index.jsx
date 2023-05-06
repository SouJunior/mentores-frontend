import React from 'react';
import { ContainerTitle } from './style';

export default function PersonTitle({ textGray }) {
	return (
		<ContainerTitle>
			<h2>{textGray}</h2>
		</ContainerTitle>
	);
}
