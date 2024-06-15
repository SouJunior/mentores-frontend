import { Button } from '@/components/atoms/Button';
import {
  ButtonLoading,
  ButtonsContainer,
  Divider,
  PersonalInfoContent,
  SubtitleTab,
  TabContainer,
  TitleTab,
} from '../styles';

import { FormikProvider, useFormik } from 'formik';
import { FormFields } from './FormFields';

import * as yup from 'yup';
import UserUpdateService from '@/services/user/userUpdateService';
import { AxiosError } from 'axios';
import { Modal } from '@/components/atoms/Modal';
import { ModalCancel } from '@/components/molecules/ModalCancel';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Spinner } from '@/components/atoms/Spinner';
import { throwErrorMessages } from '@/utils/throw-error-messages';
import { isEmpty } from '@/utils/is-empty';

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
    } catch (err) {
      if (err instanceof AxiosError) {
        const currentMessage = err.response?.data.message;
        const messages = {
          'Incorrect old password': 'Senha inválida',
        };

        throwErrorMessages({ messages, currentMessageKey: currentMessage });
      }
    }
  }

  const formik = useFormik<PasswordFormData>({
    initialValues: { password: '', newPassword: '', confirmNewPassword: '' },
    onSubmit: handleUpdatePassword,
    validationSchema: passwordTabSchema,
  });

  const handleWarningModal = () => {
    const isFormEmpty = isEmpty(formik.values);

    if (!isFormEmpty) {
      setOpenWarningModal(true);
      return;
    }

    router.push('/');
  };

  return (
    <TabContainer value="password">
      <TitleTab>Senha</TitleTab>
      <SubtitleTab>
        <span>*</span> Indica um campo obrigatório
      </SubtitleTab>

      <FormikProvider value={formik}>
        <PersonalInfoContent>
          <FormFields />

          <Divider />

          <ButtonsContainer>
            <Button
              type="button"
              variant="tertiary"
              onClick={handleWarningModal}
              disabled={formik.isSubmitting}
            >
              Descartar
            </Button>

            <Modal.Root
              open={openWarningModal}
              onOpenChange={() => setOpenWarningModal(false)}
            >
              <ModalCancel />
            </Modal.Root>

            {formik.isSubmitting ? (
              <ButtonLoading disabled>
                <Spinner />
              </ButtonLoading>
            ) : (
              <Button type="submit">Salvar</Button>
            )}
          </ButtonsContainer>
        </PersonalInfoContent>
      </FormikProvider>
    </TabContainer>
  );
}
