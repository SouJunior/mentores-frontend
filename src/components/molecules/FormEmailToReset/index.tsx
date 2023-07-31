import { Field, Form, FormikProvider, useFormik } from "formik"
import { ContainerForm, FormWrapper, MessagesContainer } from "./styled"
import { InputForm } from "@/components/atoms/InputForm"
import { Button } from "@/components/atoms/Button";
import souJuniorLogoImg from "@/assets/logos/sou-junior.svg";
import Image from "next/image";
export default function FormEmailToReset () {
  
     const initialValues = {
        email: "",   
      };
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit:(values) => {
            console.log(values)
        }
      });

    return (
        <ContainerForm>
            <FormWrapper>
           <FormikProvider value={formik}>
            <Form>
            <Image src={souJuniorLogoImg} alt="logo" width={240} height={36} />
            <MessagesContainer>
            <p>Esqueceu a senha?</p>
            <span>Um e-mail será enviado para o endereço cadastrado com as instruções para redefinir senha.</span>
            </MessagesContainer>
                <Field as={InputForm}
                  type="text"
                  name="name"
                  label="Email"
                  placeholder="Preencha com seu email"
                />
                <Button
                  btnRole={"form"}
                  content={"Enviar"}
                />
            </Form>
           </FormikProvider>
                        <a href="/login">Voltar ao login</a>
            </FormWrapper>

        </ContainerForm>
    )
}