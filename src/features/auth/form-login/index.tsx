import souJuniorLogoImg from '@/assets/logos/sou-junior.svg';
import { Button } from '@/components/button';
import { Eye } from '@/components/eye';
import { InputForm } from '@/components/input-form';
import { Spinner } from '@/components/spinner';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { sessionNameUserInfo } from '@/data/static-info';
import { errorTranslations } from '@/services/errors/error-messages-translations';
import { UserAlreadyLoggedIn } from '@/services/errors/user-already-logged-in';
import UserLoginService from '@/services/user/userLoginService';
import { handleError } from '@/utils/handleError';
import { throwErrorMessages } from '@/utils/throw-error-messages';
import { Lock, User } from 'lucide-react';
import { AxiosError } from 'axios';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import { Checkbox } from '@/components/checkbox';

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
  const type = 'mentor';

  const { setUserSession } = useAuthContext();
  const router = useRouter();

  const handleSubmit = async ({ email, password }: LoginDataType) => {
    const { login } = UserLoginService();

    try {
      const { data } = await login({ email, password, type });
      const sessionInfo = {
        id: String(data.info.id),
        token: data.token,
      };

      if (isKeepConnected) {
        localStorage.setItem(sessionNameUserInfo, JSON.stringify(sessionInfo));
      } else {
        sessionStorage.setItem(
          sessionNameUserInfo,
          JSON.stringify(sessionInfo)
        );
      }

      setUserSession(sessionInfo);

      if (!data.info.registerComplete) {
        return router.push('/onBoarding');
      }

      router.push('/');
    } catch (err) {
      if (err instanceof AxiosError) {
        const messageKey = err.response?.data.message.toLowerCase();

        throwErrorMessages({
          messages: errorTranslations,
          currentMessageKey: messageKey,
        });
      }

      if (err instanceof UserAlreadyLoggedIn) {
        handleError(
          'Você já está logado na aplicação. Para fazer login de novo, você precisa sair da sessão atual.'
        );
      }
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
        src={souJuniorLogoImg}
        alt="Logo SouJunior"
        width={264}
        height={40}
        className="mb-4 w-[16.5rem] h-12"
      />

      <h2 className="font-medium text-lg leading-[120%] text-[#666666] mb-8">
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
                  className={`relative [&_svg]:w-6 [&_svg]:h-6 [&_label_span:first-child]:text-[#666666] [&_label_span]:font-normal [&_label_span]:text-base [&_label_span]:leading-[150%] [&_.eye-visibility]:right-4 [&_.eye-visibility]:top-[2.8rem] [&_.eye-visibility_svg]:text-[#323232] focus-within:[&_svg]:text-[#003986]${errors.email && touched.email ? ' [&_span]:text-[#E94242] [&_svg]:text-[#E94242]' : ''}`}
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
                  className={`relative [&_svg]:w-6 [&_svg]:h-6 [&_label_span:first-child]:text-[#666666] [&_label_span]:font-normal [&_label_span]:text-base [&_label_span]:leading-[150%] [&_.eye-visibility]:right-4 [&_.eye-visibility]:top-[2.8rem] [&_.eye-visibility_svg]:text-[#323232] focus-within:[&_svg]:text-[#003986]${errors.password && touched.password ? ' [&_span]:text-[#E94242] [&_svg]:text-[#E94242]' : ''}`}
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

              <div className="flex justify-between mt-6 mb-8 [&_a]:text-[#003986] [&_a]:font-medium">
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
                  className="h-[43px] p-0 cursor-wait bg-[#003986] border-[#003986]"
                >
                  <Spinner />
                </Button>
              ) : (
                <Button>Entrar</Button>
              )}

              <p className="text-[#323232] leading-[150%] mt-10 pb-2 [&_a]:text-[#003986] [&_a]:font-medium">
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
