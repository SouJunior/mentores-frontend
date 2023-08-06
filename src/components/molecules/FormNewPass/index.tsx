import { Field, Form, FormikProvider, useFormik } from "formik";
import { InputForm } from "@/components/atoms/InputForm";
import { Button } from "@/components/atoms/Button";
import { Eye } from "@/components/atoms/Eye";
import { registerSchema } from "@/utils/registerSchema";
import souJuniorLogoImg from "@/assets/logos/sou-junior.svg";
import Image from "next/image";
import Link from "next/link";
import { useState, MouseEvent, KeyboardEvent } from "react";
import { ContainerForm, FormWrapper, MessagesContainer } from "./styled";

export default function FormNewPass() {
  const [show, setShow] = useState(true);
  const [eye, setEye] = useState(true);
  const [showConfirm, setShowConfirm] = useState(true);
  const [eyeConfirm, setEyeConfirm] = useState(true);

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const handleShowPassword = (
    e: MouseEvent<HTMLElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    setEye(!eye);
    setShow(!show);
  };

  const handleConfirmPassword = (
    e: MouseEvent<HTMLElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    setEyeConfirm(!eyeConfirm);
    setShowConfirm(!showConfirm);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema:registerSchema,
    onSubmit: async (values, formikHelpers) => {
      const { password, confirmPassword } = values;

      try {
        console.log(password, confirmPassword);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <ContainerForm>
      <FormWrapper>
        <FormikProvider value={formik}>
          <Form>
            <Image src={souJuniorLogoImg} alt="logo" width={240} height={36} />
            <MessagesContainer>
              <p>Nova Senha</p>
              <span>
                Preencha os campos abaixo com sua nova senha e confirme-a.
              </span>
            </MessagesContainer>
            <Eye
              onClick={(e) => handleShowPassword(e)}
              eye={eye}
              size={20}
              left={850}
              paddingTop={25}
              color={"#5D5F5D"}
            />
            <Field
              as={InputForm}
              type={show ? "password" : "text"}
              name="password"
              label="Nova senha"
              placeholder="*******"
              showAsterisk={false}
            />
              <Eye
              onClick={(e) => handleConfirmPassword(e)}
              eye={eyeConfirm}
              size={20}
              left={850}
              paddingTop={20}
              color={"#5D5F5D"}
            />
            <Field
              as={InputForm}
              type={showConfirm ? "password" : "text"}
              name="confirmPassword"
              label="Confirmar senha"
              placeholder="*******"
              showAsterisk={false}
            />
            <Button btnRole={"form"} content={"Enviar"} />
          </Form>
        </FormikProvider>
        <Link href="/login">Voltar ao login</Link>
      </FormWrapper>
    </ContainerForm>
  );
}
