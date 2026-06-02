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

import { FormikHelpers, FormikProvider, useFormik } from 'formik';
import { FormFields } from './FormFields';

import { Modal } from '@/components/atoms/Modal';
import { Spinner } from '@/components/atoms/Spinner';
import { ModalCancelKeepRoute } from '@/components/molecules/ModalCancelKeepRoute';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { IMentor } from '@/context/interfaces/IAuth';
import { genders } from '@/data/static-info';
import UserUpdateService from '@/services/user/userUpdateService';
import { handleError } from '@/utils/handleError';
import { isEmpty } from '@/utils/is-empty';
import { CheckCircle as CheckCircleOutlineRoundedIcon } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const personalInfoSchema = yup.object({
  fullName: yup.string().optional(),
  dateOfBirth: yup.date().optional(),
  email: yup.string().email('E-mail inválido').optional(),
  gender: yup.string().oneOf(genders).optional(),
});

export type PersonalInfoFormData = yup.InferType<typeof personalInfoSchema>;

const normalizeDate = (date?: Date | string) => {
  if (!date) {
    return '';
  }

  return new Date(date).toISOString().split('T')[0];
};

export function PersonalInfoTab() {
  const [openWarningModal, setOpenWarningModal] = useState(false);

  const queryClient = useQueryClient();

  const { handleMentorData } = UserUpdateService();
  const { mentor, userSession } = useAuthContext();

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

  async function handleUpdatePersonalInfo(
    data: PersonalInfoFormData,
    { resetForm }: FormikHelpers<PersonalInfoFormData>
  ) {
    try {
      await updateMentorFn(data);

      resetForm({ values: data });
      toastMessageSuccess();
    } catch {
      handleError('Não foi possível salvar os dados. Tente novamente.');
    }
  }

  const formik = useFormik<PersonalInfoFormData>({
    initialValues: {},
    validationSchema: personalInfoSchema,
    onSubmit: handleUpdatePersonalInfo,
    validateOnChange: true,
  });

  const hasPersonalInfoChanges =
    (formik.values.fullName !== undefined &&
      formik.values.fullName !== (mentor.data?.fullName ?? '')) ||
    (formik.values.email !== undefined &&
      formik.values.email !== (mentor.data?.email ?? '')) ||
    (formik.values.gender !== undefined &&
      formik.values.gender !== (mentor.data?.gender ?? '')) ||
    (formik.values.dateOfBirth !== undefined &&
      normalizeDate(formik.values.dateOfBirth) !==
        normalizeDate(mentor.data?.dateOfBirth));

  const hasFormErrors = Object.keys(formik.errors).length > 0;
  const isButtonDisabled =
    !hasPersonalInfoChanges || hasFormErrors || formik.isSubmitting;

  const handleWarningModal = () => {
    const isFormEmpty = isEmpty(formik.values);

    if (!isFormEmpty) {
      setOpenWarningModal(true);
    }
  };

  const handleDiscard = () => {
    formik.resetForm();
    toastMessageDiscarded();
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
              disabled={!hasPersonalInfoChanges || formik.isSubmitting}
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
        </PersonalInfoContent>
      </FormikProvider>
    </TabContainer>
  );
}
