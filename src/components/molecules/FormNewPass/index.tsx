import { Field, Form, FormikProvider, useFormik } from 'formik'
import { InputForm } from '@/components/atoms/InputForm'
import { Button } from '@/components/atoms/Button'
import { Eye } from '@/components/atoms/Eye'
import { InfoTooltip } from '@/components/atoms/InfoTooltip'
import souJuniorLogoImg from '@/assets/logos/sou-junior.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  ContainerForm,
  FormWrapper,
  MessagesContainer,
  WrapperInput,
} from './styled'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { SetNewPasswordDTO } from '@/services/interfaces/IUserSetNewPassword'
import setNewPasswordService from '@/services/user/useSetNewPassword'
import { setNewPassSchema } from '@/utils/setNewPassschema'
import 'react-toastify/dist/ReactToastify.css'
import ToastSuccess from '../ToastSuccess'

export default function FormNewPass() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false)
  const [toast, setToast] = useState(false)

  const router = useRouter()
  const { code, email } = router.query as { code: string; email: string }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [code, email])

  const initialValues = {
    password: '',
    confirmPassword: '',
    code: '',
    email: '',
  }

  const { handle } = setNewPasswordService()

  const formik = useFormik({
    initialValues,
    validationSchema: setNewPassSchema,
    onSubmit: async (data: SetNewPasswordDTO, { resetForm }) => {
      await handle(data, { code, email })
      setCookie('disable', 'false')
      resetForm()
      setToast(true)
    },
  })
  return (
    <ContainerForm>
      {toast && <ToastSuccess message="Ok" />}
      <FormWrapper>
        <FormikProvider value={formik}>
          <Form>
            <Image src={souJuniorLogoImg} alt="logo" width={240} height={36} />
            <MessagesContainer>
              <h2>Nova Senha</h2>
              <p>Preencha os campos abaixo com sua nova senha e confirme-a.</p>
            </MessagesContainer>

            <WrapperInput className="new-password-field">
              <InfoTooltip right={0} />

              <Field
                as={InputForm}
                inputType={isPasswordVisible ? 'text' : 'password'}
                name="password"
                placeholder="*******"
                isRequired={false}
                label="Nova senha"
              />

              <Eye
                aria-label="Mostrar senha"
                pressed={isPasswordVisible}
                onPressedChange={setIsPasswordVisible}
              />
            </WrapperInput>

            <WrapperInput>
              <Field
                as={InputForm}
                inputType={isConfirmPasswordVisible ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="*******"
                isRequired={false}
                label="Confirmar senha"
              />

              <Eye
                aria-label="Mostrar confirmação da senha"
                pressed={isConfirmPasswordVisible}
                onPressedChange={setIsConfirmPasswordVisible}
              />
            </WrapperInput>

            <Button>Redefinir senha</Button>
          </Form>
        </FormikProvider>
        <Link href="/login">Voltar ao login</Link>
      </FormWrapper>
    </ContainerForm>
  )
}
