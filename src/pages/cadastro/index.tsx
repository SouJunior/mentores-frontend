import backgroundImg from '@/assets/ilustracao.svg'
import { FormRegister } from '../../components/molecules/FormRegister'
import {
  ImageRegisterContainer,
  MyImageRegister,
  RegisterContainer,
} from '../../styles/pages/cadastro'
import { useEffect } from 'react'
import useUser from '@/context/Auth/useUser'
import { useRouter } from 'next/router'

function RegisterPage() {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <RegisterContainer>
      <ImageRegisterContainer>
        <FormRegister />
        <MyImageRegister src={backgroundImg} alt="Figuras do Background" />
      </ImageRegisterContainer>
    </RegisterContainer>
  )
}

export default RegisterPage
