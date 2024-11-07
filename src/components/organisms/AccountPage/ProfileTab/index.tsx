import { Button } from '@/components/atoms/Button';
import {
  ButtonLoading,
  ButtonsContainer,
  Divider,
  SubtitleTab,
  TabContainer,
  TitleTab,
} from '../styles';

import { FormikProvider, useFormik } from 'formik';

import { Modal } from '@/components/atoms/Modal';
import { Spinner } from '@/components/atoms/Spinner';
import { ModalCancel } from '@/components/molecules/ModalCancel';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { IMentor } from '@/context/interfaces/IAuth';
import UserUpdateService from '@/services/user/userUpdateService';
import { handleError } from '@/utils/handleError';
import { isEmpty } from '@/utils/is-empty';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as yup from 'yup';
import { FormFields } from './FormFields';
import { ProfileContentForm } from './styles';

const profileSchema = yup.object({
  specialties: yup.array(yup.string().required('Obrigatório')),
  aboutMe: yup.string().max(600, 'Limite máximo de caracteres atingido'),
  profile: yup.string(),
});

export type ProfileFormData = yup.InferType<typeof profileSchema>;

export function ProfileTab() {
  const [openWarningModal, setOpenWarningModal] = useState(false);

  const queryClient = useQueryClient();
  const router = useRouter();

  const { handleMentorData } = UserUpdateService();
  const { userSession } = useAuthContext();

  const { mutateAsync: updateMentorFn } = useMutation({
    mutationKey: ['mentor', userSession?.id],
    mutationFn: handleMentorData,
    onSuccess(_, newUpdatedData) {
      queryClient.setQueryData(
        ['mentor', userSession?.id],
        (cached: IMentor) => {
          return {
            ...cached,
            ...newUpdatedData,
          };
        }
      );
    },
  });

  async function handleUpdateProfile(
    data: ProfileFormData,
    { resetForm }: { resetForm: () => void }
  ) {
    try {
      await updateMentorFn(data);

      resetForm();
      router.push('/');
    } catch (err) {
      if (err instanceof AxiosError) {
        handleError(JSON.stringify(err.response?.data));
      }
    }
  }

  const formik = useFormik<ProfileFormData>({
    initialValues: {},
    validationSchema: profileSchema,
    onSubmit: handleUpdateProfile,
    validateOnChange: true,
  });

  const isButtonDisabled = Object.entries(formik.values).some(
    ([key, value]) => !value || formik.errors[key as keyof ProfileFormData]
  );

  const handleWarningModal = () => {
    const isFormEmpty = isEmpty(formik.values);

    if (!isFormEmpty) {
      setOpenWarningModal(true);
      return;
    }

    router.push('/');
  };

  return (
    <TabContainer value="profile">
      <TitleTab>Perfil</TitleTab>
      <SubtitleTab>
        <span>*</span> Indica um campo obrigatório
      </SubtitleTab>

      <FormikProvider value={formik}>
        <ProfileContentForm>
          <FormFields />

          <Divider />

          <ButtonsContainer>
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
              <ButtonLoading disabled>
                <Spinner />
              </ButtonLoading>
            ) : (
              <Button type="submit" disabled={isButtonDisabled}>
                Salvar
              </Button>
            )}
          </ButtonsContainer>
        </ProfileContentForm>
      </FormikProvider>
    </TabContainer>
  );
}
