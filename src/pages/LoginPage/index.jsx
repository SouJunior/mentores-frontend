import FormCard from '../../components/atoms/FormCard/formCard';
import { ContainerImage, ContainerLogin, MyImage } from '../../styles/pages/LoginStyles';

export default function LoginPage() {
	return (
		<ContainerLogin>
			<ContainerImage>
				<MyImage
					src='/images/BackgroundFigures.svg'
					alt='Figuras do Background'
				/>
			</ContainerImage>
			<FormCard />
		</ContainerLogin>
	);
}
