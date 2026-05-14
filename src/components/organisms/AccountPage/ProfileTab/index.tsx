import { Button } from '@/components/atoms/Button';
import {
  ButtonLoading,
  ButtonsContainer,
  Divider,
  SubtitleTab,
  TabContainer,
  TitleTab,
} from '../styles';

import { FormikHelpers, FormikProvider, useFormik } from 'formik';

import { Modal } from '@/components/atoms/Modal';
import { Spinner } from '@/components/atoms/Spinner';
import { ModalCancelKeepRoute } from '@/components/molecules/ModalCancelKeepRoute';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { IMentor } from '@/context/interfaces/IAuth';
import UserUpdateService from '@/services/user/userUpdateService';
import { handleError } from '@/utils/handleError';
import { isEmpty } from '@/utils/is-empty';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-toastify';
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
  const [formFieldsKey, setFormFieldsKey] = useState(0);

  const queryClient = useQueryClient();

  const { handleMentorData } = UserUpdateService();
  const { userSession } = useAuthContext();

  const toastMessageSuccess = () =>
    toast('Dados salvos com sucesso', {
      icon: <CheckCircleOutlineRoundedIcon />,
      position: 'top-center',
      closeButton: false,
      style: {
        backgroundColor: '#72c270',
        color: '#175116',
        fontWeight: 500,
        marginTop: '5rem',
      },
    });

  const toastMessageDiscarded = () =>
    toast('Alterações descartadas', {
      icon: false,
      position: 'top-center',
      closeButton: false,
      style: {
        backgroundColor: '#f5dc66',
        color: '#705e0b',
        fontWeight: 500,
        marginTop: '5rem',
      },
    });

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
    { resetForm }: FormikHelpers<ProfileFormData>
  ) {
    try {
      await updateMentorFn(data);

      resetForm({ values: data });
      toastMessageSuccess();
    } catch {
      handleError('Não foi possível salvar os dados. Tente novamente.');
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
    }
  };

  const handleDiscard = () => {
    formik.resetForm();
    setFormFieldsKey(state => state + 1);
    toastMessageDiscarded();
  };

  return (
    <TabContainer value="profile">
      <TitleTab>Perfil</TitleTab>
      <SubtitleTab>
        <span>*</span> Indica um campo obrigatório
      </SubtitleTab>

      <FormikProvider value={formik}>
        <ProfileContentForm>
          <FormFields key={formFieldsKey} />

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
              <ModalCancelKeepRoute handleDiscard={handleDiscard} />
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
