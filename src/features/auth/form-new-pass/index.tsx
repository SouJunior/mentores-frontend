import { Field, Form, FormikProvider, useFormik } from 'formik';
import { InputForm } from '@/components/input-form';
import { Button } from '@/components/button';
import { Eye } from '@/components/eye';
import { InfoTooltip } from '@/components/info-tooltip';
import souJuniorLogoImg from '@/assets/logos/sou-junior.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SetNewPasswordDTO } from '@/services/interfaces/IUserSetNewPassword';
import setNewPasswordService from '@/services/user/useSetNewPassword';
import { setNewPassSchema } from '@/utils/setNewPassschema';
import 'react-toastify/dist/ReactToastify.css';
import ToastSuccess from '@/components/toast-success';

export default function FormNewPass() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [toast, setToast] = useState(false);

  const searchParams = useSearchParams();
  const code = searchParams.get('code') ?? '';
  const email = searchParams.get('email') ?? '';

  const initialValues = {
    password: '',
    confirmPassword: '',
    code: '',
    email: '',
  };

  const { handle } = setNewPasswordService();

  const formik = useFormik({
    initialValues,
    validationSchema: setNewPassSchema,
    onSubmit: async (data: SetNewPasswordDTO, { resetForm }) => {
      await handle(data, { code, email });
      resetForm();
      setToast(true);
    },
  });

  return (
    <div className="max-w-[31.5rem] w-full h-[36.875rem] bg-white rounded-xl">
      {toast && <ToastSuccess message="Ok" />}
      <div className="p-8 h-full w-full flex flex-col justify-center [&_a]:mt-auto [&_a]:text-blue-500 [&_a]:underline [&_a]:text-base [&_a]:font-normal [&_a]:text-center [&_a]:cursor-pointer [&_button]:mt-6">
        <FormikProvider value={formik}>
          <Form className="flex flex-col [&_button]:mt-2.5">
            <Image src={souJuniorLogoImg} alt="logo" width={240} height={36} />
            <div className="my-6">
              <h2 className="text-[#666666] text-lg font-bold leading-[1.8rem] mb-4">
                Nova Senha
              </h2>
              <p className="text-[#666666] text-sm font-normal leading-6">
                Preencha os campos abaixo com sua nova senha e confirme-a.
              </p>
            </div>

            <div className="relative mb-4 [&_label_span]:text-xs [&_label_span:first-child]:text-base [&_label_span:first-child]:leading-6 [&_label_span:first-child]:text-[#666666] [&_label_input]:text-base [&_label_input]:pr-8 [&_button]:right-4 [&_button]:top-5 [&_button_svg]:w-6 [&_button_svg]:h-6">
              <InfoTooltip right={0} />

              <Field
                as={InputForm}
                inputType={isPasswordVisible ? 'text' : 'password'}
                name="password"
                placeholder="*******"
                isRequired={false}
                label="Nova senha"
              />

              <Eye
                aria-label="Mostrar senha"
                pressed={isPasswordVisible}
                onPressedChange={setIsPasswordVisible}
              />
            </div>

            <div className="relative [&_label_span]:text-xs [&_label_span:first-child]:text-base [&_label_span:first-child]:leading-6 [&_label_span:first-child]:text-[#666666] [&_label_input]:text-base [&_label_input]:pr-8 [&_button]:right-4 [&_button]:top-5 [&_button_svg]:w-6 [&_button_svg]:h-6">
              <Field
                as={InputForm}
                inputType={isConfirmPasswordVisible ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="*******"
                isRequired={false}
                label="Confirmar senha"
              />

              <Eye
                aria-label="Mostrar confirmação da senha"
                pressed={isConfirmPasswordVisible}
                onPressedChange={setIsConfirmPasswordVisible}
              />
            </div>

            <Button>Redefinir senha</Button>
          </Form>
        </FormikProvider>
        <Link href="/login">Voltar ao login</Link>
      </div>
    </div>
  );
}
