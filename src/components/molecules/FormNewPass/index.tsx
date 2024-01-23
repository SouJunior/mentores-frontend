import { Field, Form, FormikProvider, useFormik } from 'formik'
import { InputForm } from '@/components/atoms/InputForm'
import { Button } from '@/components/atoms/Button'
import { Eye } from '@/components/atoms/Eye'
import { InfoTooltip } from '@/components/atoms/InfoTooltip'
import souJuniorLogoImg from '@/assets/logos/sou-junior.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState, MouseEvent, useEffect } from 'react'
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
  const [show, setShow] = useState(true)
  const [eye, setEye] = useState(true)
  const [showConfirm, setShowConfirm] = useState(true)
  const [eyeConfirm, setEyeConfirm] = useState(true)
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

  const handleShowPassword = (
    e: MouseEvent<HTMLElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault()
    setEye(!eye)
    setShow(!show)
  }

  const handleConfirmPassword = (
    e: MouseEvent<HTMLElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault()
    setEyeConfirm(!eyeConfirm)
    setShowConfirm(!showConfirm)
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
              <p>Nova Senha</p>
              <span>
                Preencha os campos abaixo com sua nova senha e confirme-a.
              </span>
            </MessagesContainer>

            <WrapperInput>
              <InfoTooltip right={-30} />
              <Eye
                onClick={(e) => handleShowPassword(e)}
                eye={eye}
                size={20}
                top="1.4rem"
                color={'#5D5F5D'}
              />

              <Field
                as={InputForm}
                inputType={show ? 'password' : 'text'}
                name="password"
                placeholder="*******"
                isRequired={false}
                label="Nova senha"
              />
            </WrapperInput>

            <WrapperInput>
              <Eye
                onClick={(e) => handleConfirmPassword(e)}
                eye={eyeConfirm}
                size={20}
                top="1.4rem"
                color={'#5D5F5D'}
              />

              <Field
                as={InputForm}
                inputType={showConfirm ? 'password' : 'text'}
                name="confirmPassword"
                placeholder="*******"
                isRequired={false}
                label="Confirmar senha"
              />
            </WrapperInput>

            <Button btnRole={'form'} content={'Redefinir senha'} />
          </Form>
        </FormikProvider>
        <Link href="/login">Voltar ao login</Link>
      </FormWrapper>
    </ContainerForm>
  )
}
