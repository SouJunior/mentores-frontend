import FormButtonDescarta from "../FormButtonDescarta/formButtonDescarta";
import FormButtonConcluir from "../FormButtonConcluir/formButtonConcluir";
import Image from "next/image";
import { Formik, Field, Form } from "formik";
import React, { useState } from "react";
import { ContainerCadastro, ContainerForm, ContainerTerms, TxtTerms } from "./style";
import InputForm from "../InputRegister";
import axios from "axios";
import Modal from "react-modal";
import registerSchema from "@/utils/registerSchema";

export default function FormCadastro(props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formik.isValid) {
      try {
        const response = await axios.post(
          "https://mentores-backend.onrender.com/user",
          {
            fullName: formik.values.name,
            email: formik.values.email,
            dateOfBirth: formik.values.dataBirthday,
            emailConfirm: formik.values.confirmEmail,
            password: formik.values.password,
            passwordConfirmation: formik.values.confirmPassword,
          }
        );

        console.log(response.data);
        console.log(formik.touched);
      } catch (error) {
        console.error(error);
      }
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

  const customStyles = {
    content: {
      top: "30%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      trasnform: "translate(-50%, -50%)",
    },
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
              placeholder="Preencha com seu nome"
            />

            <Field
              as={InputForm}
              type="date"
              name="dataBirthday"
              placeholder="MM/DD/YYY"
            />

            <Field
              as={InputForm}
              type="email"
              name="email"
              placeholder="Preencha com o seu email"
            />

            <Field
              as={InputForm}
              type="email"
              name="confirmEmail"
              placeholder="Confirme seu email"
            />

            <Field
              as={InputForm}
              type="password"
              name="password"
              placeholder="*******"
            />

            <Field
              as={InputForm}
              type="password"
              name="confirmPassword"
              placeholder="******"
            />
            <ContainerTerms>
            <input type="radio" />
            <TxtTerms className="termo">
              Concordo com os{" "}
              <button className="termo-button" onClick={handleOpenModal}>
                Termos de uso
              </button>
              e{" "}
              <button className="termo-button">Políticas de privacidade</button>{" "}
              do SouJunior.
            </TxtTerms>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={handleCloseModal}
              style={customStyles}
            >
              <h2>Teste</h2>
              <button onClick={handleCloseModal}>close</button>
              <div>Termos de uso</div>
            </Modal>
              </ContainerTerms>
            <FormButtonConcluir />
            <FormButtonDescarta />
          </Form>
        </Formik>
      </ContainerCadastro>
    </ContainerForm>
  );
}
