'use client';

import { login } from '@/features/auth/actions/actions';
import {
  authErrorAlerts,
  defaultAuthErrorAlert,
  validationErrorAlert,
  type AuthErrorAlert,
} from '@/features/auth/constants/error-messages';
import {
  loginSchema,
  type LoginDataType,
} from '@/features/auth/schemas/login.schema';
import { Button } from '@/shared/components/button';
import { Checkbox } from '@/shared/components/checkbox';
import { FormAlert } from '@/shared/components/form-alert';
import { InputForm } from '@/shared/components/input-form';
import { InputPassword } from '@/shared/components/input-password';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function FormLogin() {
  const [isKeepConnected, setIsKeepConnected] = useState(false);
  const [errorAlert, setErrorAlert] = useState<AuthErrorAlert | null>(null);

  const handleSubmit = async (values: LoginDataType) => {
    setErrorAlert(null);

    try {
      await loginSchema.validate(values, { abortEarly: false });
    } catch {
      setErrorAlert(validationErrorAlert);
      return;
    }

    const result = await login(values);

    if (result?.error) {
      const key = result.error.toLowerCase();
      setErrorAlert(authErrorAlerts[key] ?? defaultAuthErrorAlert);
    }
  };

  const hasError = errorAlert !== null;

  return (
    <div className="max-w-[31.5rem] w-full flex flex-col bg-white rounded-lg p-6">
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

      {errorAlert && (
        <FormAlert
          title={errorAlert.title}
          description={errorAlert.description}
          onClose={() => setErrorAlert(null)}
          className="mb-6"
        />
      )}

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form
              className="flex flex-col"
              onChange={() => {
                if (hasError) setErrorAlert(null);
              }}
            >
              <div className="flex flex-col gap-6">
                <InputForm
                  type="input"
                  name="email"
                  label="E-mail"
                  invalid={hasError}
                />

                <InputPassword
                  name="password"
                  label="Senha"
                  invalid={hasError}
                />
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

              <Button disabled={hasError} loading={isSubmitting}>
                Entrar
              </Button>

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
