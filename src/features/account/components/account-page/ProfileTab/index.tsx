import { updateMentorData } from '@/features/account/actions/actions';
import { ModalCancelKeepRoute } from '@/features/account/components/modal-cancel-keep-route';
import { Button } from '@/shared/components/button';
import { Modal } from '@/shared/components/modal';
import { Spinner } from '@/shared/components/spinner';
import { TabsContent } from '@/shared/components/ui/tabs';
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

interface ProfileTabProps {
  mentor: IMentor;
}

export function ProfileTab({ mentor }: ProfileTabProps) {
  const [openWarningModal, setOpenWarningModal] = useState(false);
  const [formFieldsKey, setFormFieldsKey] = useState(0);
  const router = useRouter();

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

  async function handleUpdateProfile(
    data: ProfileFormData,
    { resetForm }: FormikHelpers<ProfileFormData>
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

  const formik = useFormik<ProfileFormData>({
    initialValues: {},
    validationSchema: profileSchema,
    onSubmit: handleUpdateProfile,
    validateOnChange: true,
  });

  const hasProfileChanges =
    (formik.values.aboutMe !== undefined &&
      formik.values.aboutMe !== (mentor.aboutMe ?? '')) ||
    (formik.values.profile !== undefined &&
      formik.values.profile !== (mentor.profile ?? '')) ||
    (formik.values.specialties !== undefined &&
      !areSpecialtiesEqual(mentor.specialties, formik.values.specialties));

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
          <FormFields key={formFieldsKey} mentor={mentor} />

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
