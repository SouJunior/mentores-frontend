import { updatePassword } from '@/features/account/actions/actions';
import { ModalCancel } from '@/features/account/components/modal-cancel';
import { Button } from '@/shared/components/button';
import { Modal } from '@/shared/components/modal';
import { Spinner } from '@/shared/components/spinner';
import { TabsContent } from '@/shared/components/ui/tabs';
import { isEmpty } from '@/shared/utils/is-empty';
import { throwErrorMessages } from '@/shared/utils/throw-error-messages';
import { FormikProvider, useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import * as yup from 'yup';
import { FormFields } from './FormFields';

const passwordValidation = yup
  .string()
  .required('Obrigatório')
  .min(8, 'Senha inválida')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
    'Senha inválida'
  );

const passwordTabSchema = yup.object({
  password: passwordValidation,
  newPassword: passwordValidation,
  confirmNewPassword: passwordValidation.oneOf(
    [yup.ref('newPassword')],
    'Os campos informados não coincidem'
  ),
});

export type PasswordFormData = yup.InferType<typeof passwordTabSchema>;

export function PasswordTab() {
  const [openWarningModal, setOpenWarningModal] = useState(false);
  const router = useRouter();

  async function handleUpdatePassword(
    data: PasswordFormData,
    { resetForm }: { resetForm: () => void }
  ) {
    const result = await updatePassword({
      oldPassword: data.password,
      password: data.newPassword,
      confirmPassword: data.confirmNewPassword,
    });

    if (result?.error) {
      const messages = { 'Incorrect old password': 'Senha inválida' };
      throwErrorMessages({ messages, currentMessageKey: result.error });
      return;
    }

    resetForm();
    router.push('/');
  }

  const formik = useFormik<PasswordFormData>({
    initialValues: { password: '', newPassword: '', confirmNewPassword: '' },
    validationSchema: passwordTabSchema,
    onSubmit: handleUpdatePassword,
    validateOnChange: true,
  });

  const isButtonDisabled = Object.entries(formik.values).some(
    ([key, value]) => !value || formik.errors[key as keyof PasswordFormData]
  );

  const handleWarningModal = () => {
    if (!isEmpty(formik.values)) {
      setOpenWarningModal(true);
      return;
    }
    router.push('/');
  };

  return (
    <TabsContent value="password" className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold leading-[1.8rem] pt-1 pb-2">
        Senha
      </h2>
      <p className="text-[0.875rem] leading-4 [&_span]:text-blue-700">
        <span>*</span> Indica um campo obrigatório
      </p>

      <FormikProvider value={formik}>
        <form className="flex flex-col gap-4 max-w-[36.3rem]">
          <FormFields />

          <div className="h-px w-full bg-gray-700" />

          <div className="flex gap-4 ml-auto">
            <Button
              type="button"
              variant="tertiary"
              onClick={handleWarningModal}
              disabled={formik.isSubmitting}
            >
              Cancelar
            </Button>

            <Modal.Root
              open={openWarningModal}
              onOpenChange={() => setOpenWarningModal(false)}
            >
              <ModalCancel />
            </Modal.Root>

            {formik.isSubmitting ? (
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
        </form>
      </FormikProvider>
    </TabsContent>
  );
}
