import { format, compareAsc } from 'date-fns'
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React, { useState } from 'react';
import { ContainerCadastro, ContainerForm, ContainerEye } from './style';
import InputForm from '../InputForm';
import axios from 'axios';
import Modal from 'react-modal';
import EyeComponent from '../InputSenha/EyeComponent';
import ModalText  from './Modal'
import FormButton from '../FormButton';

export default function FormCadastro(props, setPassword) {
	const [show, setShow] = useState(true);
	const [eye, setEye] = useState(true);
	const [modalIsOpen, setIsOpen] = useState(false);
	const [valueNome, setValueNome] = useState('');
	const [valueEmail, setValueEmail] = useState('');
	const [valueValidationEmail, setValueValidationEmail] = useState('');
	const [valuePassword, setValuePassword] = useState('');
	const [valueValidationPassword, setValueValidationPassword] = useState('');
	const [valuedate, setValueDate] = useState('');


	function toggleShow(e) {
		e.preventDefault();
		setEye(!eye);
		setShow(!show);
	}

	function handleOpenModal(ev){
		ev.preventDefault()
		setIsOpen(true)
	}
	function handleCloseModal(){
		setIsOpen(false)
	}
	const customStyles = {
		content: {
			borderRadius:'8px',
			padding:'0px',
			width:'400px',
			height:'400px',
			top:'20%',
			left:'35%',
			right:'auto',
			bottom:'auto',
			trasnform:'translate(-50%, -50%)',
			overflowY: 'scroll !important',
		},
		modalPai:{
			width:'100%',
			background:'#D7D9D7',
			padding:'32px',
			display:'flex',
			alignItens:'center',
			justifyContent:'center',
			flexDirection:'column',
			border:'1px solid red',
			gap:'8px'
		},
		div:{
			color:'#1165BA',
			fontSize:'14px',
			display:'flex',
			textAlign:'center',
			justifyContent:'center',
		},
		imagem:{
			margin:'0 auto'
		},
		modalFilho:{
			color:'#1165BA',
			fontSize:'14px',
			margin:'15px 0px',
		},
		fechar:{
			border:'1px solid #046AD0',
			width:'100%',
			color:'#046AD0',
			background:'#FFFFFF'
		}
	}

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
	function handleDateChange(prop){
		const myDate = new Date(prop);
		const newDate = format(myDate, 'yyyy-MM-dd');
		setValueDate(newDate)
	}
	

	const Email= {type:'email', placeholder:'  Preencha com seu e-mail', value:valueEmail, valueChange:handleEmailChange}
	const ValidationEmail= {type:'email', placeholder:'  Preencha com seu e-mail', value:valueValidationEmail, valueChange:handlValidationEmailChange}
	const Password = {type:'password', placeholder:'  ********', value:valuePassword, valueChange:handlePasswordChange}
	const ValidationPassword = {type:'password', placeholder:'  ********', value:valueValidationPassword, valueChange:handleValidationPasswordChange}
	const Name = {type:'text', placeholder:'  Preencha com seu nome', value:valueNome, valueChange:handleNomeChange}
	const DateForm = {type:'date', value:valuedate, valueChange: handleDateChange}
	const ButtonConcluir = {type:'submit', value:'Concluir', role:'primary'}
	const ButtonDescarta = {type:'submit', value:'Decarta', role:'secondary'}

	//Enviar dados pro back end
	
	const handleSubmit = async (event) => {
		event.preventDefault();
				const response = await axios.post(
					'https://mentores-backend.onrender.com/user',
					{
						fullName: Name.value,
						email: Email.value,
						dateOfBirth: DateForm.value,
						emailConfirm:ValidationEmail.value,
						password: Password.value,
						passwordConfirmation:ValidationPassword.value
					},
				);
				console.log(response.data);
			} 
		
	return (
	
		<ContainerForm>
			<ContainerCadastro>
				<form > 
				<Image
						className='souj'
						src='logos/LogoSJ.svg'
						alt='logo'
						width={241}
						height={36}
					/>
					<p><span className='asteristico'>*</span> Indica um campo obrigatório</p>
					<p>
						Nome completo<span className='asteristico'>*</span>
					</p>
					<div>
					<InputForm type={Name.type} placeholder={Name.placeholder} value={Name.value} valueChange={Name.valueChange} />
					</div>
					<p>
						Data de nascimento<span className='asteristico'>*</span>
					</p>
					<InputForm value={DateForm.value} type={DateForm.type} placeholder={DateForm.placeholder} valueChange={DateForm.valueChange}/>
					<p>
						E-mail<span className='asteristico'>*</span>
					</p>
					<InputForm type={Email.type} placeholder={Email.placeholder} value={Email.value} valueChange={Email.valueChange}  />

					<p>
						Confirma e-mail<span className='asteristico'>*</span>
					</p>
					<InputForm type={ValidationEmail.type} placeholder={ValidationEmail.placeholder} value={ValidationEmail.value} valueChange={ValidationEmail.valueChange}  />

					<p>
						Senha<span className='asteristico'>*</span>
					</p>
					<InputForm  placeholder={Password.placeholder} value={Password.value} valueChange={Password.valueChange} type={show === false ? 'text' : 'password'}
				onChange={(e) => setPassword(e.target.value)} />
					<ContainerEye>
					<button
						type='button'
						onClick={(e) => toggleShow(e)}>
						<EyeComponent eye={eye} />
					</button>
					</ContainerEye>
					<p>
						Confirmar senha<span className='asteristico'>*</span>
					</p>
					<InputForm  placeholder={ValidationPassword.placeholder} value={ValidationPassword.value} valueChange={ValidationPassword.valueChange} 	type={show === false ? 'text' : 'password'}/>					
					<input type="checkbox"/><span className='termo'>Concordo com os <button className='termo-button' onClick={handleOpenModal}>Termos de uso</button>e <button className='termo-button'>Políticas de privacidade</button> do SouJunior.</span>
						<Modal
						isOpen={modalIsOpen}
						onRequestClose={handleCloseModal}
						style={customStyles}
						>
						<div style={customStyles.modalPai}>
						<Image
						style={customStyles.imagem}
							src='logos/logoSj.svg'
							alt='logo'
							width={110}
							height={17}
						/>
						<h2 style={customStyles.div}>#MovimentoSouJunior</h2>
						</div>
						<div style={customStyles.modalFilho}>Termos e condições gerais de uso SouJunior </div>
						<ModalText/>
						<button onClick={handleCloseModal} style={customStyles.fechar}>Fechar</button>
						</Modal>
					<FormButton type={ButtonConcluir.type} value={ButtonConcluir.value} role={ButtonConcluir.role} onSubmit={handleSubmit}/>
					<FormButton type={ButtonDescarta.type} value={ButtonDescarta.value} role={ButtonDescarta.role}/> 
				</form>
				</ContainerCadastro>
			</ContainerForm>
	);
}
