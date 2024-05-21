import souJuniorLogoImg from '@/assets/logos/sou-junior.svg'
import { Button } from '@/components/atoms/Button'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Checkbox } from '../../atoms/Checkbox'
import {
  ButtonLoading,
  CallToRegisterText,
  ContainerCheckbox,
  ContainerForm,
  ContainerInput,
} from './style'
import UserLoginService from '@/services/user/userLoginService'
import { Form, Formik } from 'formik'
import * as yup from 'yup'
import { InputForm } from '@/components/atoms/InputForm'
import { LockOutlined, PersonOutlineRounded } from '@mui/icons-material'
import { Eye } from '@/components/atoms/Eye'
import { setCookie } from 'cookies-next'
import { sessionNameUserInfo } from '@/data/static-info'
import { Spinner } from '@/components/atoms/Spinner'
import { useRouter } from 'next/router'
import { AxiosError } from 'axios'
import { useAuthContext } from '@/context/Auth/AuthContext'
import { throwErrorMessages } from '@/utils/throw-error-messages'
import { UserAlreadyLoggedIn } from '@/services/errors/user-already-logged-in'
import { handleError } from '@/utils/handleError'
import { errorTranslations } from '@/services/errors/error-messages-translations'

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

  const { setUserSession } = useAuthContext()
  const router = useRouter()

  const handleSubmit = async ({ email, password }: LoginDataType) => {
    const { login } = UserLoginService()

    try {
      const { data } = await login({ email, password, type })
      const sessionInfo = {
        id: String(data.info.id),
        token: data.token,
      }

      if (isKeepConnected) {
        setCookie(sessionNameUserInfo, sessionInfo)
      } else {
        setCookie(sessionNameUserInfo, sessionInfo)
        setCookie('dont_remember', true)
      }

      setUserSession(sessionInfo)

      if (!data.info.registerComplete) {
        return router.push('/onBoarding')
      }

      router.push(
        data.info.registerComplete && data.info.calendlyName
          ? '/'
          : '/?connect-calendly=true',
      )
    } catch (err) {
      if (err instanceof AxiosError) {
        const messageKey = err.response?.data.message.toLowerCase()

        throwErrorMessages({
          messages: errorTranslations,
          currentMessageKey: messageKey,
        })
      }

      if (err instanceof UserAlreadyLoggedIn) {
        handleError(
          'Você já está logado na aplicação. Para fazer login de novo, você precisa sair da sessão atual.',
        )
      }
    }
  }

  return (
    <ContainerForm>
      <ToastContainer
        autoClose={3500}
        hideProgressBar={true}
        closeOnClick
        theme="colored"
        icon={false}
      />

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
        {({ errors, touched, isSubmitting }) => {
          return (
            <Form>
              <div className="group-fields">
                <ContainerInput
                  className={errors.email && touched.email ? 'error' : ''}
                >
                  <InputForm
                    isRequired={false}
                    type="input"
                    name="email"
                    label="E-mail"
                  >
                    <PersonOutlineRounded />
                  </InputForm>
                </ContainerInput>

                <ContainerInput
                  className={errors.password && touched.password ? 'error' : ''}
                >
                  <InputForm
                    isRequired={false}
                    type="input"
                    name="password"
                    label="Senha"
                    inputType={isPasswordVisible ? 'text' : 'password'}
                  >
                    <LockOutlined />
                  </InputForm>
                  <Eye
                    aria-label="Mostrar senha"
                    pressed={isPasswordVisible}
                    onPressedChange={setIsPasswordVisible}
                    className="eye-visibility"
                  />
                </ContainerInput>
              </div>

              <ContainerCheckbox>
                <Checkbox
                  isChecked={isKeepConnected}
                  setValue={setIsKeepConnected}
                  id="connected"
                  text="Me manter conectado"
                />
                <Link href="/resetPassword">Esqueci minha senha</Link>
              </ContainerCheckbox>

              {isSubmitting ? (
                <ButtonLoading disabled>
                  <Spinner />
                </ButtonLoading>
              ) : (
                <Button>Entrar</Button>
              )}

              <CallToRegisterText>
                Ainda não possui cadastro?{' '}
                <Link href="/cadastro">Clique aqui e cadastre-se</Link>
              </CallToRegisterText>
            </Form>
          )
        }}
      </Formik>
    </ContainerForm>
  )
}
