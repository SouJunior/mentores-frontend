import { Field, Form, FormikProvider, useFormik } from "formik";
import { InputForm } from "@/components/atoms/InputForm";
import { Button } from "@/components/atoms/Button";
import { Eye } from "@/components/atoms/Eye";
import { InfoTooltip } from "@/components/atoms/InfoTooltip";
import souJuniorLogoImg from "@/assets/logos/sou-junior.svg";
import Image from "next/image";
import Link from "next/link";
import { useState, MouseEvent, useEffect } from "react";
import { ContainerForm, FormWrapper, MessagesContainer } from "./styled";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { SetNewPasswordDTO } from "@/services/interfaces/IUserSetNewPassword";
import setNewPasswordService from "@/services/useSetNewPassword";
import { setNewPassSchema } from "@/utils/setNewPassschema";

export default function FormNewPass() {
  const [show, setShow] = useState(true);
  const [eye, setEye] = useState(true);
  const [showConfirm, setShowConfirm] = useState(true);
  const [eyeConfirm, setEyeConfirm] = useState(true);

  const router = useRouter();
  const { undefinedcode, email } = router.query as { undefinedcode: string; email: string };
  useEffect(() => {
  }, [undefinedcode, email]);  

  const initialValues = {
    password: "",
    confirmPassword: "",
    code:"",
    email:""
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

  const { handle } = setNewPasswordService();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: setNewPassSchema,
    onSubmit: async (data:SetNewPasswordDTO, {resetForm}) => {
      await handle(data, { code: undefinedcode, email: email });
      setCookie('disable', 'false')
      resetForm()
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
            <InfoTooltip right={445} />
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
