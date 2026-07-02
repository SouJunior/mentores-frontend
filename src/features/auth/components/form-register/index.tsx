import { ModalCancel } from '@/features/account/components/modal-cancel';
import { register } from '@/features/auth/actions/actions';
import ModalEmail from '@/features/auth/components/modal-email';
import { Button } from '@/shared/components/button';
import { Modal } from '@/shared/components/modal';
import { Spinner } from '@/shared/components/spinner';
import { ModalPrivacyPolicy } from '@/shared/layout/footer/modal-terms-and-policies/ModalPrivacyPolicy';
import ModalTerms from '@/shared/layout/footer/modal-terms-and-policies/ModalTerms';
import {
  ValuesFormType,
  initialValues,
  registerSchema,
} from '@/shared/utils/registerSchema';
import { throwErrorMessages } from '@/shared/utils/throw-error-messages';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormRegisterFields } from './FormRegisterFields';

import { authErrorMessages } from '@/features/auth/constants/error-messages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function FormRegister() {
  const [openModalCancel, setOpenModalCancel] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [isUserAlreadyExists, setIsUserAlreadyExists] = useState(false);

  const router = useRouter();

  const handleModalEmail = () => setOpenEmail(!openEmail);
  const closeModalCancel = () => setOpenModalCancel(false);

  const handleSubmit = async (
    values: ValuesFormType,
    { resetForm }: { resetForm: () => void }
  ) => {
    const result = await register({
      fullName: values.name,
      email: values.email,
      dateOfBirth: values.dateBirthday?.toISOString() ?? '',
      emailConfirm: values.confirmEmail,
      password: values.password,
      passwordConfirmation: values.confirmPassword,
    });

    if (result?.error) {
      if (result.error.match(/user|exists/gi)) {
        setIsUserAlreadyExists(true);
        return;
      }

      throwErrorMessages({
        messages: authErrorMessages,
        currentMessageKey: result.error,
      });
      return;
    }

    resetForm();
    handleModalEmail();
  };

  const formik = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit: handleSubmit,
    validateOnChange: true,
  });

  const isButtonDisabled = Object.entries(formik.values).some(
    ([key, value]) => !value || formik.errors[key as keyof ValuesFormType]
  );

  const handleModalCancel = () => {
    const isSomeFieldFilled = Object.values(formik.values).some(field => field);

    if (isSomeFieldFilled) {
      setOpenModalCancel(true);
      return;
    }

    router.back();
  };

  return (
    <>
      <ToastContainer
        autoClose={3500}
        hideProgressBar={true}
        closeOnClick
        theme="colored"
        icon={false}
      />

      {isUserAlreadyExists && (
        <Modal.Root
          open={isUserAlreadyExists}
          onOpenChange={() => setIsUserAlreadyExists(false)}
        >
          <Modal.Content className="flex flex-col justify-center max-w-[26.5rem] px-0 py-6 relative [&>a+a]:mt-4">
            <Modal.Title className="text-lg font-bold leading-[1.8rem] text-center text-red-500 mb-8">
              O e-mail informado já possui cadastro.
            </Modal.Title>

            <Link
              href="/login"
              className="max-w-[13.5rem] w-full mx-auto px-4 py-3 rounded-lg border-[1.5px] border-gray-600 text-base leading-6 text-center text-gray-600 hover:bg-blue-800 hover:border-blue-800 hover:text-white"
            >
              Ir para o login
            </Link>
            <Link
              href="/resetPassword"
              className="max-w-[13.5rem] w-full mx-auto px-4 py-3 rounded-lg border-[1.5px] border-gray-600 text-base leading-6 text-center text-gray-600 hover:bg-blue-800 hover:border-blue-800 hover:text-white"
            >
              Recuperar senha
            </Link>
            <Modal.Close />
          </Modal.Content>
        </Modal.Root>
      )}

      <div className="w-full max-w-[500px] bg-white rounded-xl p-8">
        <div>
          <div className="container-logo-form flex flex-col gap-6 mb-2">
            <Image
              src={'/logos/sou-junior.svg'}
              alt="logo"
              width={240}
              height={36}
              className="w-60 h-9"
            />
            <p className="text-xs text-gray-700">
              <span className="text-blue-500">*</span> Indica um campo
              obrigatório
            </p>
          </div>

          <FormikProvider value={formik}>
            <Form className="flex flex-col gap-4">
              <FormRegisterFields />

              <div className="flex max-h-[100px] text-justify items-start justify-center mt-2">
                <Field
                  id="checkbox-terms-and-policies"
                  type="checkbox"
                  name="agreeWithTermsAndPolicies"
                  className="align-middle mr-1"
                />
                <label
                  htmlFor="checkbox-terms-and-policies"
                  className="text-sm w-full text-blue-500 leading-[150%] ml-2 -mt-[5px] [&_button]:inline [&_button]:p-0 [&_button]:text-blue-500 [&_button]:text-sm [&_button]:font-normal [&_button]:leading-[150%] [&_button]:border-b [&_button]:border-blue-500 [&_button]:rounded-none"
                >
                  Concordo com os{' '}
                  <Modal.Root>
                    <Modal.Control asChild>
                      <Button type="button" variant="tertiary">
                        Termos de uso
                      </Button>
                    </Modal.Control>

                    <ModalTerms />
                  </Modal.Root>{' '}
                  e{' '}
                  <Modal.Root>
                    <Modal.Control asChild>
                      <Button type="button" variant="tertiary">
                        Políticas de privacidade
                      </Button>
                    </Modal.Control>

                    <ModalPrivacyPolicy />
                  </Modal.Root>{' '}
                  do SouJunior.
                </label>
              </div>

              <Modal.Root open={openEmail} onOpenChange={handleModalEmail}>
                <ModalEmail />
              </Modal.Root>

              <div className="flex flex-col pt-3 gap-4">
                {formik.isSubmitting ? (
                  <Button
                    disabled
                    className="h-[43px] p-0 cursor-wait bg-blue-800 border-blue-800"
                  >
                    <Spinner />
                  </Button>
                ) : (
                  <Button disabled={isButtonDisabled}>Concluir</Button>
                )}

                <Button
                  type="button"
                  variant="secondary"
                  onClick={handleModalCancel}
                >
                  Cancelar
                </Button>

                <Modal.Root
                  open={openModalCancel}
                  onOpenChange={closeModalCancel}
                >
                  <ModalCancel />
                </Modal.Root>
              </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </>
  );
}
