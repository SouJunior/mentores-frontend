import Checkbox from "@/components/atoms/Checkbox";
import EyeComponent from "@/components/atoms/EyeComponent";
import InfoTooltip from "@/components/atoms/InfoTooltip";
import ModalEmail from "@/components/molecules/ModalEmail";
import { initialValues, registerSchema } from "@/utils/registerSchema";
import axios from "axios";
import { Field, Form, FormikProvider, useFormik } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../../atoms/Button";
import InputForm from "../../atoms/InputForm";
import ModalCancel from "../ModalCancel";
import ModalPoliticas from "../ModalPoliticas";
import ModalTerms from "../ModalTerms";
import {
  ContainerBtn,
  ContainerCadastro,
  ContainerForm,
  ContainerTerms,
  TxtTerms,
} from "./style";
export default function FormRegister(props) {
  const [openTermos, setOpenTermos] = useState(false);
  const [openPoliticas, setOpenPoliticas] = useState(false);
  const [openModalCancel, setOpenModalCancel] = useState(false);
  const [agree, setIsAgree] = useState(false);
  const [concluidoDesabilitado, setIsConcluidoDesabilitado] = useState(true);
  const [openEmail, setOpenEmail] = useState(false);
  const [show, setShow] = useState(true);
  const [eye, setEye] = useState(true);
  const [showConfirm, setShowConfirm] = useState(true);
  const [eyeConfirm, setEyeConfirm] = useState(true);

  const handleOpenTermos = () => setOpenTermos(true);
  const handleCloseTermos = () => setOpenTermos(false);
  const handleOpenPoliticas = () => setOpenPoliticas(true);
  const handleClosePoliticas = () => setOpenPoliticas(false);
  const handleModalEmail = () => setOpenEmail(true);
  const handleModalCancel = () => setOpenModalCancel(true);
  const closeModalEmail = () => setOpenEmail(false);
  const closeModalCancel = () => setOpenModalCancel(false);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setEye(!eye);
    setShow(!show);
  };

  const handleConfirmPassword = (e) => {
    e.preventDefault();
    setEyeConfirm(!eyeConfirm);
    setShowConfirm(!showConfirm);
  };

  const handleSubmit = async (values, { resetForm }) => {
    event.preventDefault();
    handleModalEmail();
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
      console.log("CADASTRADO");
      resetForm();
      handleModalEmail();
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: registerSchema,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    if (agree && formik.isValid && Object.keys(formik.touched).length > 0) {
      setIsConcluidoDesabilitado(false)
    } else {
      setIsConcluidoDesabilitado(true)
    }
  }, [agree, formik.isValid, formik.touched]);
  

  return (
    <ContainerForm>
      <ContainerCadastro>
        <FormikProvider value={formik}>
          <Form>
            <Image
              className="souj"
              src="logos/LogoSJ.svg"
              alt="logo"
              width={240}
              height={36}
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
              placeholder="DD/MM/YYY"
              onKeyDown={(event) => event.preventDefault()}
            />

            <Field
              as={InputForm}
              type="email"
              label="E-mail"
              name="email"
              placeholder="Preencha com o seu e-mail"
            />

            <Field
              as={InputForm}
              type="email"
              label="Confirmar E-mail"
              name="confirmEmail"
              placeholder="Confirme seu e-mail"
            />
            <InfoTooltip />
            <EyeComponent
              onClick={(e) => handleShowPassword(e)}
              eye={eye}
              size={20}
              left="410px"
              marginTop="23px"
              color={"#5D5F5D"}
            />
            <Field
              as={InputForm}
              type={show ? "password" : "text"}
              label="Senha"
              name="password"
              placeholder="********"
            />
            <EyeComponent
              onClick={(e) => handleConfirmPassword(e)}
              eye={eyeConfirm}
              size={20}
              left={"410px"}
              marginTop="23px"
              color={"#5D5F5D"}
            />

            <Field
              as={InputForm}
              type={showConfirm ? "password" : "text"}
              label="Confirmar Senha"
              name="confirmPassword"
              placeholder="********"
            />
            <ContainerTerms>
              <Checkbox setValue={setIsAgree} value={agree} />
              <TxtTerms>
                Concordo com os{" "}
                <Button
                  content={"Termos de uso"}
                  btnRole={"unstyled"}
                  onClick={handleOpenTermos}
                />{" "}
                e{" "}
                <Button
                  btnRole={"unstyled"}
                  content={"	Políticas de privacidade"}
                  onClick={handleOpenPoliticas}
                />{" "}
                do SouJunior.
              </TxtTerms>
            </ContainerTerms>

            <ModalTerms
              open={openTermos}
              onClose={handleCloseTermos}
              height={"590px"}
              width={"600px"}
            />

            <ModalPoliticas
              open={openPoliticas}
              onClose={handleClosePoliticas}
              height={"590px"}
              width={"600px"}
            />

            <ModalEmail
              open={openEmail}
              onClose={closeModalEmail}
              height={"730px"}
            />
            <ContainerBtn>
              <Button btnRole={"form"} content={"Concluir"} disabled={concluidoDesabilitado} />

              <Button
                btnRole={"formSecondary"}
                content={"Cancelar"}
                onClick={handleModalCancel}
              />
            </ContainerBtn>

            <ModalCancel
              open={openModalCancel}
              width={"400px"}
              height={"216px"}
              bgColor={"#fff"}
              onClose={closeModalCancel}
            />
          </Form>
        </FormikProvider>
      </ContainerCadastro>
    </ContainerForm>
  );
}
