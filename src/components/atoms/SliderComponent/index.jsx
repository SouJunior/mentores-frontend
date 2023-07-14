import Carousel from 'better-react-carousel';
import React from 'react';
import { ArrowLeft, ArrowRight } from './style';
const SliderComponent = ({
	children,
	cols,
	rows,
	autoplay,
	gap,
	arrowLeft,
	arrowRight,
}) => {
	return (
		<Carousel
			cols={cols}
			rows={rows}
			loop
			autoplay={autoplay}
			gap={gap}
			showDots={false}
			arrowRight={({ onClick }) =>
				arrowRight && <ArrowRight onClick={onClick}>&#10095;</ArrowRight>
			}
			arrowLeft={({ onClick }) =>
				arrowLeft && <ArrowLeft onClick={onClick}>&#10094;</ArrowLeft>
			}>
			{children}
		</Carousel>
	);
};

export default SliderComponent;

