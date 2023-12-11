import CardLoading from '@/assets/loading.gif'
import souJuniorLogoImg from '@/assets/logos/sou-junior.svg'
import { Button } from '@/components/atoms/Button'
import { InputLogin } from '@/components/atoms/InputLogin'
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Checkbox } from '../../atoms/Checkbox'
import { ContainerForm } from './style'
import UserLoginService from '@/services/user/userLoginService'

export function FormLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isKeepConnected, setIsKeepConnected] = useState(false)
  const type = 'mentor'

  const {
    sendLogin,
    formState,
    checkFields,
    disable,
    setSubmitButton,
    submitButton,
    loading,
  } = UserLoginService()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const user = await sendLogin({ email, password, type })

    const userStringify = JSON.stringify(user)

    if (isKeepConnected) {
      localStorage.setItem('user', userStringify)
    }
  }

  useEffect(() => {
    const data = { email, password, type, isKeepConnected }
    setSubmitButton(!checkFields(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password, type])

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
        <form onSubmit={handleSubmit}>
          <Image
            src={souJuniorLogoImg}
            alt="Logo SouJunior"
            width={264}
            height={40}
          />

          <h2>Bem-vindo de volta</h2>

          <InputLogin
            error={formState.errors}
            key={'email'}
            type="email"
            value={email}
            setValue={setEmail}
            placeholder=""
            label="E-mail"
            id="emailID"
          />
          <div style={{ position: 'relative' }}>
            <InputLogin
              error={formState.errors}
              key={'pass'}
              type="password"
              value={password}
              setValue={setPassword}
              placeholder=""
              label="Senha"
              id="passID"
            />
            {!disable && <span>{formState.errors}</span>}
          </div>
          {disable && (
            <span>
              Seu acesso a conta continua bloqueado, pois você não redefiniu sua
              senha após as cinco tentativas de acesso incorretas. Por favor,
              clique em &lsquo;Esqueci minha senha&rsquo; para realizar a
              recuperação
            </span>
          )}

          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '16px',
            }}
          >
            <Checkbox
              isChecked={isKeepConnected}
              setValue={setIsKeepConnected}
              id="connected"
              text="Me manter conectado"
            />
            <Link href="/resetPassword" style={{ textDecoration: 'underline' }}>
              Esqueci a senha
            </Link>
          </div>

          <Button
            disabled={submitButton}
            btnRole={'form'}
            content={
              loading ? (
                <Image alt="loading" src={CardLoading} width={24} height={24} />
              ) : (
                'Entrar'
              )
            }
          />

          <p>
            Ainda não possui cadastro?{' '}
            <Link href="/cadastro">Clique aqui e cadastre-se</Link>
          </p>
        </form>
      </ContainerForm>
    </>
  )
}
