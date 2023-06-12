import { registerSchema, initialValues } from '@/utils/registerSchema';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import Image from 'next/image';
import { useState } from 'react';
import Button from '../Button';
import InputForm from '../InputForm';
import ModalComponent from '../Modal';
import RadioAgree from '../RadioAgree';
import ModalEmail from '@/components/molecules/ModalEmail';
import { Politicas, Termos } from './Text';
import {
	ContainerCadastro,
	ContainerBtn,
	ContainerForm,
	ContainerTerms,
	ModalBox,
	ModalBoxParagrafo,
	ModalBoxSubTitulo,
	ModalBoxTitulo,
	ModalHash,
	ModalLogo,
	TxtTerms,
} from './style';
export default function FormRegister(props) {
	const [openTermos, setOpenTermos] = useState(false);
	const [openPoliticas, setOpenPoliticas] = useState(false);
	const [openDescard, setOpenDiscard] = useState(false);
	const [agree, setIsAgree] = useState(false);
	const [openEmail, setOpenEmail] = useState(false);

	const handleOpenTermos = () => setOpenTermos(true);
	const handleCloseTermos = () => setOpenTermos(false);
	const handleOpenPoliticas = () => setOpenPoliticas(true);
	const handleClosePoliticas = () => setOpenPoliticas(false);
	const handleModalEmail = () => setOpenEmail(true);
	const closeModalEmail = () => setOpenEmail(false);

	const handleSubmit = async (values, { resetForm }) => {
		event.preventDefault();
		handleModalEmail();
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
							width={240}
							height={36}
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
							placeholder='********'
						/>

						<Field
							as={InputForm}
							type='password'
							label='Confirmar Senha'
							name='confirmPassword'
							placeholder='********'
						/>
						<ContainerTerms>
							<RadioAgree
								checked={agree}
								onChange={(e) => setIsAgree(e.target.checked)}
							/>
							<TxtTerms>
								Concordo com os{' '}
								<Button
									content={'Termos de uso'}
									btnRole={'unstyled'}
									onClick={handleOpenTermos}
								/>{' '}
								e{' '}
								<Button
									btnRole={'unstyled'}
									content={'	Políticas de privacidade'}
									onClick={handleOpenPoliticas}
								/>{' '}
								do SouJunior.
							</TxtTerms>
						</ContainerTerms>

						<ModalComponent
							open={openTermos}
							onClose={handleCloseTermos}
							height={'600px'}>
							<ModalLogo src='logos/LogoSJ.svg' />
							<ModalHash>#MovimentoSouJunior</ModalHash>
							<ModalBox>
								<ModalBoxTitulo>{Termos.titulo}</ModalBoxTitulo>
								<ModalBoxParagrafo>
									{Termos.paragrafoPrincipal}
								</ModalBoxParagrafo>
								<ModalBoxSubTitulo>{Termos.subtitulo1}</ModalBoxSubTitulo>
								{Termos.paragrafosTermos.map((paragrafo) => (
									<ModalBoxParagrafo key={paragrafo}>
										{paragrafo}
									</ModalBoxParagrafo>
								))}
								<ModalBoxSubTitulo>{Termos.subtitulo2}</ModalBoxSubTitulo>
								{Termos.paragrafosIndenizacao.map((paragrafo) => (
									<ModalBoxParagrafo key={paragrafo}>
										{paragrafo}
									</ModalBoxParagrafo>
								))}
								<ModalBoxSubTitulo>{Termos.subtitulo3}</ModalBoxSubTitulo>
								{Termos.paragrafosDisposicoes.map((paragrafo) => (
									<ModalBoxParagrafo key={paragrafo}>
										{paragrafo}
									</ModalBoxParagrafo>
								))}
								<ModalBoxParagrafo>{Termos.duvida}</ModalBoxParagrafo>
							</ModalBox>
						</ModalComponent>

						<ModalComponent
							open={openPoliticas}
							onClose={handleClosePoliticas}
							height={'600px'}>
							<ModalLogo src='logos/LogoSJ.svg' />
							<ModalHash>#MovimentoSouJunior</ModalHash>
							<ModalBox>
								<ModalBoxTitulo>{Termos.titulo}</ModalBoxTitulo>
								{Politicas.paragrafos.map((paragrafo) => (
									<ModalBoxParagrafo key={paragrafo}>
										{paragrafo}
									</ModalBoxParagrafo>
								))}
								<ModalBoxSubTitulo>{Politicas.subtitulo1}</ModalBoxSubTitulo>
								{Politicas.cookies.map((paragrafo) => (
									<ModalBoxParagrafo key={paragrafo}>
										{paragrafo}
									</ModalBoxParagrafo>
								))}
								<ModalBoxSubTitulo>{Politicas.subtitulo2}</ModalBoxSubTitulo>
								{Politicas.alternativas.map((paragrafo) => (
									<ModalBoxParagrafo key={paragrafo}>
										{paragrafo}
									</ModalBoxParagrafo>
								))}
								<ModalBoxSubTitulo>{Politicas.subtitulo3}</ModalBoxSubTitulo>
								<ModalBoxParagrafo>{Politicas.maisInfos}</ModalBoxParagrafo>
							</ModalBox>
						</ModalComponent>

						<ModalEmail
							open={openEmail}
							onClose={closeModalEmail}
							height={'730px'}
						/>
						<ContainerBtn>
							<Button
								btnRole={'form'}
								content={'Concluir'}
								disabled={!agree}
							/>

							<Button
								btnRole={'formSecondary'}
								content={'Cancelar'}
								onClick={() => setOpenDiscard(true)}
							/>
						</ContainerBtn>
						{openDescard && (
							<p style={{ position: 'absolute' }}>
								Espaço reservado para modal de cancelamento de cadastro do
								usário
							</p>
						)}
					</Form>
				</Formik>
			</ContainerCadastro>
		</ContainerForm>
	);
}
