import InputLogin from '@/components/atoms/InputLogin';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardLoading from '../../../../public/images/loadingGif.gif';
import Checkbox from '../../atoms/Checkbox';
import { ContainerForm } from './style';
import Button from '@/components/atoms/Button';
import { setCookies } from 'cookies-next';

export default function FormCard(props) {
	const [loading, setLoading] = useState(false);
	const [formState, setFormState] = useState({
		email: '',
		password: '',
		errors: '',
	});
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [keepConnected, setKeepConnected] = useState('');
	const [countError, setCountError] = useState(0);
	const [disable, setDisable] = useState(false);
	const [toastMessage, setToastMessage] = useState(
		'Você digitou a senha incorretamente e será bloqueado após cinco tentativas. Para cadastrar um nova senha clique em "Esqueci a senha".',
	);
	const notify = () => {
		toast.error(toastMessage, {
			position: toast.POSITION.TOP_CENTER,
			toastId: 'customId',
		});
	};

	function validateForm() {
		if (!password || !email) {
			setFormState({
				...formState,
				errors: '*E-mail ou senha incorretos.',
			});
			setCountError(countError + 1);
			return;
		} else {
			return true;
		}
	}

	const handleSubmit = async (event) => {
		setLoading(true);
		event.preventDefault();

		if (validateForm()) {
			try {
				const response = await axios.post(
					'https://mentores-backend.onrender.com/auth/login',
					{
						email: email,
						password: password,
					},
				);
				if (keepConnected) {
					setCookies('U', response.data);
				}
				console.log(response.data);
				console.log('USUÁRIO LOGADO');
				setTimeout(() => {
					setLoading(false);
				}, 500);
			} catch (error) {
				console.log(error);

				console.log('ERRO AO FAZER O LOGIN');
				setFormState({ ...formState, errors: '*E-mail ou senha incorretos.' });
				setCountError(countError + 1);
				setTimeout(() => {
					setLoading(false);
				}, 500);
			}
		}
		setTimeout(() => {
			setLoading(false);
		}, 500);
	};

	useEffect(() => {
		if (countError > 3) {
			setToastMessage(
				'Por questões de segurança, bloqueamos sua conta após você ter atingido a quantidade máxima de tentativas de acesso. Para cadastrar uma nova senha, clique em "Esqueci minha senha".',
			);
			notify();
		}
		if (countError > 4) {
			notify();
			setDisable(true);
		}
	}, [formState, countError]);

	return (
		<>
			<ToastContainer
				autoClose={3500}
				hideProgressBar={true}
				closeOnClick
				theme='colored'
				style={{
					textAlign: 'justify',
					fontSize: '16px',
					width: '550px',
					lineHeight: '32px',
				}}
			/>
			<ContainerForm>
				<form onSubmit={handleSubmit}>
					<Image
						src='logos/LogoSouJunior.svg'
						alt='Logo SouJunior'
						width={264}
						height={40}
					/>

					<h2>Bem-vindo de volta</h2>

					<InputLogin
						error={formState.errors}
						key={'email'}
						type='email'
						value={email}
						setValue={setEmail}
						placeholder=''
						label='E-mail'
						id='emailID'
					/>
					<div style={{ position: 'relative' }}>
						<InputLogin
							error={formState.errors}
							key={'pass'}
							type='password'
							value={password}
							setValue={setPassword}
							placeholder=''
							label='Senha'
							id='passID'
						/>
						{formState.errors && !disable && <span>{formState.errors}</span>}
					</div>
					{disable && (
						<span>
							Seu acesso a conta continua bloqueado, pois você não redefiniu sua
							senha após as cinco tentativas de acesso incorretas. Por favor,
							clique em 'Esqueci minha senha' para realizar a recuperação
						</span>
					)}

					<div
						style={{
							position: 'relative',
							display: 'flex',
							justifyContent: 'space-between',
							marginTop: '16px',
						}}>
						<Checkbox
							value={keepConnected}
							setValue={setKeepConnected}
							id='connected'
							text='Me manter conectado'
						/>
						<a
							href='#'
							style={{ textDecoration: 'underline' }}>
							Esqueci a senha
						</a>
					</div>

					<Button
						disabled={disable}
						btnRole={'form'}
						content={
							loading ? (
								<Image
									alt='loading'
									src={CardLoading}
									width={24}
									height={24}
								/>
							) : (
								'Entrar'
							)
						}
					/>

					<p>
						Ainda não possui cadastro?{' '}
						<Link href='/Cadastro'>Cique aqui e cadastre-se</Link>
					</p>
				</form>
			</ContainerForm>
		</>
	);
}
