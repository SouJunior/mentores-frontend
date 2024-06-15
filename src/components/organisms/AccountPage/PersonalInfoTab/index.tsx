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
import { genders } from '@/data/static-info';
import UserUpdateService from '@/services/user/userUpdateService';
import { handleError } from '@/utils/handleError';
import { AxiosError } from 'axios';
import { Modal } from '@/components/atoms/Modal';
import { ModalCancel } from '@/components/molecules/ModalCancel';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Spinner } from '@/components/atoms/Spinner';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { isEmpty } from '@/utils/is-empty';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IMentor } from '@/context/interfaces/IAuth';

const personalInfoSchema = yup.object({
  fullName: yup.string().optional(),
  dateOfBirth: yup.date().optional(),
  email: yup.string().email('E-mail inválido').optional(),
  gender: yup.string().oneOf(genders).optional(),
});

export type PersonalInfoFormData = yup.InferType<typeof personalInfoSchema>;

export function PersonalInfoTab() {
  const [openWarningModal, setOpenWarningModal] = useState(false);

  const queryClient = useQueryClient();
  const router = useRouter();

  const { handle } = UserUpdateService();
  const { userSession } = useAuthContext();

  const { mutateAsync: updateMentorFn } = useMutation({
    mutationKey: ['mentor', userSession?.id],
    mutationFn: handle,
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

  async function handleUpdatePersonalInfo(
    data: PersonalInfoFormData,
    { resetForm }: { resetForm: () => void }
  ) {
    try {
      await updateMentorFn({
        fullName: data.fullName,
        gender: data.gender,
      });

      resetForm();
    } catch (err) {
      if (err instanceof AxiosError) {
        handleError(JSON.stringify(err.response?.data));
      }
    }
  }

  const formik = useFormik<PersonalInfoFormData>({
    initialValues: {},
    onSubmit: handleUpdatePersonalInfo,
    validationSchema: personalInfoSchema,
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
    <TabContainer value="personal-info">
      <TitleTab>Informações de cadastro</TitleTab>
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
