import styles from './formCard.module.scss';
import Image from 'next/image';
import Checkbox from '../Checkbox/checkbox';
import InputSenha from '../InputSenha/inputSenha';
import InputEmail from '../InputEmail/inputEmail';
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardLoading from '../../../../public/images/loadingGif.gif'


export default function FormCard(props) {
	const notify = () => {
		toast.error(
			"*E-mail ou senha incorretos.",
			{
				position: toast.POSITION.TOP_CENTER,
				toastId: 'customId',
			},
		);
	};


	const [loading, setLoading] = useState(false)
	const [formState, setFormState] = useState({
		email: '',
		password: '',
		errors: {},
	});
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [formErrors, setFormErrors] = useState({});

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
		setFormState({
			...formState,
			email: event.target.value,
			errors: {
				...formState.errors,
				email: '',
			},
		});
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
		setFormState({
			...formState,
			password: event.target.value,
			errors: {
				...formState.errors,
				password: '',
			},
		});
	};

	const validateForm = () => {
		let errors = {};
		if (!password) {
			errors.password = '*E-mail ou senha incorretos.';
			notify();
		}
		setFormState({
			...formState,
			errors: errors,
		});
		return Object.keys(errors).length === 0;
	};

	const handleSubmit = async (event) => {
		setLoading(true);
		event.preventDefault();
		if (validateForm()) {
			try {
				setTimeout(()=>{
					setLoading(false);
				},500)
				const response = await axios.post(
					'https://mentores-backend.onrender.com/auth/login',
					{
						email: email,
						password: password,
					},
				);
				console.log(response.data);
			} catch (error) {
				setTimeout(()=>{
					setLoading(false);
				},500)
				console.error(error.response.data);
				setFormErrors({ ...formErrors, password: error.response.data.message });
				notify();
			}
		}
		setTimeout(()=>{
			setLoading(false);
			console.log(loading)
		},500)
	};

	return (
		<div>
			<ToastContainer
				autoClose={9000}
				hideProgressBar={true}
				closeOnClick
				theme='colored'
				style={{
					textAlign: 'justify',
					fontSize: '16px',
				}}
			/>
			<form
				className={styles.formCard}
				onSubmit={handleSubmit}>
				<Image
					className={styles.logo}
					src='logos/LogoSouJunior.svg'
					alt='Logo SouJunior'
					width={0}
					height={0}
				/>

				<h1 className={styles.titulo}>Bem-vindo de volta</h1>

				<h2 className={styles.texto}>E-mail</h2>
				<InputEmail
					setEmail={setEmail}
					email={email}
					onChange={handleEmailChange}
					className={formState.errors.email ? styles['input-error'] : ''}
				/>

				<h2 className={styles.texto}>Senha</h2>
				<InputSenha
					setPassword={setPassword}
					password={password}
					onChange={handlePasswordChange}
					className={formState.errors.password ? styles['input-error'] : ''}
				/>
				{formErrors.password && (
					<span className={styles.error}>{formErrors.password}</span>
				)}
				<label>
					<Checkbox />
					<Link
						href='#'
						className={styles.link}>
						Esqueci a senha
					</Link>
				</label>

				<button
					className={styles.botao}
					type='submit'
					>
					
					{loading ? <Image style={{scale:1.2}} alt='loading' src={CardLoading} width={24} height={24}/>: 'Entrar'}
				</button>

				<p className={styles.texto}>
					Ainda não possui cadastro?{' '}
					<Link
						href='/Cadastro'
						className={styles.link}>
						Cique aqui e cadastre-se
					</Link>
				</p>
			</form>
		</div>
	);
}
