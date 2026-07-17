'use client';

import { login } from '@/features/auth/actions/actions';
import {
  authErrorAlerts,
  defaultAuthErrorAlert,
  type AuthErrorAlert,
} from '@/features/auth/constants/error-messages';
import { Button } from '@/shared/components/button';
import { Checkbox } from '@/shared/components/checkbox';
import { Eye } from '@/shared/components/eye';
import { InputForm } from '@/shared/components/input-form';
import { Spinner } from '@/shared/components/spinner';
import { Form, Formik } from 'formik';
import { CircleAlert, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import * as yup from 'yup';

const loginSchema = yup.object({
  email: yup.string().email('E-mail inválido').required('Obrigatório'),
  password: yup
    .string()
    .required('A senha é obrigatória')
    .min(8, 'Senha inválida'),
});

type LoginDataType = yup.InferType<typeof loginSchema>;

// erro de validação local também é comunicado pelo banner (não inline)
const validationErrorAlert: AuthErrorAlert = {
  title: 'E-mail ou senha incorretos.',
  description:
    'Você digitou a senha incorretamente e será bloqueado após 5 tentativas.',
};

function FormAlert({
  title,
  description,
  onClose,
}: AuthErrorAlert & { onClose: () => void }) {
  return (
    <div
      role="alert"
      className="relative mb-6 flex items-start gap-3 rounded-lg bg-[#e3687c] p-4 pr-10 text-white"
    >
      <CircleAlert className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
      <div className="flex flex-col gap-1">
        <strong className="font-semibold leading-[130%]">{title}</strong>
        {description && (
          <span className="text-sm leading-[140%] text-white/90">
            {description}
          </span>
        )}
      </div>
      <button
        type="button"
        aria-label="Fechar aviso"
        onClick={onClose}
        className="absolute right-3 top-3 text-white transition-opacity hover:opacity-80"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}

export function FormLogin() {
  const [isKeepConnected, setIsKeepConnected] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errorAlert, setErrorAlert] = useState<AuthErrorAlert | null>(null);

  const handleSubmit = async (values: LoginDataType) => {
    setErrorAlert(null);

    // validação local: qualquer falha vira banner (sem texto inline)
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
              // ao editar qualquer campo, limpa o erro (some banner, some vermelho)
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

                <div className="relative [&_.eye-visibility]:right-4 [&_.eye-visibility]:top-1/2 [&_.eye-visibility]:-translate-y-1/2 [&_.eye-visibility_svg]:text-black-200 [&_input]:pr-8">
                  <InputForm
                    type="input"
                    name="password"
                    label="Senha"
                    inputType={isPasswordVisible ? 'text' : 'password'}
                    invalid={hasError}
                  />
                  {/* no erro, o olho dá lugar ao ícone de alerta do InputForm */}
                  {!hasError && (
                    <Eye
                      aria-label="Mostrar senha"
                      pressed={isPasswordVisible}
                      onPressedChange={setIsPasswordVisible}
                      className="eye-visibility"
                    />
                  )}
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
              ) : hasError ? (
                <Button
                  disabled
                  className="cursor-not-allowed bg-gray-300 border-gray-300 text-white hover:bg-gray-300"
                >
                  Entrar
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
