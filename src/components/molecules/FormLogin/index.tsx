import CardLoading from '@/assets/loading.gif'
import souJuniorLogoImg from '@/assets/logos/sou-junior.svg'
import { Button } from '@/components/atoms/Button'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Checkbox } from '../../atoms/Checkbox'
import {
  BlockedAccountError,
  CallToRegisterText,
  ContainerCheckbox,
  ContainerForm,
  ContainerInput,
} from './style'
import UserLoginService from '@/services/user/userLoginService'
import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import { InputForm } from '@/components/atoms/InputForm'
import { LockOutlined, PersonOutlineRounded } from '@mui/icons-material'
import { Eye } from '@/components/atoms/Eye'

const loginSchema = yup.object({
  email: yup.string().email('E-mail inválido').required('Obrigatório'),
  password: yup
    .string()
    .required('A senha é obrigatória')
    .min(8, 'Senha inválida'),
})

type LoginDataType = yup.InferType<typeof loginSchema>

export function FormLogin() {
  const [isKeepConnected, setIsKeepConnected] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const type = 'mentor'

  const { sendLogin, disable, submitButton, loading } = UserLoginService()

  const handleSubmit = async ({ email, password }: LoginDataType) => {
    const user = await sendLogin({ email, password, type })

    const userStringify = JSON.stringify(user)

    if (isKeepConnected) {
      localStorage.setItem('user', userStringify)
    } else {
      sessionStorage.setItem('user', userStringify)
    }
  }

  return (
    <>
      <ToastContainer
        autoClose={3500}
        hideProgressBar={true}
        closeOnClick
        theme="colored"
        style={{
          textAlign: 'justify',
          fontSize: '16px',
          width: '550px',
          lineHeight: '32px',
        }}
      />

      <ContainerForm>
        <Image
          src={souJuniorLogoImg}
          alt="Logo SouJunior"
          width={264}
          height={40}
        />

        <h2>Bem-vindo de volta</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => {
            return (
              <Form>
                <div className="group-fields">
                  <ContainerInput
                    className={errors.email && touched.email ? 'error' : ''}
                  >
                    <PersonOutlineRounded />
                    <Field
                      as={InputForm}
                      isRequired={false}
                      type="input"
                      name="email"
                      label="E-mail"
                    />
                  </ContainerInput>

                  <ContainerInput
                    className={
                      errors.password && touched.password ? 'error' : ''
                    }
                  >
                    <LockOutlined />
                    <Field
                      as={InputForm}
                      isRequired={false}
                      type="input"
                      name="password"
                      label="Senha"
                      inputType={isPasswordVisible ? 'text' : 'password'}
                    />
                    <Eye
                      aria-label="Mostrar senha"
                      pressed={isPasswordVisible}
                      onPressedChange={setIsPasswordVisible}
                      className="eye-visibility"
                    />
                    {disable && (
                      <BlockedAccountError>
                        Seu acesso a conta continua bloqueado, pois você não
                        redefiniu sua senha após as cinco tentativas de acesso
                        incorretas. Por favor, clique em &lsquo;Esqueci minha
                        senha&rsquo; para realizar a recuperação
                      </BlockedAccountError>
                    )}
                  </ContainerInput>
                </div>

                <ContainerCheckbox>
                  <Checkbox
                    isChecked={isKeepConnected}
                    setValue={setIsKeepConnected}
                    id="connected"
                    text="Me manter conectado"
                  />
                  <Link
                    href="/resetPassword"
                    style={{ textDecoration: 'underline' }}
                  >
                    Esqueci a senha
                  </Link>
                </ContainerCheckbox>

                <Button
                  disabled={submitButton}
                  btnRole={'form'}
                  content={
                    loading ? (
                      <Image
                        alt="loading"
                        src={CardLoading}
                        width={24}
                        height={24}
                      />
                    ) : (
                      'Entrar'
                    )
                  }
                />

                <CallToRegisterText>
                  Ainda não possui cadastro?{' '}
                  <Link href="/cadastro">Clique aqui e cadastre-se</Link>
                </CallToRegisterText>
              </Form>
            )
          }}
        </Formik>
      </ContainerForm>
    </>
  )
}
