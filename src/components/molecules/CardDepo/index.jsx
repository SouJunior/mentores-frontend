import CardComponent from '@/components/atoms/CardComponent';
import Image from 'next/image';
import { GreatContainer, HeaderCardDepo } from './style';

export default function CardDepo({ mentor }) {
	return (
		<CardComponent backgroundColor={'#fdfdfd'}>
			<GreatContainer>
				<HeaderCardDepo>
					<Image
						src={mentor.image}
						alt={mentor.name}
						width={56}
						height={56}
					/>
					<div>
						<h4>{mentor.name}</h4>
						<h5>{mentor.role}</h5>
					</div>
				</HeaderCardDepo>
				<p>{mentor.description}</p>
			</GreatContainer>
		</CardComponent>
	);
}
