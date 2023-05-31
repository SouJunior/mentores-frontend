import { format, compareAsc } from "date-fns";
import FormButtonDescarta from "../FormButtonDescarta/formButtonDescarta";
import FormButtonConcluir from "../FormButtonConcluir/formButtonConcluir";
import Image from "next/image";

import React, { useState } from "react";
import { ContainerCadastro, ContainerForm } from "./style";
import InputForm from "../InputRegister";
import axios from "axios";
import Modal from "react-modal";

export default function FormCadastro(props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [valueNome, setValueNome] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valueValidationEmail, setValueValidationEmail] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const [valueValidationPassword, setValueValidationPassword] = useState("");
  const [valuedate, setValueDate] = useState("");

  function handleOpenModal() {
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: "30%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      trasnform: "translate(-50%, -50%)",
    },
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "https://mentores-backend.onrender.com/user",
      {
        fullName: Name.value,
        email: Email.value,
        dateOfBirth: DateForm.value,
        emailConfirm: ValidationEmail.value,
        password: Password.value,
        passwordConfirmation: ValidationPassword.value,
      }
    );
    console.log(response.data);
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
              type={Name.type}
              placeholder={Name.placeholder}
              value={Name.value}
              valueChange={Name.valueChange}
            />
          </div>
          <p>
            Data de nascimento<span className="asteristico">*</span>
          </p>
          <InputForm
            value={DateForm.value}
            type={DateForm.type}
            placeholder={DateForm.placeholder}
            valueChange={DateForm.valueChange}
          />
          <p>
            E-mail<span className="asteristico">*</span>
          </p>
          <InputForm
            type={Email.type}
            placeholder={Email.placeholder}
            value={Email.value}
            valueChange={Email.valueChange}
          />

          <p>
            Confirma e-mail<span className="asteristico">*</span>
          </p>
          <InputForm
            type={ValidationEmail.type}
            placeholder={ValidationEmail.placeholder}
            value={ValidationEmail.value}
            valueChange={ValidationEmail.valueChange}
          />

          <p>
            Senha<span className="asteristico">*</span>
          </p>
          <InputForm
            type={Password.type}
            placeholder={Password.placeholder}
            value={Password.value}
            valueChange={Password.valueChange}
          />

          <p>
            Confirmar senha<span className="asteristico">*</span>
          </p>
          <InputForm
            type={ValidationPassword.type}
            placeholder={ValidationPassword.placeholder}
            value={ValidationPassword.value}
            valueChange={ValidationPassword.valueChange}
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
