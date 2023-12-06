import backgroundImg from '@/assets/ilustracao.svg'
import { FormRegister } from '../../components/molecules/FormRegister'
import {
  ImageRegisterContainer,
  MyImageRegister,
  RegisterContainer,
} from '../../styles/pages/cadastro'

function RegisterPage() {
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
