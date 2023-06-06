
import { format, compareAsc } from "date-fns";
import FormButtonDescarta from "../FormButtonDescarta/formButtonDescarta";
import FormButtonConcluir from "../FormButtonConcluir/formButtonConcluir";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useState } from "react";
import {
  ContainerCadastro,
  ContainerForm,
  ContainerTerms,
  TxtTerms,
} from "./style";
import InputForm from "../InputForm";
import axios from "axios";
import ModalComponent from "../Modal";
import { Formik, Field, Form } from "formik";
import registerSchema from "@/utils/registerSchema";
import RadioAgree from "../RadioAgree";

export default function FormRegister(props) {
   const [modalIsOpen, setIsOpen] = useState(false);
  const [valueNome, setValueNome] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valueValidationEmail, setValueValidationEmail] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const [valueValidationPassword, setValueValidationPassword] = useState("");
  const [valuedate, setValueDate] = useState("");
  const [openTermos, setOpenTermos] = useState(false);
  const [openPoliticas, setOpenPoliticas] = useState(false);
  //const [modalIsOpen, setIsOpen] = useState(false);
  //const [modalEmail, setOpenEmail] = useState(false)

  const [agree, setIsAgree] = useState(false);
  const handleOpenTermos = () => setOpenTermos(true);
  const handleCloseTermos = () => setOpenTermos(false);
  const handleOpenPoliticas = () => setOpenPoliticas(true);
  const handleClosePoliticas = () => setOpenPoliticas(false);

  function handleNomeChange(prop) {
    setValueNome(prop);
    console.log(prop);
  }
  function handleEmailChange(prop) {
    setValueEmail(prop);
  }
  function handlValidationEmailChange(prop) {
    setValueValidationEmail(prop);
  }
  function handlePasswordChange(prop) {
    setValuePassword(prop);
  }
  function handleValidationPasswordChange(prop) {
    setValueValidationPassword(prop);
  }
  function handleDateChange(prop) {
    const myDate = new Date(prop);
    const newDate = format(myDate, "yyyy-MM-dd");
    setValueDate(newDate);
    console.log(newDate);
  }
  
    function handleOpenModal() {
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }

  function handleModalEmail(){
    setOpenEmail(true)
  }
  function closeModalEmail(){
    setOpenEmail(false)
  }


  const Email = {
    type: "email",
    placeholder: "Preencha com seu e-mail",
    value: valueEmail,
    valueChange: handleEmailChange,
  };
  const ValidationEmail = {
    type: "email",
    placeholder: "Preencha com seu e-mail",
    value: valueValidationEmail,
    valueChange: handlValidationEmailChange,
  };
  const Password = {
    type: "password",
    placeholder: "********",
    value: valuePassword,
    valueChange: handlePasswordChange,
  };
  const ValidationPassword = {
    type: "password",
    placeholder: "********",
    value: valueValidationPassword,
    valueChange: handleValidationPasswordChange,
  };
  const Name = {
    type: "text",
    placeholder: "Preencha com seu nome",
    value: valueNome,
    valueChange: handleNomeChange,
  };
  const DateForm = {
    type: "date",
    value: valuedate,
    placeholder: "ANO/MES/DIA",
    valueChange: handleDateChange,
  };

  //Enviar dados pro back end

    const handleSubmit = async (values, {resetForm}) => {
    event.preventDefault()
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
      resetForm()
      handleModalEmail()
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
            <span className="termo">
            Concordo com os{" "}
            <button
              type="button"
              className="termo-button"
              onClick={handleOpenTermos}
            >
              Termos de uso
            </button>
            e{" "}
            <button
              type="button"
              className="termo-button"
              onClick={handleOpenPoliticas}
            >
              Políticas de privacidade
            </button>{" "}
            do SouJunior.
          </span>

           <ModalComponent open={openTermos} onClose={handleCloseTermos}>
            <h2>Título do Modal Termos</h2>
            <p>Conteúdo do modal Termos</p>
          </ModalComponent>

          <ModalComponent open={openPoliticas} onClose={handleClosePoliticas}>
            <h2>Título do Modal Politicas</h2>
            <p>Conteúdo do modal Politicas</p>
          </ModalComponent>
             
            </ContainerTerms>
            <FormButtonConcluir disabled={!agree} />
           {/* <Modal
            isOpen={modalEmail}
            onRequestClose={!handleModalEmail}
          style={customStyles}
           >
             <button onClick={closeModalEmail}>X</button>
             <h1>Modal envio email</h1>
             <span>Aqui será o componente modal de confirmação de email!</span>
           </Modal> */}
            <FormButtonDescarta />
          </Form>
        </Formik>
      </ContainerCadastro>
    </ContainerForm>
  );
}
