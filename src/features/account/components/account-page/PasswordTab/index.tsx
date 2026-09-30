'use client';

import { updatePassword } from '@/features/account/actions/actions';
import { ModalCancelKeepRoute } from '@/features/account/components/modal-cancel-keep-route';
import { ModalConfirm } from '@/features/account/components/modal-confirm';
import {
  toastMessageDiscarded,
  toastMessageSuccess,
} from '@/features/account/utils/toast-messages';
import { Button } from '@/shared/components/button';
import { Modal } from '@/shared/components/modal';
import { Spinner } from '@/shared/components/spinner';

import { handleError } from '@/shared/utils/handleError';
import { isEmpty } from '@/shared/utils/is-empty';
import { Form, FormikProvider, useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import * as yup from 'yup';
import { FormFields } from './FormFields';

const passwordValidation = yup
  .string()
  .required('Obrigatório')
  .min(8, 'A senha deve conter no mínimo 8 caracteres')
  .matches(
    /^(?=.*[a-z])[A-Za-z\d\W_]{8,}$/,
    'A senha deve conter pelo menos uma letra minúscula'
  )
  .matches(
    /^(?=.*[A-Z])[A-Za-z\d\W_]{8,}$/,
    'A senha deve conter pelo menos uma letra maiúscula'
  )
  .matches(
    /^(?=.*\d)[A-Za-z\d\W_]{8,}$/,
    'A senha deve conter pelo menos um número'
  )
  .matches(
    /^(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
    'A senha deve conter pelo menos um caractere especial'
  );

const passwordTabSchema = yup.object({
  password: passwordValidation,
  newPassword: passwordValidation,
  confirmNewPassword: passwordValidation.oneOf(
    [yup.ref('newPassword')],
    'Senhas não coincidem'
  ),
});

export type PasswordFormData = yup.InferType<typeof passwordTabSchema>;

export function PasswordTab() {
  const [openWarningModal, setOpenWarningModal] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const formik = useFormik<PasswordFormData>({
    initialValues: { password: '', newPassword: '', confirmNewPassword: '' },
    validationSchema: passwordTabSchema,
    onSubmit: (_values, { setSubmitting }) => {
      setOpenConfirmModal(true);
      setSubmitting(false);
    },
    validateOnChange: true,
  });

  const hasPasswordChanges = !isEmpty(formik.values);

  const isButtonDisabled =
    isLoading ||
    Object.entries(formik.values).some(
      ([key, value]) => !value || formik.errors[key as keyof PasswordFormData]
    );

  async function handleConfirmSave() {
    setIsLoading(true);
    try {
      const result = await updatePassword({
        oldPassword: formik.values.password,
        password: formik.values.newPassword,
        confirmPassword: formik.values.confirmNewPassword,
      });

      if (result?.error) {
        if (result.error === 'Incorrect old password') {
          formik.setFieldTouched('password', true, false);
          formik.setFieldError('password', 'Senha incorreta');
          return;
        }
        handleError('Algum erro aconteceu. Entre em contato com a gente.');
        return;
      }

      formik.resetForm();
      router.refresh();
      toastMessageSuccess('Alterações salvas');
    } catch {
      handleError('Algum erro aconteceu. Entre em contato com a gente.');
    } finally {
      setIsLoading(false);
    }
  }

  const handleWarningModal = () => {
    if (hasPasswordChanges) setOpenWarningModal(true);
  };

  const handleDiscard = () => {
    formik.resetForm();
    toastMessageDiscarded();
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold leading-[1.8rem] pt-1 pb-2">
        Senha
      </h2>
      <p className="text-[0.875rem] leading-4 [&_span]:text-blue-700">
        <span>*</span> Indica um campo obrigatório
      </p>

      <FormikProvider value={formik}>
        <Form className="flex flex-col gap-4 max-w-[36.3rem]">
          <FormFields />

          <div className="h-px w-full bg-gray-700" />

          <div className="flex gap-4 ml-auto">
            <Button
              type="button"
              variant="tertiary"
              onClick={handleWarningModal}
              disabled={!hasPasswordChanges || isLoading}
            >
              Cancelar
            </Button>

            <Modal.Root
              open={openWarningModal}
              onOpenChange={() => setOpenWarningModal(false)}
            >
              <ModalCancelKeepRoute handleDiscard={handleDiscard} />
            </Modal.Root>

            <Modal.Root
              open={openConfirmModal}
              onOpenChange={() => setOpenConfirmModal(false)}
            >
              <ModalConfirm
                title="Deseja realmente alterar a senha?"
                description="A senha antiga será substituída."
                onConfirm={handleConfirmSave}
              />
            </Modal.Root>

            {isLoading ? (
              <Button
                disabled
                className="h-[43px] p-0 w-24 cursor-wait bg-blue-800 border-blue-800"
              >
                <Spinner />
              </Button>
            ) : (
              <Button type="submit" disabled={isButtonDisabled}>
                Salvar
              </Button>
            )}
          </div>
        </Form>
      </FormikProvider>
    </div>
  );
}
