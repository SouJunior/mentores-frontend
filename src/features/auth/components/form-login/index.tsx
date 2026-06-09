'use client';

import { login } from '@/features/auth/actions/actions';
import { authErrorMessages } from '@/features/auth/constants/error-messages';
import { Button } from '@/shared/components/button';
import { Checkbox } from '@/shared/components/checkbox';
import { Eye } from '@/shared/components/eye';
import { InputForm } from '@/shared/components/input-form';
import { Spinner } from '@/shared/components/spinner';
import { throwErrorMessages } from '@/shared/utils/throw-error-messages';
import { Form, Formik } from 'formik';
import { Lock, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';

const loginSchema = yup.object({
  email: yup.string().email('E-mail inválido').required('Obrigatório'),
  password: yup
    .string()
    .required('A senha é obrigatória')
    .min(8, 'Senha inválida'),
});

type LoginDataType = yup.InferType<typeof loginSchema>;

export function FormLogin() {
  const [isKeepConnected, setIsKeepConnected] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmit = async ({ email, password }: LoginDataType) => {
    const result = await login({ email, password });

    if (result?.error) {
      throwErrorMessages({
        messages: authErrorMessages,
        currentMessageKey: result.error.toLowerCase(),
      });
    }
  };

  return (
    <div className="max-w-[31.5rem] w-full flex flex-col bg-white rounded-lg p-6">
      <ToastContainer
        autoClose={3500}
        hideProgressBar={true}
        closeOnClick
        theme="colored"
        icon={false}
      />

      <Image
        src={'/logos/sou-junior.svg'}
        alt="Logo SouJunior"
        width={264}
        height={40}
        className="mb-4 w-[16.5rem] h-12"
      />

      <h2 className="font-medium text-lg leading-[120%] text-gray-700 mb-8">
        Bem-vindo de volta
      </h2>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => {
          return (
            <Form className="flex flex-col">
              <div className="flex flex-col gap-6">
                <div
                  className={`relative [&_svg]:w-6 [&_svg]:h-6 [&_label_span:first-child]:text-gray-700 [&_label_span]:font-normal [&_label_span]:text-base [&_label_span]:leading-[150%] [&_.eye-visibility]:right-4 [&_.eye-visibility]:top-[2.8rem] [&_.eye-visibility_svg]:text-black-200 focus-within:[&_svg]:text-blue-800${errors.email && touched.email ? ' [&_span]:text-red-400 [&_svg]:text-red-400' : ''}`}
                >
                  <InputForm
                    isRequired={false}
                    type="input"
                    name="email"
                    label="E-mail"
                  >
                    <User />
                  </InputForm>
                </div>

                <div
                  className={`relative [&_svg]:w-6 [&_svg]:h-6 [&_label_span:first-child]:text-gray-700 [&_label_span]:font-normal [&_label_span]:text-base [&_label_span]:leading-[150%] [&_.eye-visibility]:right-4 [&_.eye-visibility]:top-[2.8rem] [&_.eye-visibility_svg]:text-black-200 focus-within:[&_svg]:text-blue-800${errors.password && touched.password ? ' [&_span]:text-red-400 [&_svg]:text-red-400' : ''}`}
                >
                  <InputForm
                    isRequired={false}
                    type="input"
                    name="password"
                    label="Senha"
                    inputType={isPasswordVisible ? 'text' : 'password'}
                  >
                    <Lock />
                  </InputForm>
                  <Eye
                    aria-label="Mostrar senha"
                    pressed={isPasswordVisible}
                    onPressedChange={setIsPasswordVisible}
                    className="eye-visibility"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-6 mb-8 [&_a]:text-blue-800 [&_a]:font-medium">
                <Checkbox
                  isChecked={isKeepConnected}
                  setValue={setIsKeepConnected}
                  id="connected"
                  text="Me manter conectado"
                />
                <Link href="/resetPassword">Esqueci minha senha</Link>
              </div>

              {isSubmitting ? (
                <Button
                  disabled
                  className="h-[43px] p-0 cursor-wait bg-blue-800 border-blue-800"
                >
                  <Spinner />
                </Button>
              ) : (
                <Button>Entrar</Button>
              )}

              <p className="text-black-200 leading-[150%] mt-10 pb-2 [&_a]:text-blue-800 [&_a]:font-medium">
                Ainda não possui cadastro?{' '}
                <Link href="/cadastro">Clique aqui e cadastre-se</Link>
              </p>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
