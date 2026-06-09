import { Button } from '@/components/button';
import { InputForm } from '@/components/input-form';
import { Modal } from '@/components/modal';
import { sendPasswordResetLink } from '@/features/auth/actions/actions';
import ModalResetPass from '@/features/auth/components/modal-reset-pass';
import { UserPasswordServiceDTO } from '@/services/interfaces/IUsePasswordResetServices';
import { resetPasswordSchema } from '@/utils/resetPassSchema';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function FormEmailToReset() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialValues = {
    email: '',
  };
  const formik = useFormik({
    initialValues,
    validationSchema: resetPasswordSchema,
    onSubmit: async (data: UserPasswordServiceDTO, { resetForm }) => {
      const result = await sendPasswordResetLink(data.email);
      if (result?.error) return;
      setIsModalOpen(true);
      resetForm();
    },
  });

  return (
    <div className="w-[31.5rem] h-[36.875rem] bg-white rounded-xl">
      <div className="p-8 h-full w-full flex flex-col justify-center [&_a]:mt-auto [&_a]:text-blue-500 [&_a]:underline [&_a]:text-base [&_a]:font-normal [&_a]:text-center [&_a]:cursor-pointer [&_button]:mt-6">
        <FormikProvider value={formik}>
          <Form className="flex flex-col [&_label_span]:text-xs [&_label_span:first-child]:text-base [&_label_span:first-child]:leading-6 [&_label_span:first-child]:text-[#666666] [&_label_input]:text-base [&_button]:mt-2.5">
            <Image
              src={'/logos/sou-junior.svg'}
              alt="logo"
              width={240}
              height={36}
            />
            <div className="my-6">
              <h2 className="text-[#666666] text-lg font-bold leading-[1.8rem] text-left mb-4">
                Esqueceu a senha?
              </h2>
              <p className="text-[#666666] text-base leading-6 text-left">
                Um e-mail será enviado para o endereço cadastrado com as
                instruções para redefinir senha.
              </p>
            </div>
            <Field
              as={InputForm}
              inputType="text"
              name="email"
              label="Email:"
              placeholder="Preencha com seu email"
              isRequired={false}
            />

            <Button type="submit">Enviar</Button>
          </Form>
        </FormikProvider>
        <Link href="/login">Voltar ao login</Link>
      </div>

      <Modal.Root open={isModalOpen} onOpenChange={() => setIsModalOpen(false)}>
        <ModalResetPass />
      </Modal.Root>
    </div>
  );
}
