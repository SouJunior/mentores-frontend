import { Button } from '@/components/button';
import { TabsContent } from '@/components/ui/tabs';
import { FormikProvider, useFormik } from 'formik';
import { FormFields } from './FormFields';
import { Modal } from '@/components/modal';
import { Spinner } from '@/components/spinner';
import { ModalCancel } from '@/features/account/modal-cancel';
import UserUpdateService from '@/services/user/userUpdateService';
import { isEmpty } from '@/utils/is-empty';
import { throwErrorMessages } from '@/utils/throw-error-messages';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import * as yup from 'yup';

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
  const { updatePassword } = UserUpdateService();
  const router = useRouter();

  async function handleUpdatePassword(
    data: PasswordFormData,
    { resetForm }: { resetForm: () => void }
  ) {
    try {
      await updatePassword({
        oldPassword: data.password,
        password: data.newPassword,
        confirmPassword: data.confirmNewPassword,
      });
      resetForm();
      router.push('/');
    } catch (err) {
      if (err instanceof AxiosError) {
        const currentMessage = err.response?.data.message;
        const messages = { 'Incorrect old password': 'Senha inválida' };
        throwErrorMessages({ messages, currentMessageKey: currentMessage });
      }
    }
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
      <p className="text-[0.875rem] leading-4 [&_span]:text-[#338AFF]">
        <span>*</span> Indica um campo obrigatório
      </p>

      <FormikProvider value={formik}>
        <form className="flex flex-col gap-4 max-w-[36.3rem]">
          <FormFields />

          <div className="h-px w-full bg-[#666666]" />

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
                className="h-[43px] p-0 w-24 cursor-wait bg-[#003986] border-[#003986]"
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
