import backgroundImg from '@/assets/BackgroundFigures.svg'
import { FormLogin } from '../../components/molecules/FormLogin'
import {
  ContainerImage,
  ContainerLogin,
  MyImage,
} from '../../styles/pages/login'
import { useEffect } from 'react'
import useUser from '@/context/Auth/useUser'
import { useRouter } from 'next/router'

export default function LoginPage() {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <ContainerLogin>
      <main>
        <ContainerImage>
          <MyImage src={backgroundImg} alt="Figuras do Background" />
        </ContainerImage>
        <FormLogin />
      </main>
    </ContainerLogin>
  )
}
