import styles from '../Cadastro/cadastro.module.scss';
import Image from 'next/image';
import FormInput from '../../components/atoms/FormInput/FormInput';

function Cadastro() {
	return (
		<main>
			<div>
				<FormInput />
			</div>
			<div className={styles.divlogo}>
				<Image
					className={styles.logo}
					src='/ilustracao.svg'
					alt='logo'
					width={0}
					height={0}
				/>
			</div>
		</main>
	);
}

export default Cadastro;
