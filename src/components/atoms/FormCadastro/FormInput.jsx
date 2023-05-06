import styles from '../FormCadastro/Cadastro.module.scss';
import FormDate from '../FormDate/formDate';
import FormButtonDescarta from '../FormButtonDescarta/formButtonDescarta';
import FormButtonConcluir from '../FormButtonConcluir/formButtonConcluir';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React, { useState } from 'react';
import { ContainerCadastro, ContainerForm } from './style';
import InputForm from '../InputForm';

export default function FormCadastro(props) {
	const [valueNome, setValueNome] = useState();
	const [valueEmail, setValueEmail] = useState();
	const [valueValidationEmail, setValueValidationEmail] = useState();
	const [valuePassword, setValuePassword] = useState();
	const [valueValidationPassword, setValueValidationPassword] = useState();
	const [user, setUser] = useState ({
		name:'',
		date:'',
		email:'',
		password:'',
	})
	const [status, setStatus] = useState ({
		type:'',
		message:'',
	})
	const [statusPassword, setStatusPassword] = useState ({
		type:'',
		message:'',
	})

	function handleNomeChange(prop){
		setValueNome(prop)
	}
	function handleEmailChange(prop){
		setValueEmail(prop)
	}
	function handlValidationEmailChange(prop){
		setValueValidationEmail(prop)
	}
	function handlePasswordChange(prop){
		setValuePassword(prop)
	}
	function handleValidationPasswordChange(prop){
		setValueValidationPassword(prop)
	}


	const Email= {type:'email', placeholder:'Preencha com seu e-mail', value:valueEmail, valueChange:handleEmailChange}
	const ValidationEmail= {type:'email', placeholder:'Preencha com seu e-mail', value:valueValidationEmail, valueChange:handlValidationEmailChange}
	const Password = {type:'password', placeholder:'********', value:valuePassword, valueChange:handlePasswordChange}
	const ValidationPassword = {type:'password', placeholder:'********', value:valueValidationPassword, valueChange:handleValidationPasswordChange}
	const Name = {type:'text', placeholder:'Preencha com seu nome', value:valueNome, valueChange:handleNomeChange}
	
	const schema = yup
	.object({
		email: yup.string().email().required('E-mail inválido'),
		password: yup.string().max(8).required('senha inválida'),
	})
	.required();

	//Enviar dados pro back end
	const addDados = async e => {
		e.preventDefault();
		
		if(!(await validate())) return;


		if(Savedados){
			setStatus({
				type:'sucess',
				message:'Dados Enviados com Sucesso!'
			});
		} else {
			setStatus({
				type:'error',
				message:'Dados não enviados'
			})
		}
	}
	async function validate(){
		let schema = yup.object().shape({
			email:yup.string('E-mail inválido.')
			.required('E-mail inválido.'),
			password:yup.string('senha inválida').required('senha inválida')
		});
		try {
			await schema.validate(user)
			return true;
		}catch(err){
			setStatus({
				type:'error',
				message:err.errors,
			});
			setStatusPassword({
				type:'error',
				message:err.errors,
			});
			return false;
		}
	}
	return (
	
		<ContainerForm>
			<ContainerCadastro>
				<form
					onSubmit={addDados}>
					<Image
						className={styles.souj}
						src='logos/LogoSJ.svg'
						alt='logo'
						width={100}
						height={200}
					/>
					<p>
						Nome completo<span className={styles.asteristico}>*</span>
					</p>
					<div>
					<InputForm type={Name.type} placeholder={Name.placeholder} value={Name.value} valueChange={Name.valueChange} />
					</div>
					<p>
						Data de nascimento<span className={styles.asteristico}>*</span>
					</p>
					<FormDate />
					<p>
						E-mail<span className={styles.asteristico}>*</span>
					</p>
					<InputForm type={Email.type} placeholder={Email.placeholder} value={Email.value} valueChange={Email.valueChange} />
					{status.type === 'sucess' ? <span className={styles.error}>{status.message}</span>:""}
					{status.type === 'error' ? <span className={styles.error}>{status.message}</span>:""}
					<p>
						Confirma e-mail<span className={styles.asteristico}>*</span>
					</p>
					<InputForm type={ValidationEmail.type} placeholder={ValidationEmail.placeholder} value={ValidationEmail.value} valueChange={ValidationEmail.valueChange}/>
					{status.type === 'sucess' ? <span className={styles.error}>{status.message}</span>:""}
					{status.type === 'error' ? <span className={styles.error}>{status.message}</span>:""}
					<p>
						Senha<span className={styles.asteristico}>*</span>
					</p>
					<InputForm type={Password.type} placeholder={Password.placeholder} value={Password.value} valueChange={Password.valueChange} />
					{status.type === 'sucess' ? <span className={styles.error}>{status.message}</span>:""}
					{status.type === 'error' ? <span className={styles.error}>{status.message}</span>:""}
					<p>
						Confirmar senha<span className={styles.asteristico}>*</span>
					</p>
					<InputForm type={ValidationPassword.type} placeholder={ValidationPassword.placeholder} value={ValidationPassword.value} valueChange={ValidationPassword.valueChange}/>			
					{statusPassword.type === 'sucess' ? <span className={styles.error}>{status.message}</span>:""}
					{statusPassword.type === 'error' ? <span className={styles.error}>{status.message}</span>:""}
					<FormButtonConcluir />
					<FormButtonDescarta />
				</form>
				</ContainerCadastro>
			</ContainerForm>
	);
}
