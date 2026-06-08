import { Button } from '@/components/button';
import { TabsContent } from '@/components/ui/tabs';
import { FormikHelpers, FormikProvider, useFormik } from 'formik';
import { Modal } from '@/components/modal';
import { Spinner } from '@/components/spinner';
import { ModalCancelKeepRoute } from '@/features/account/modal-cancel-keep-route';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { IMentor } from '@/context/interfaces/IAuth';
import UserUpdateService from '@/services/user/userUpdateService';
import { handleError } from '@/utils/handleError';
import { isEmpty } from '@/utils/is-empty';
import { CheckCircle as CheckCircleOutlineRoundedIcon } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { FormFields } from './FormFields';

const profileSchema = yup.object({
  specialties: yup.array(yup.string().required('Obrigatório')),
  aboutMe: yup.string().max(600, 'Limite máximo de caracteres atingido'),
  profile: yup.string(),
});

export type ProfileFormData = yup.InferType<typeof profileSchema>;

const areSpecialtiesEqual = (
  currentSpecialties: string[] = [],
  newSpecialties: string[] = []
) => {
  if (currentSpecialties.length !== newSpecialties.length) return false;
  return currentSpecialties.every(s => newSpecialties.includes(s));
};

export function ProfileTab() {
  const [openWarningModal, setOpenWarningModal] = useState(false);
  const [formFieldsKey, setFormFieldsKey] = useState(0);
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
    onSuccess(_: unknown, newUpdatedData: ProfileFormData) {
      queryClient.setQueryData(
        ['mentor', userSession?.id],
        (cached: IMentor) => ({ ...cached, ...newUpdatedData })
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

  const hasProfileChanges =
    (formik.values.aboutMe !== undefined &&
      formik.values.aboutMe !== (mentor.data?.aboutMe ?? '')) ||
    (formik.values.profile !== undefined &&
      formik.values.profile !== (mentor.data?.profile ?? '')) ||
    (formik.values.specialties !== undefined &&
      !areSpecialtiesEqual(
        mentor.data?.specialties,
        formik.values.specialties
      ));

  const hasFormErrors = Object.keys(formik.errors).length > 0;
  const isButtonDisabled =
    !hasProfileChanges || hasFormErrors || formik.isSubmitting;

  const handleWarningModal = () => {
    if (!isEmpty(formik.values)) setOpenWarningModal(true);
  };

  const handleDiscard = () => {
    formik.resetForm();
    setFormFieldsKey(state => state + 1);
    toastMessageDiscarded();
  };

  return (
    <TabsContent value="profile" className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold leading-[1.8rem] pt-1 pb-2">
        Perfil
      </h2>
      <p className="text-[0.875rem] leading-4 [&_span]:text-[#338AFF]">
        <span>*</span> Indica um campo obrigatório
      </p>

      <FormikProvider value={formik}>
        <form className="flex flex-col gap-4 max-w-[42.75rem]">
          <FormFields key={formFieldsKey} />

          <div className="h-px w-full bg-[#666666]" />

          <div className="flex gap-4 ml-auto">
            <Button
              type="button"
              variant="tertiary"
              onClick={handleWarningModal}
              disabled={!hasProfileChanges || formik.isSubmitting}
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
