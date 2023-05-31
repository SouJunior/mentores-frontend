import FormButtonDescarta from "../FormButtonDescarta/formButtonDescarta";
import FormButtonConcluir from "../FormButtonConcluir/formButtonConcluir";
import Image from "next/image";
import { useFormik } from "formik";
import React, { useState } from "react";
import { ContainerCadastro, ContainerForm } from "./style";
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
		  'https://mentores-backend.onrender.com/user',
		  {
			fullName: formik.values.name,
			email: formik.values.email,
			dateOfBirth: formik.values.dataBirthday,
			emailConfirm: formik.values.confirmEmail,
			password: formik.values.password,
			passwordConfirmation: formik.values.confirmPassword
		  }
		);
  
		console.log(response.data);
	  } catch (error) {
		console.error(error);
	  }
	}
  };
  

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      dataBirthday: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: handleSubmit,
  });
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
        <form onSubmit={handleSubmit}>
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
          <p>
            Nome completo<span className="asteristico">*</span>
          </p>
          <div>
            <InputForm
              type={"text"}
              name={"name"}
              placeholder={"Preencha com seu nome"}
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && formik.errors.name}
            />
          </div>
          <p>
            Data de nascimento<span className="asteristico">*</span>
          </p>
          <InputForm
            name={"dataBirthday"}
            value={formik.values.dataBirthday}
            type={"date"}
            placeholder={"MM/DD/YYY"}
            onChange={formik.handleChange}
          />
          <p>
            E-mail<span className="asteristico">*</span>
          </p>
          <InputForm
            name={"email"}
            type={"email"}
            placeholder={"Preencha com o seu email"}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && formik.errors.email}
          />

          <p>
            Confirma e-mail<span className="asteristico">*</span>
          </p>
          <InputForm
            name={"confirmEmail"}
            type={"email"}
            placeholder={"Confirme seu email"}
            value={formik.values.confirmEmail}
            onChange={formik.handleChange}
            error={formik.touched.password && formik.errors.password}
          />

          <p>
            Senha<span className="asteristico">*</span>
          </p>
          <InputForm
            name={"password"}
            type={"password"}
            placeholder={"*******"}
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password && (
            <p>{formik.errors.password}</p>
          )}

          <p>
            Confirmar senha<span className="asteristico">*</span>
          </p>
          <InputForm
            name={"confirmPassword"}
            type={"password"}
            placeholder={"******"}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          <input type="radio" />
          <span className="termo">
            Concordo com os{" "}
            <button className="termo-button" onClick={handleOpenModal}>
              Termos de uso
            </button>
            e <button className="termo-button">Políticas de privacidade</button>{" "}
            do SouJunior.
          </span>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            style={customStyles}
          >
            <h2>Teste</h2>
            <button onClick={handleCloseModal}>close</button>
            <div>Termos de uso</div>
          </Modal>
          <FormButtonConcluir />
          <FormButtonDescarta />
        </form>
      </ContainerCadastro>
    </ContainerForm>
  );
}
