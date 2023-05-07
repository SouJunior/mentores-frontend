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
	const [errorEmail, setErrorEmail] = useState("");
	const [errorPassword, setErrorPassword] = useState("");
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
		setErrorEmail("");
	}
	function handlValidationEmailChange(prop){
		setValueValidationEmail(prop)
		setErrorEmail("");
	}
	function handlePasswordChange(prop){
		setValuePassword(prop)
		setErrorPassword("");
	}
	function handleValidationPasswordChange(prop){
		setValueValidationPassword(prop)
		setErrorPassword("");
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
		const schema = yup.object().shape({
		  email: yup.string().email("E-mail inválido.").required("E-mail obrigatório."),
		  password: yup.string().max(8, "Senha deve ter no máximo 8 caracteres").required("Senha obrigatória.")
		});
		try {
		  await schema.validate(user);
		  return true;
		} catch (err) {
		  setErrorEmail(err.errors.includes("E-mail obrigatório.") ? "E-mail obrigatório." : "E-mail inválido.");
		  setErrorPassword(err.errors.includes("Senha obrigatória.") ? "Senha obrigatória." : "Senha deve ter no máximo 8 caracteres");
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
					<InputForm type={Email.type} placeholder={Email.placeholder} value={Email.value} valueChange={Email.valueChange} error={errorEmail} />
					{status.type === 'error' && emailError && <p>{emailError}</p>}
					<p>
						Confirma e-mail<span className={styles.asteristico}>*</span>
					</p>
					<InputForm type={ValidationEmail.type} placeholder={ValidationEmail.placeholder} value={ValidationEmail.value} valueChange={ValidationEmail.valueChange}  error={errorEmail}/>
					{status.type === 'error' && emailValidationError && <p>{emailValidationError}</p>}
					<p>
						Senha<span className={styles.asteristico}>*</span>
					</p>
					<InputForm type={Password.type} placeholder={Password.placeholder} value={Password.value} valueChange={Password.valueChange} error={errorPassword} />
					{statusPassword.type === 'error' && passwordError && <p>{passwordError}</p>}
					<p>
						Confirmar senha<span className={styles.asteristico}>*</span>
					</p>
					<InputForm type={ValidationPassword.type} placeholder={ValidationPassword.placeholder} value={ValidationPassword.value} valueChange={ValidationPassword.valueChange} error={errorPassword}/>			
					{statusPassword.type === 'error' && passwordError && <p>{passwordError}</p>}
					<FormButtonConcluir />
					<FormButtonDescarta />
				</form>
				</ContainerCadastro>
			</ContainerForm>
	);
}
