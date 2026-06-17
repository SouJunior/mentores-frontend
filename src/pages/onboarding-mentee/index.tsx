import { Button } from '@/components/atoms/Button';
import EditPhotoModal from '@/components/atoms/EditPhotoModal';
import { InputForm } from '@/components/atoms/InputForm';
import { Modal } from '@/components/atoms/Modal';
import PhotoButton from '@/components/atoms/PhotoButton';
import { Select } from '@/components/atoms/Select';
import { Spinner } from '@/components/atoms/Spinner';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { IUserProfile } from '@/context/interfaces/IAuth';
import {
  EditPhotoProvider,
  useEditPhotoContext,
} from '@/context/EditPhotoContext';
import {
  genders,
  menteeOnboardingSourceKey,
  specialties,
} from '@/data/static-info';
import { useProtectPage } from '@/hooks/useProtectPage';
import UserUpdateService from '@/services/user/userUpdateService';
import {
  ContainerBoardModal,
  ContainerOnBoarding,
  ContainerSpinnerLoading,
  ModalContainer,
  OnBoardImage,
  Tab,
  TabLabel,
  TabLine,
  TabsContainer,
  TabWrapper,
} from '@/styles/pages/onBoarding';
import {
  CharacterCounter,
  ContentWrapper,
  ErrorText,
  ExitModalActions,
  ExitModalContent,
  ExitModalDescription,
  ExitModalTitle,
  FooterActions,
  FormSection,
  GhostAction,
  Greeting,
  HelpText,
  InlineActions,
  PhotoLegend,
  PhotoTrigger,
  ReadonlyField,
  RequiredLegend,
  SectionDivider,
  SecondaryButton,
  SelectInputContainer,
  SelectItemStyled,
  SpecialtyButton,
  SpecialtyCounter,
  SpecialtyGrid,
  StepDescription,
  StepTitle,
} from '@/styles/pages/onboardingMentee';
import { handleError } from '@/utils/handleError';
import { FormikProvider, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import * as yup from 'yup';
import onBoardImage from '@/assets/onBoarding/Ilustrações.svg';

type StepNumber = 1 | 2;
type ActiveProfileType = 'mentor' | 'mentee';

type SourceProfileData = {
  aboutMe: string;
  gender: string;
  profile: string;
};

type MenteeOnboardingValues = {
  aboutMe: string;
  gender: string;
  profile: string;
  specialties: string[];
};

function MenteeOnboardingContent() {
  const router = useRouter();
  const loading = useProtectPage();
  const { handleUserData, discardUserProfileDraft } = UserUpdateService();
  const {
    mentor: activeProfile,
    profiles,
    activeProfileType,
    switchProfile,
  } = useAuthContext();
  const { setOriginalImage } = useEditPhotoContext();
  const [step, setStep] = useState<StepNumber>(1);
  const [isEditPhotoModalOpen, setIsEditPhotoModalOpen] = useState(false);
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);
  const [copiedAboutMeFromSource, setCopiedAboutMeFromSource] =
    useState(false);
  const [copiedProfileFromSource, setCopiedProfileFromSource] =
    useState(false);
  const [sourceProfile, setSourceProfile] = useState<SourceProfileData | null>(
    null
  );

  const isSecondProfileFlow = Boolean(
    activeProfileType === 'mentee' && profiles.data?.mentor.exists
  );
  const inferredOriginProfile: ActiveProfileType | null = isSecondProfileFlow
    ? 'mentor'
    : null;
  const originProfile = useMemo(() => {
    const rawOrigin = Array.isArray(router.query.origin)
      ? router.query.origin[0]
      : router.query.origin;

    if (rawOrigin === 'mentor' || rawOrigin === 'mentee') {
      return rawOrigin;
    }

    return inferredOriginProfile;
  }, [inferredOriginProfile, router.query.origin]);
  const needsGender = !activeProfile.data?.gender;

  const validationSchema = useMemo(
    () =>
      yup.object({
        specialties: yup
          .array(yup.string().required('Obrigatorio'))
          .min(1, 'Selecione pelo menos 1 area.')
          .max(6, 'Selecione no maximo 6 areas.')
          .required('Selecione pelo menos 1 area.'),
        aboutMe: yup
          .string()
          .max(600, 'Limite maximo de caracteres excedido.')
          .required('Preencha o campo "Conte mais sobre voce".'),
        profile: yup.string().required('Adicione uma foto para continuar.'),
        gender: needsGender
          ? yup
              .string()
              .oneOf(genders)
              .required('Selecione um genero para continuar.')
          : yup.string().optional(),
      }),
    [needsGender]
  );

  const formik = useFormik<MenteeOnboardingValues>({
    enableReinitialize: true,
    initialValues: {
      aboutMe: activeProfile.data?.aboutMe ?? '',
      gender: activeProfile.data?.gender ?? '',
      profile: activeProfile.data?.profile ?? '',
      specialties: activeProfile.data?.specialties ?? [],
    },
    validationSchema,
    onSubmit: async values => {
      try {
        await handleUserData({
          aboutMe: values.aboutMe,
          copiedAboutMeFromMentor: copiedAboutMeFromSource,
          gender: values.gender,
          profile: values.profile,
          copiedProfileFromMentor: copiedProfileFromSource,
          registerComplete: true,
          specialties: values.specialties,
        });

        await Promise.all([activeProfile.refetch(), profiles.refetch()]);
        sessionStorage.removeItem(menteeOnboardingSourceKey);
        toast.success('Perfil mentorado(a) criado com sucesso.');
        router.push('/me?tab=schedule');
      } catch {
        handleError('Nao foi possivel concluir o perfil mentorado(a).');
      }
    },
  });

  useEffect(() => {
    if (loading || !router.isReady) {
      return;
    }

    if (activeProfileType !== 'mentee') {
      router.replace('/me?tab=schedule');
      return;
    }

    if (activeProfile.data?.registerComplete) {
      router.replace('/me?tab=schedule');
    }
  }, [
    activeProfile.data?.registerComplete,
    activeProfileType,
    loading,
    router,
  ]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const storedSourceProfile = sessionStorage.getItem(
      menteeOnboardingSourceKey
    );

    if (!storedSourceProfile) {
      setSourceProfile(null);
      return;
    }

    try {
      setSourceProfile(JSON.parse(storedSourceProfile));
    } catch {
      setSourceProfile(null);
    }
  }, []);

  useEffect(() => {
    const menteeProfile = activeProfile.data as IUserProfile | undefined;

    setCopiedAboutMeFromSource(
      Boolean(menteeProfile?.copiedAboutMeFromMentor)
    );
    setCopiedProfileFromSource(Boolean(menteeProfile?.copiedProfileFromMentor));
  }, [
    activeProfile.data,
    activeProfile.data?.copiedAboutMeFromMentor,
    activeProfile.data?.copiedProfileFromMentor,
  ]);

  useEffect(() => {
    setOriginalImage(formik.values.profile || sourceProfile?.profile || '');
  }, [formik.values.profile, setOriginalImage, sourceProfile?.profile]);

  useEffect(() => {
    if (
      copiedAboutMeFromSource &&
      sourceProfile?.aboutMe &&
      formik.values.aboutMe !== sourceProfile.aboutMe
    ) {
      setCopiedAboutMeFromSource(false);
    }
  }, [
    copiedAboutMeFromSource,
    formik.values.aboutMe,
    sourceProfile?.aboutMe,
  ]);

  useEffect(() => {
    if (
      copiedProfileFromSource &&
      sourceProfile?.profile &&
      formik.values.profile !== sourceProfile.profile
    ) {
      setCopiedProfileFromSource(false);
    }
  }, [copiedProfileFromSource, formik.values.profile, sourceProfile?.profile]);

  const selectedCount = formik.values.specialties.length;
  const aboutMeLength = formik.values.aboutMe.length;
  const canAdvanceStepOne = selectedCount > 0 && selectedCount <= 6;

  const toggleSpecialty = (value: string) => {
    if (formik.values.specialties.includes(value)) {
      formik.setFieldValue(
        'specialties',
        formik.values.specialties.filter(item => item !== value)
      );
      return;
    }

    if (selectedCount >= 6) {
      return;
    }

    formik.setFieldValue('specialties', [...formik.values.specialties, value]);
  };

  const handleOpenExitModal = () => {
    setIsExitModalOpen(true);
  };

  const handleContinueLater = async () => {
    try {
      await handleUserData({
        aboutMe: formik.values.aboutMe || undefined,
        copiedAboutMeFromMentor: copiedAboutMeFromSource,
        gender: formik.values.gender || undefined,
        profile: formik.values.profile || undefined,
        copiedProfileFromMentor: copiedProfileFromSource,
        registerComplete: false,
        specialties: formik.values.specialties,
      });

      await Promise.all([activeProfile.refetch(), profiles.refetch()]);

      if (originProfile) {
        await switchProfile(originProfile);
        sessionStorage.removeItem(menteeOnboardingSourceKey);
        router.push('/me?tab=schedule');
        return;
      }

      sessionStorage.removeItem(menteeOnboardingSourceKey);
      router.push('/');
    } catch {
      handleError('Nao foi possivel salvar o progresso do cadastro.');
    }
  };

  const handleDiscardSecondProfile = async () => {
    if (!originProfile) {
      router.push('/');
      return;
    }

    try {
      const switchResponse = await switchProfile(originProfile);

      await discardUserProfileDraft(switchResponse?.token);
      sessionStorage.removeItem(menteeOnboardingSourceKey);
      router.push('/me?tab=schedule');
    } catch {
      handleError(
        'Nao foi possivel descartar a criacao do perfil mentorado(a).'
      );
    }
  };

  const handleExitFirstProfile = () => {
    sessionStorage.removeItem(menteeOnboardingSourceKey);
    router.push('/');
  };

  const handleCopyPhoto = () => {
    if (!sourceProfile?.profile) {
      return;
    }

    formik.setFieldValue('profile', sourceProfile.profile);
    setCopiedProfileFromSource(true);
  };

  const handleCopyBio = () => {
    if (!sourceProfile?.aboutMe) {
      return;
    }

    formik.setFieldValue('aboutMe', sourceProfile.aboutMe);
    setCopiedAboutMeFromSource(true);
  };

  if (
    loading ||
    activeProfile.isLoading ||
    profiles.isLoading ||
    (activeProfileType === 'mentee' && !activeProfile.data)
  ) {
    return (
      <ContainerSpinnerLoading>
        <Spinner className="spinner" />
      </ContainerSpinnerLoading>
    );
  }

  return (
    <ContainerOnBoarding>
      <ToastContainer
        autoClose={3500}
        hideProgressBar
        closeOnClick
        theme="colored"
      />
      <OnBoardImage src={onBoardImage} alt="Background" />
      <ContainerBoardModal>
        <ModalContainer>
          <TabsContainer>
            <TabWrapper>
              <Tab>
                <TabLabel data-active={step === 1 ? 'true' : 'false'}>
                  INTERESSES
                </TabLabel>
                <TabLine data-active={step === 1 ? 'true' : 'false'} />
              </Tab>
            </TabWrapper>
            <TabWrapper>
              <Tab>
                <TabLabel data-active={step === 2 ? 'true' : 'false'}>
                  PERFIL
                </TabLabel>
                <TabLine data-active={step === 2 ? 'true' : 'false'} />
              </Tab>
            </TabWrapper>
          </TabsContainer>

          <FormikProvider value={formik}>
            <ContentWrapper>
              <Greeting>Ola, {activeProfile.data?.fullName}!</Greeting>
              <StepTitle>
                {step === 1
                  ? 'Em quais areas voce deseja evoluir?'
                  : 'Complete seu perfil mentorado(a)'}
              </StepTitle>
              <StepDescription>
                {step === 1
                  ? 'Escolha entre 1 e 6 areas para orientar melhor suas futuras mentorias.'
                  : 'Conte um pouco sobre voce para tornar suas mentorias mais relevantes.'}
              </StepDescription>
              <RequiredLegend>
                <span>*</span> Indica um campo obrigatorio
              </RequiredLegend>

              {step === 1 ? (
                <>
                  <SpecialtyGrid>
                    {specialties.map(specialty => (
                      <SpecialtyButton
                        key={specialty}
                        type="button"
                        $selected={formik.values.specialties.includes(
                          specialty
                        )}
                        onClick={() => toggleSpecialty(specialty)}
                      >
                        {specialty}
                      </SpecialtyButton>
                    ))}
                  </SpecialtyGrid>
                  <SpecialtyCounter>
                    <strong>{selectedCount}/6</strong> especialidades
                  </SpecialtyCounter>
                  <SectionDivider />
                  <FooterActions>
                    <SecondaryButton
                      type="button"
                      variant="secondary"
                      onClick={handleOpenExitModal}
                    >
                      Sair
                    </SecondaryButton>
                    <Button
                      type="button"
                      disabled={!canAdvanceStepOne}
                      onClick={() => setStep(2)}
                    >
                      Continuar
                    </Button>
                  </FooterActions>
                </>
              ) : (
                <>
                  <FormSection>
                    <Modal.Root
                      open={isEditPhotoModalOpen}
                      onOpenChange={setIsEditPhotoModalOpen}
                    >
                      <PhotoTrigger
                        type="button"
                        $error={Boolean(
                          formik.errors.profile && formik.touched.profile
                        )}
                        onClick={() => setIsEditPhotoModalOpen(true)}
                      >
                        <PhotoButton
                          size={80}
                          selectedPhoto={formik.values.profile}
                        />
                        <PhotoLegend>
                          Clique aqui para adicionar sua foto
                          <span>*</span>
                        </PhotoLegend>
                        <HelpText>Formatos aceitos: jpg ou png.</HelpText>
                      </PhotoTrigger>
                      {formik.errors.profile && formik.touched.profile && (
                        <ErrorText>{formik.errors.profile}</ErrorText>
                      )}

                      <EditPhotoModal
                        selectedPhoto={formik.values.profile}
                        onAddPhoto={photo => {
                          formik.setFieldValue('profile', photo);
                          formik.setFieldTouched('profile', true, false);
                          setCopiedProfileFromSource(photo === sourceProfile?.profile);
                          setIsEditPhotoModalOpen(false);
                        }}
                        onImageEdit={editedImage => {
                          formik.setFieldValue('profile', editedImage || '');
                          formik.setFieldTouched('profile', true, false);
                          setCopiedProfileFromSource(
                            (editedImage || '') === sourceProfile?.profile
                          );
                        }}
                      />
                    </Modal.Root>

                    {isSecondProfileFlow && sourceProfile && (
                      <InlineActions>
                        <GhostAction
                          type="button"
                          disabled={!sourceProfile.profile}
                          onClick={handleCopyPhoto}
                        >
                          Usar a mesma foto do outro perfil
                        </GhostAction>
                        <GhostAction
                          type="button"
                          disabled={!sourceProfile.aboutMe}
                          onClick={handleCopyBio}
                        >
                          Usar a mesma bio do outro perfil
                        </GhostAction>
                      </InlineActions>
                    )}

                    <InputForm
                      label="Conte mais sobre voce:"
                      type="textarea"
                      name="aboutMe"
                      placeholder="Fale sobre seu contexto, seus objetivos e o que deseja aprender."
                    />
                    <CharacterCounter $error={aboutMeLength > 600}>
                      {aboutMeLength} / 600
                    </CharacterCounter>

                    {needsGender ? (
                      <SelectInputContainer
                        $error={Boolean(
                          formik.errors.gender && formik.touched.gender
                        )}
                      >
                        <span>
                          Genero <strong>*</strong>
                        </span>
                        <Select
                          placeholder="Selecione"
                          value={formik.values.gender}
                          onValueChange={value => {
                            formik.setFieldValue('gender', value);
                            formik.setFieldTouched('gender', true, false);
                          }}
                        >
                          {genders.map(gender => (
                            <SelectItemStyled key={gender} value={gender}>
                              {gender}
                            </SelectItemStyled>
                          ))}
                        </Select>
                        {formik.errors.gender && formik.touched.gender && (
                          <ErrorText>{formik.errors.gender}</ErrorText>
                        )}
                      </SelectInputContainer>
                    ) : (
                      <ReadonlyField>
                        <span>Genero da conta</span>
                        <strong>{formik.values.gender}</strong>
                      </ReadonlyField>
                    )}
                  </FormSection>

                  <SectionDivider />
                  <FooterActions>
                    <SecondaryButton
                      type="button"
                      variant="secondary"
                      onClick={() => setStep(1)}
                    >
                      Voltar
                    </SecondaryButton>
                    <SecondaryButton
                      type="button"
                      variant="secondary"
                      onClick={handleOpenExitModal}
                    >
                      Sair
                    </SecondaryButton>
                    <Button
                      type="button"
                      disabled={formik.isSubmitting}
                      onClick={() => {
                        formik.setTouched(
                          {
                            aboutMe: true,
                            gender: needsGender,
                            profile: true,
                            specialties: true,
                          },
                          true
                        );
                        formik.submitForm();
                      }}
                    >
                      Concluir
                    </Button>
                  </FooterActions>
                </>
              )}
            </ContentWrapper>
          </FormikProvider>
        </ModalContainer>
      </ContainerBoardModal>

      <Modal.Root open={isExitModalOpen} onOpenChange={setIsExitModalOpen}>
        <ExitModalContent>
          <ExitModalTitle>
            {isSecondProfileFlow
              ? 'Deseja sair da criacao do perfil mentorado(a)?'
              : 'Deseja sair do onboarding?'}
          </ExitModalTitle>
          <ExitModalDescription>
            {isSecondProfileFlow
              ? 'Voce pode salvar o progresso para continuar depois, continuar agora ou descartar a criacao deste perfil.'
              : 'Se voce sair agora, os dados preenchidos neste fluxo nao serao salvos.'}
          </ExitModalDescription>
          <ExitModalActions>
            {isSecondProfileFlow ? (
              <>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={handleContinueLater}
                >
                  Sair e continuar depois
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setIsExitModalOpen(false)}
                >
                  Continuar cadastro
                </Button>
                <Button type="button" onClick={handleDiscardSecondProfile}>
                  Descartar criacao do perfil mentorado(a)
                </Button>
              </>
            ) : (
              <>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setIsExitModalOpen(false)}
                >
                  Continuar preenchimento
                </Button>
                <Button type="button" onClick={handleExitFirstProfile}>
                  Sair sem salvar
                </Button>
              </>
            )}
          </ExitModalActions>
        </ExitModalContent>
      </Modal.Root>
    </ContainerOnBoarding>
  );
}

export default function MenteeOnboardingPage() {
  return (
    <EditPhotoProvider>
      <MenteeOnboardingContent />
    </EditPhotoProvider>
  );
}
