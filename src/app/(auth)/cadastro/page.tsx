'use client';

import backgroundImg from '@/assets/ilustracao.svg';
import { FormRegister } from '@/features/auth/form-register';
import {
  ImageRegisterContainer,
  MyImageRegister,
  RegisterContainer,
} from '@/styles/pages/cadastro';

export default function CadastroPage() {
  return (
    <RegisterContainer>
      <ImageRegisterContainer>
        <FormRegister />
        <MyImageRegister src={backgroundImg} alt="Figuras do Background" />
      </ImageRegisterContainer>
    </RegisterContainer>
  );
}
