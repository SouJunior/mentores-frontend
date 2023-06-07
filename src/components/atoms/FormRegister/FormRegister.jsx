import FormButtonDescarta from '../FormButtonDescarta/formButtonDescarta';
import FormButtonConcluir from '../FormButtonConcluir/formButtonConcluir';
import { customStyles } from '@/utils/modalStyles';
import Image from 'next/image';
import { Formik, Field, Form } from 'formik';
import React, { useState } from 'react';
import {
	ContainerCadastro,
	ContainerForm,
	ContainerTerms,
	TxtTerms,
} from './style';
import InputForm from '../InputRegister';
import axios from 'axios';
import Modal from 'react-modal';
import registerSchema from '@/utils/registerSchema';
import RadioAgree from '../RadioAgree';
export default function FormRegister(props) {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [modalEmail, setOpenEmail] = useState(false);

	const [agree, setIsAgree] = useState(false);

	function handleOpenModal() {
		setIsOpen(true);
	}
	function handleCloseModal() {
		setIsOpen(false);
	}

	function handleModalEmail() {
		setOpenEmail(true);
	}
	function closeModalEmail() {
		setOpenEmail(false);
	}

	const handleSubmit = async (event, values, { resetForm }) => {
		event.preventDefault();
		try {
			const response = await axios.post(
				'https://mentores-backend.onrender.com/user',
				{
					fullName: values.name,
					email: values.email,
					dateOfBirth: values.dataBirthday,
					emailConfirm: values.confirmEmail,
					password: values.password,
					passwordConfirmation: values.confirmPassword,
				},
			);

			console.log(response.data);
			resetForm();
			handleModalEmail();
		} catch (error) {
			console.error(error);
		}
	};

	const initialValues = {
		name: '',
		email: '',
		dataBirthday: '',
		email: '',
		confirmEmail: '',
		password: '',
		confirmPassword: '',
	};

	return (
		<ContainerForm>
			<ContainerCadastro>
				<Formik
					initialValues={initialValues}
					validationSchema={registerSchema}
					onSubmit={handleSubmit}>
					<Form>
						<Image
							className='souj'
							src='logos/LogoSJ.svg'
							alt='logo'
							width={100}
							height={200}
						/>
						<p>
							<span className='asteristico'>*</span> Indica um campo obrigatório
						</p>
						<Field
							as={InputForm}
							type='text'
							name='name'
							label='Nome completo'
							placeholder='Preencha com seu nome'
						/>

						<Field
							as={InputForm}
							type='date'
							name='dataBirthday'
							label='Data de nascimento'
							placeholder='MM/DD/YYY'
						/>

						<Field
							as={InputForm}
							type='email'
							label='E-mail'
							name='email'
							placeholder='Preencha com o seu email'
						/>

						<Field
							as={InputForm}
							type='email'
							label='Confirmar E-mail'
							name='confirmEmail'
							placeholder='Confirme seu email'
						/>

						<Field
							as={InputForm}
							type='password'
							label='Senha'
							name='password'
							placeholder='*******'
						/>

						<Field
							as={InputForm}
							type='password'
							label='Confirmar Senha'
							name='confirmPassword'
							placeholder='******'
						/>
						<ContainerTerms>
							<RadioAgree
								checked={agree}
								onChange={(e) => setIsAgree(e.target.checked)}
							/>
							<TxtTerms className='termo'>
								Concordo com os{' '}
								<button
									className='termo-button'
									onClick={handleOpenModal}>
									Termos de uso
								</button>
								e{' '}
								<button className='termo-button'>
									Políticas de privacidade
								</button>{' '}
								do SouJunior.
							</TxtTerms>
							<Modal
								isOpen={modalIsOpen}
								onRequestClose={handleCloseModal}
								style={customStyles}>
								<h2>Teste</h2>
								<button onClick={handleCloseModal}>close</button>
								<div>Termos de uso</div>
							</Modal>
						</ContainerTerms>
						<FormButtonConcluir disabled={!agree} />
						<Modal
							isOpen={modalEmail}
							onRequestClose={!handleModalEmail}
							style={customStyles}>
							<button onClick={closeModalEmail}>X</button>
							<h1>Modal envio email</h1>
							<span>Aqui será o componente modal de confirmação de email!</span>
						</Modal>
						<FormButtonDescarta />
					</Form>
				</Formik>
			</ContainerCadastro>
		</ContainerForm>
	);
}
