import { Field, Form, FormikProvider, useFormik } from 'formik'
import { ContainerForm, FormWrapper, MessagesContainer } from './styled'
import { InputForm } from '@/components/atoms/InputForm'
import { Button } from '@/components/atoms/Button'
import souJuniorLogoImg from '@/assets/logos/sou-junior.svg'
import Image from 'next/image'
import usePasswordResetService from '@/services/user/usePasswordResetService'
import { UserPasswordServiceDTO } from '@/services/interfaces/IUsePasswordResetServices'
import { resetPasswordSchema } from '../../../utils/resetPassSchema'
import ModalResetPass from '../ModalResetPass'
import Link from 'next/link'
import { useState } from 'react'
import { Modal } from '@/components/atoms/Modal'

export default function FormEmailToReset() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { sendResetLink } = usePasswordResetService()

  const initialValues = {
    email: '',
  }
  const formik = useFormik({
    initialValues,
    validationSchema: resetPasswordSchema,
    onSubmit: async (data: UserPasswordServiceDTO, { resetForm }) => {
      try {
        await sendResetLink(data)
        setIsModalOpen(true)
        resetForm()
      } catch (error) {
        console.log(error)
      }
    },
  })

  return (
    <ContainerForm>
      <FormWrapper>
        <FormikProvider value={formik}>
          <Form>
            <Image src={souJuniorLogoImg} alt="logo" width={240} height={36} />
            <MessagesContainer>
              <h2>Esqueceu a senha?</h2>
              <p>
                Um e-mail será enviado para o endereço cadastrado com as
                instruções para redefinir senha.
              </p>
            </MessagesContainer>
            <Field
              as={InputForm}
              inputType="text"
              name="email"
              label="Email:"
              placeholder="Preencha com seu email"
              isRequired={false}
            />

            <Button type="submit">Enviar</Button>
          </Form>
        </FormikProvider>
        <Link href="/login">Voltar ao login</Link>
      </FormWrapper>

      <Modal.Root open={isModalOpen} onOpenChange={() => setIsModalOpen(false)}>
        <ModalResetPass />
      </Modal.Root>
    </ContainerForm>
  )
}
