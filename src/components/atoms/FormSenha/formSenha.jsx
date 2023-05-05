import styles from '../FormSenha/FormSenha.module.scss';

export default function FormSenha() {
	return (
		<div className={styles.botoes}>
			<input
				className={styles.inputs}
				placeholder='  xxxxxxxxx'
				type='password'></input>
		</div>
	);
}
