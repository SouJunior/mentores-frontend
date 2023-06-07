import FormButtonDescarta from "../FormButtonDescarta/formButtonDescarta";
import FormButtonConcluir from "../FormButtonConcluir/formButtonConcluir";
import { customStyles } from "@/utils/modalStyles";
import Image from "next/image";
import { Formik, Field, Form } from "formik";
import React, { useState } from "react";
import {
  ContainerCadastro,
  ContainerForm,
  ContainerTerms,
  ModalBox,
  ModalBoxParagrafo,
  ModalBoxSubTitulo,
  ModalBoxTitulo,
  ModalHash,
  ModalLogo,
  TxtTerms,
} from "./style";
import InputForm from "../InputForm";
import axios from "axios";
import Modal from "react-modal";
import registerSchema from "@/utils/registerSchema";
import RadioAgree from "../RadioAgree";
import ModalComponent from "../Modal";
import { Politicas, Termos } from "./Text";

export default function FormRegister(props) {
  const [openTermos, setOpenTermos] = useState(false);
  const [openPoliticas, setOpenPoliticas] = useState(false);
  const [agree, setIsAgree] = useState(false);

  const handleOpenTermos = () => setOpenTermos(true);
  const handleCloseTermos = () => setOpenTermos(false);
  const handleOpenPoliticas = () => setOpenPoliticas(true);
  const handleClosePoliticas = () => setOpenPoliticas(false);

  const handleModalEmail = () => setOpenEmail(true);
  const closeModalEmail = () => setOpenEmail(false);

  const handleSubmit = async (event, values, { resetForm }) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://mentores-backend.onrender.com/user",
        {
          fullName: values.name,
          email: values.email,
          dateOfBirth: values.dataBirthday,
          emailConfirm: values.confirmEmail,
          password: values.password,
          passwordConfirmation: values.confirmPassword,
        }
      );

      console.log(response.data);
      resetForm();
      handleModalEmail();
    } catch (error) {
      console.error(error);
    }
  };

  const initialValues = {
    name: "",
    email: "",
    dataBirthday: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <ContainerForm>
      <ContainerCadastro>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Image
              className="souj"
              src="logos/LogoSJ.svg"
              alt="logo"
              width={100}
              height={200}
            />
            <p>
              <span className="asteristico">*</span> Indica um campo obrigatório
            </p>
            <Field
              as={InputForm}
              type="text"
              name="name"
              label="Nome completo"
              placeholder="Preencha com seu nome"
            />

            <Field
              as={InputForm}
              type="date"
              name="dataBirthday"
              label="Data de nascimento"
              placeholder="MM/DD/YYY"
            />

            <Field
              as={InputForm}
              type="email"
              label="E-mail"
              name="email"
              placeholder="Preencha com o seu email"
            />

            <Field
              as={InputForm}
              type="email"
              label="Confirmar E-mail"
              name="confirmEmail"
              placeholder="Confirme seu email"
            />

            <Field
              as={InputForm}
              type="password"
              label="Senha"
              name="password"
              placeholder="*******"
            />

            <Field
              as={InputForm}
              type="password"
              label="Confirmar Senha"
              name="confirmPassword"
              placeholder="******"
            />
            <ContainerTerms>
              <RadioAgree
                checked={agree}
                onChange={(e) => setIsAgree(e.target.checked)}
              />
              <TxtTerms className="termo">
                Concordo com os{" "}
                <button
                  className="termo-button"
                  onClick={handleOpenTermos}
                  type="button"
                >
                  Termos de uso
                </button>
                e{" "}
                <button
                  className="termo-button"
                  onClick={handleOpenPoliticas}
                  type="button"
                >
                  Políticas de privacidade
                </button>{" "}
                do SouJunior.
              </TxtTerms>
            </ContainerTerms>
            <FormButtonConcluir disabled={!agree} />

            <ModalComponent
              open={openTermos}
              onClose={handleCloseTermos}
              height={"600px"}
            >
              <ModalLogo src="logos/LogoSJ.svg" />
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
              height={"600px"}
            >
              <ModalLogo src="logos/LogoSJ.svg" />
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
            <FormButtonDescarta />
          </Form>
        </Formik>
      </ContainerCadastro>
    </ContainerForm>
  );
}
