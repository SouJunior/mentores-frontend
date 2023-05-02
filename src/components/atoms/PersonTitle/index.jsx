import React from 'react';
import { ContainerTitle } from './style';

export default function PersonTitle({textGray, textBlue}) {
	return (
		<ContainerTitle>
			<h1>
				{textGray}
				<br />
				<span>{textBlue}</span>
			</h1>
		</ContainerTitle>
	);
}
