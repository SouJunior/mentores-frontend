import { Button } from '@/components/atoms/Button';
import { Modal } from '@/components/atoms/Modal';
import { Spinner } from '@/components/atoms/Spinner';
import { ModalCancelKeepRoute } from '@/components/molecules/ModalCancelKeepRoute';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { AccountProfile } from '@/context/interfaces/IAuth';
import UserUpdateService from '@/services/user/userUpdateService';
import { handleError } from '@/utils/handleError';
import { isEmpty } from '@/utils/is-empty';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormikHelpers, FormikProvider, useFormik } from 'formik';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import {
  ButtonLoading,
  ButtonsContainer,
  Divider,
  SubtitleTab,
  TabContainer,
  TitleTab,
} from '../styles';
import { FormFields } from './FormFields';
import {
  ProfileContentForm,
  SharedProfileModal,
  SharedProfileModalActions,
  SharedProfileModalDescription,
  SharedProfileModalTitle,
} from './styles';

const profileSchema = yup.object({
  specialties: yup.array(yup.string().required('ObrigatÃ³rio')),
  aboutMe: yup.string().max(600, 'Limite mÃ¡ximo de caracteres atingido'),
  profile: yup.string(),
});

export type ProfileFormData = yup.InferType<typeof profileSchema>;

const areSpecialtiesEqual = (
  currentSpecialties: string[] = [],
  newSpecialties: string[] = []
) => {
  if (currentSpecialties.length !== newSpecialties.length) {
    return false;
  }

  return currentSpecialties.every(specialty =>
    newSpecialties.includes(specialty)
  );
};

export function ProfileTab() {
  const [openWarningModal, setOpenWarningModal] = useState(false);
  const [openSharedSyncModal, setOpenSharedSyncModal] = useState(false);
  const [pendingSharedSyncData, setPendingSharedSyncData] =
    useState<ProfileFormData | null>(null);
  const [formFieldsKey, setFormFieldsKey] = useState(0);
  const pendingHelpersRef = useRef<FormikHelpers<ProfileFormData> | null>(null);

  const queryClient = useQueryClient();

  const { handleMentorData, handleUserData, syncUserProfileSharedFields } =
    UserUpdateService();
  const { mentor, userSession, activeProfileType } = useAuthContext();

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
    toast('AlteraÃ§Ãµes descartadas', {
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

  const { mutateAsync: updateProfileMutation } = useMutation({
    mutationKey: ['profile', activeProfileType, userSession?.id],
    mutationFn:
      activeProfileType === 'mentor' ? handleMentorData : handleUserData,
    onSuccess(_, newUpdatedData) {
      queryClient.setQueryData(
        ['profile', activeProfileType, userSession?.id],
        (cached: AccountProfile) => {
          return {
            ...cached,
            ...newUpdatedData,
          };
        }
      );
    },
  });

  const updateProfileData = async (
    data: ProfileFormData,
    helpers: FormikHelpers<ProfileFormData>,
    options?: {
      syncAboutMe?: boolean;
      syncProfile?: boolean;
      copiedAboutMeFromMentor?: boolean;
      copiedProfileFromMentor?: boolean;
    }
  ) => {
    const payload = {
      ...data,
      ...(options?.copiedAboutMeFromMentor !== undefined
        ? { copiedAboutMeFromMentor: options.copiedAboutMeFromMentor }
        : {}),
      ...(options?.copiedProfileFromMentor !== undefined
        ? { copiedProfileFromMentor: options.copiedProfileFromMentor }
        : {}),
    };

    await updateProfileMutation(payload);

    if (
      activeProfileType === 'mentee' &&
      (options?.syncAboutMe || options?.syncProfile)
    ) {
      await syncUserProfileSharedFields({
        aboutMe: data.aboutMe,
        profile: data.profile,
        syncAboutMe: options.syncAboutMe,
        syncProfile: options.syncProfile,
      });
    }

    helpers.resetForm({ values: data });
    toastMessageSuccess();
  };

  async function handleUpdateProfile(
    data: ProfileFormData,
    helpers: FormikHelpers<ProfileFormData>
  ) {
    const aboutMeChanged =
      data.aboutMe !== undefined && data.aboutMe !== (mentor.data?.aboutMe ?? '');
    const profileChanged =
      data.profile !== undefined && data.profile !== (mentor.data?.profile ?? '');
    const shouldPromptSharedSync =
      activeProfileType === 'mentee' &&
      ((aboutMeChanged && Boolean(mentor.data?.copiedAboutMeFromMentor)) ||
        (profileChanged && Boolean(mentor.data?.copiedProfileFromMentor)));

    if (shouldPromptSharedSync) {
      pendingHelpersRef.current = helpers;
      setPendingSharedSyncData(data);
      setOpenSharedSyncModal(true);
      return;
    }

    try {
      await updateProfileData(data, helpers);
    } catch {
      handleError('NÃ£o foi possÃ­vel salvar os dados. Tente novamente.');
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
      !areSpecialtiesEqual(mentor.data?.specialties, formik.values.specialties));

  const hasFormErrors = Object.keys(formik.errors).length > 0;
  const isButtonDisabled =
    !hasProfileChanges || hasFormErrors || formik.isSubmitting;

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

  const clearPendingSharedSync = () => {
    pendingHelpersRef.current = null;
    setPendingSharedSyncData(null);
    setOpenSharedSyncModal(false);
  };

  const handleApplyChangesToCurrentProfileOnly = async () => {
    if (!pendingSharedSyncData || !pendingHelpersRef.current) {
      clearPendingSharedSync();
      return;
    }

    const aboutMeChanged =
      pendingSharedSyncData.aboutMe !== undefined &&
      pendingSharedSyncData.aboutMe !== (mentor.data?.aboutMe ?? '');
    const profileChanged =
      pendingSharedSyncData.profile !== undefined &&
      pendingSharedSyncData.profile !== (mentor.data?.profile ?? '');

    try {
      await updateProfileData(pendingSharedSyncData, pendingHelpersRef.current, {
        copiedAboutMeFromMentor: aboutMeChanged
          ? false
          : mentor.data?.copiedAboutMeFromMentor,
        copiedProfileFromMentor: profileChanged
          ? false
          : mentor.data?.copiedProfileFromMentor,
      });
      clearPendingSharedSync();
    } catch {
      handleError('NÃ£o foi possÃ­vel salvar os dados. Tente novamente.');
    }
  };

  const handleApplyChangesToBothProfiles = async () => {
    if (!pendingSharedSyncData || !pendingHelpersRef.current) {
      clearPendingSharedSync();
      return;
    }

    const shouldSyncAboutMe =
      pendingSharedSyncData.aboutMe !== undefined &&
      pendingSharedSyncData.aboutMe !== (mentor.data?.aboutMe ?? '') &&
      Boolean(mentor.data?.copiedAboutMeFromMentor);
    const shouldSyncProfile =
      pendingSharedSyncData.profile !== undefined &&
      pendingSharedSyncData.profile !== (mentor.data?.profile ?? '') &&
      Boolean(mentor.data?.copiedProfileFromMentor);

    try {
      await updateProfileData(pendingSharedSyncData, pendingHelpersRef.current, {
        syncAboutMe: shouldSyncAboutMe,
        syncProfile: shouldSyncProfile,
        copiedAboutMeFromMentor: shouldSyncAboutMe
          ? true
          : mentor.data?.copiedAboutMeFromMentor,
        copiedProfileFromMentor: shouldSyncProfile
          ? true
          : mentor.data?.copiedProfileFromMentor,
      });
      clearPendingSharedSync();
    } catch {
      handleError('NÃ£o foi possÃ­vel salvar os dados. Tente novamente.');
    }
  };

  return (
    <TabContainer value="profile">
      <TitleTab>Perfil</TitleTab>
      <SubtitleTab>
        <span>*</span> Indica um campo obrigatÃ³rio
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

      <Modal.Root
        open={openSharedSyncModal}
        onOpenChange={open => {
          if (!open) {
            clearPendingSharedSync();
            return;
          }

          setOpenSharedSyncModal(open);
        }}
      >
        <SharedProfileModal>
          <SharedProfileModalTitle>
            Aplicar alteraÃ§Ãµes tambÃ©m no outro perfil?
          </SharedProfileModalTitle>
          <SharedProfileModalDescription>
            Sua foto e/ou bio deste perfil vieram do perfil de mentor(a). VocÃª
            pode manter esses dados sincronizados entre os dois perfis ou salvar
            a alteraÃ§Ã£o apenas aqui.
          </SharedProfileModalDescription>
          <SharedProfileModalActions>
            <Button
              type="button"
              variant="secondary"
              onClick={clearPendingSharedSync}
            >
              Cancelar
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={handleApplyChangesToCurrentProfileOnly}
            >
              Salvar sÃ³ neste perfil
            </Button>
            <Button type="button" onClick={handleApplyChangesToBothProfiles}>
              Aplicar nos dois perfis
            </Button>
          </SharedProfileModalActions>
        </SharedProfileModal>
      </Modal.Root>
    </TabContainer>
  );
}
