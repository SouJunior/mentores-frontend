import Image from 'next/image';
import EyeClose from '/public/icons/EyeClosed.svg';
import EyeOpen from '/public/icons/EyeDefault.svg';

export default function EyeComponent({ eye }) {
	return (
		<>
			{eye === false ? (
				<Image
					src={EyeOpen}
					alt='Olho'
					width={24}
					height={24}
				/>
			) : (
				<Image
					src={EyeClose}
					alt='Olho'
					width={24}
					height={24}
				/>
			)}
		</>
	);
}
