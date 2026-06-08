import { Button } from '@/components/button';
import { Modal } from '@/components/modal';
import { Spinner } from '@/components/spinner';
import { TabsContent } from '@/components/ui/tabs';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { IMentor } from '@/context/interfaces/IAuth';
import { genders } from '@/data/static-info';
import { ModalCancelKeepRoute } from '@/features/account/modal-cancel-keep-route';
import UserUpdateService from '@/services/user/userUpdateService';
import { handleError } from '@/utils/handleError';
import { isEmpty } from '@/utils/is-empty';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormikHelpers, FormikProvider, useFormik } from 'formik';
import { CheckCircle as CheckCircleOutlineRoundedIcon } from 'lucide-react';
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
    onSuccess(_: unknown, newUpdatedData: PersonalInfoFormData) {
      queryClient.setQueryData(
        ['mentor', userSession?.id],
        (cached: IMentor) => ({ ...cached, ...newUpdatedData })
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
    if (!isEmpty(formik.values)) setOpenWarningModal(true);
  };

  const handleDiscard = () => {
    formik.resetForm();
    toastMessageDiscarded();
  };

  return (
    <TabsContent value="personal-info" className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold leading-[1.8rem] pt-1 pb-2">
        Informações de cadastro
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
                className="h-10.75 p-0 w-24 cursor-wait bg-[#003986] border-[#003986]"
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
