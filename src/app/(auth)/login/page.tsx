'use client';

import backgroundImg from '@/assets/BackgroundFigures.svg';
import { FormLogin } from '@/features/auth/form-login';
import { ContainerImage, ContainerLogin, MyImage } from '@/styles/pages/login';

export default function LoginPage() {
  return (
    <ContainerLogin>
      <main>
        <ContainerImage>
          <MyImage src={backgroundImg} alt="Figuras do Background" />
        </ContainerImage>
        <FormLogin />
      </main>
    </ContainerLogin>
  );
}
