'use client';

import { updateMentorData } from '@/features/account/actions/actions';
import { ModalCancelKeepRoute } from '@/features/account/components/modal-cancel-keep-route';
import { Button } from '@/shared/components/button';
import { Modal } from '@/shared/components/modal';
import { Spinner } from '@/shared/components/spinner';
import { genders } from '@/shared/constants/static-info';
import { IMentor } from '@/shared/types/Auth';
import { handleError } from '@/shared/utils/handleError';
import { isEmpty } from '@/shared/utils/is-empty';
import { FormikHelpers, FormikProvider, useFormik } from 'formik';
import { CheckCircle as CheckCircleOutlineRoundedIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { FormFields } from './FormFields';

const personalInfoSchema = yup.object({
  fullName: yup.string().optional(),
  dateOfBirth: yup.date().optional(),
  email: yup.string().email('E-mail inválido').optional(),
  gender: yup.string().oneOf(genders).optional(),
});

export type PersonalInfoFormData = yup.InferType<typeof personalInfoSchema>;

const normalizeDate = (date?: Date | string) => {
  if (!date) return '';
  return new Date(date).toISOString().split('T')[0];
};

interface PersonalInfoTabProps {
  mentor: IMentor;
}

export function PersonalInfoTab({ mentor }: PersonalInfoTabProps) {
  const [openWarningModal, setOpenWarningModal] = useState(false);
  const router = useRouter();

  const toastMessageSuccess = () =>
    toast('Dados salvos com sucesso', {
      icon: <CheckCircleOutlineRoundedIcon />,
      position: 'top-center',
      closeButton: false,
      style: {
        backgroundColor: 'var(--color-green-400)',
        color: 'var(--color-green-800)',
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
        backgroundColor: 'var(--color-yellow)',
        color: 'var(--color-brown-300)',
        fontWeight: 500,
        marginTop: '5rem',
      },
    });

  async function handleUpdatePersonalInfo(
    data: PersonalInfoFormData,
    { resetForm }: FormikHelpers<PersonalInfoFormData>
  ) {
    const result = await updateMentorData(data);
    if (result?.error) {
      handleError('Não foi possível salvar os dados. Tente novamente.');
      return;
    }
    resetForm({ values: data });
    router.refresh();
    toastMessageSuccess();
  }

  const formik = useFormik<PersonalInfoFormData>({
    initialValues: {},
    validationSchema: personalInfoSchema,
    onSubmit: handleUpdatePersonalInfo,
    validateOnChange: true,
  });

  const hasPersonalInfoChanges =
    (formik.values.fullName !== undefined &&
      formik.values.fullName !== (mentor.fullName ?? '')) ||
    (formik.values.email !== undefined &&
      formik.values.email !== (mentor.email ?? '')) ||
    (formik.values.gender !== undefined &&
      formik.values.gender !== (mentor.gender ?? '')) ||
    (formik.values.dateOfBirth !== undefined &&
      normalizeDate(formik.values.dateOfBirth) !==
        normalizeDate(mentor.dateOfBirth));

  const hasFormErrors = Object.keys(formik.errors).length > 0;
  const isButtonDisabled =
    !hasPersonalInfoChanges || hasFormErrors || formik.isSubmitting;

  const handleWarningModal = () => {
    if (!isEmpty(formik.values)) setOpenWarningModal(true);
  };

  const handleDiscard = () => {
    formik.resetForm();
    toastMessageDiscarded();
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold leading-[1.8rem] pt-1 pb-2">
        Informações de cadastro
      </h2>
      <p className="text-[0.875rem] leading-4 [&_span]:text-blue-700">
        <span>*</span> Indica um campo obrigatório
      </p>

      <FormikProvider value={formik}>
        <form className="flex flex-col gap-4 max-w-[36.3rem]">
          <FormFields mentor={mentor} />

          <div className="h-px w-full bg-gray-700" />

          <div className="flex gap-4 ml-auto">
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
              <Button
                disabled
                className="h-10.75 p-0 w-24 cursor-wait bg-blue-800 border-blue-800"
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
    </div>
  );
}
