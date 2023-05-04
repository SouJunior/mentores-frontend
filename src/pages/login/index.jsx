import styles from './login.module.scss';
import FormCard from '../../components/atoms/FormCard/formCard';
import Image from 'next/image';


export default function LoginPage() {
	return (
		<div className={styles.backgroundImage}>
			<Image
				className={styles.figures}
				src='/images/BackgroundFigures.svg'
				alt='Figuras do Background'
				width={0}
				height={0}
			/>
			<FormCard />
		</div>
	);
}
