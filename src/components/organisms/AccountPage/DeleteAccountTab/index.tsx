import { Button } from '@/components/atoms/Button';
import { Modal } from '@/components/atoms/Modal';
import { ModalDeleteAccount } from '@/components/molecules/ModalDeleteAccount';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { FormValuesDeleteAccountDTO } from '@/services/interfaces/IUserDeleteAccount';
import { UserAccountDeleteFeedback } from '@/services/user/userAccountDeleteFeedback';
import {
  DeleteAccountTarget,
  UserDeleteAccount,
} from '@/services/user/userDeleteAccount';
import {
  cancelMentorSchedule,
  useMentorSchedulesService,
} from '@/services/user/useMentorSchedulesService';
import { throwErrorMessages } from '@/utils/throw-error-messages';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AxiosError } from 'axios';
import { FormikProvider, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  ButtonsContainer,
  Divider,
  SubtitleTab,
  TabContainer,
  TitleTab,
} from '../styles';
import FormFields from './FormFields';
import {
  Breadcrumbs,
  DeletionTargetCard,
  DeletionTargetGrid,
  DeleteAccountContentForm,
  Disclaimer,
  ErrorLegend,
  ModalCancelStyled,
} from './styles';

export interface FormValues {
  reasonOption: string | null;
  reasonText: string | null;
  usabilityRating: string | null;
  satisfactionRating: string | null;
  userExperienceFeedback: string | null;
}

export function DeleteAccountTab() {
  const router = useRouter();
  const { userSession, activeProfileType, profiles } = useAuthContext();
  const { accountDeleteFeedback } = UserAccountDeleteFeedback();
  const { deleteAccount } = UserDeleteAccount();
  const mentorSchedules = useMentorSchedulesService(
    userSession?.token,
    userSession?.id,
    {
      enabled:
        activeProfileType === 'mentor' &&
        Boolean(userSession?.token && userSession?.id),
    }
  );
  const isMentorProfile = activeProfileType === 'mentor';
  const [selectedDeletionTarget, setSelectedDeletionTarget] =
    useState<DeleteAccountTarget>(
      activeProfileType === 'mentor' ? 'mentor' : 'mentee',
    );

  const hasMentorProfile = Boolean(profiles.data?.mentor.exists);
  const hasMenteeProfile = Boolean(profiles.data?.mentee.exists);
  const requiresScheduleCheck =
    isMentorProfile &&
    (selectedDeletionTarget === 'mentor' ||
      selectedDeletionTarget === 'account');

  const initialFormValues: FormValues = {
    reasonOption: null,
    reasonText: null,
    usabilityRating: null,
    satisfactionRating: null,
    userExperienceFeedback: null,
  };

  const [openModalCancel, setOpenModalCancel] = useState<boolean>(false);
  const [openModalDeleteAccount, setOpenModalDeleteAccount] =
    useState<boolean>(false);
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormValues>(initialFormValues);
  const [schedulePendingCancellation, setSchedulePendingCancellation] =
    useState<string | null>(null);
  const [isCancelingSchedule, setIsCancelingSchedule] = useState(false);
  const [hasLoadedSchedulesForDeletion, setHasLoadedSchedulesForDeletion] =
    useState(false);

  useEffect(() => {
    if (!profiles.isSuccess) {
      return;
    }

    if (selectedDeletionTarget === 'mentor' && !hasMentorProfile) {
      setSelectedDeletionTarget(hasMenteeProfile ? 'mentee' : 'account');
    }

    if (selectedDeletionTarget === 'mentee' && !hasMenteeProfile) {
      setSelectedDeletionTarget(hasMentorProfile ? 'mentor' : 'account');
    }
  }, [
    profiles.isSuccess,
    hasMenteeProfile,
    hasMentorProfile,
    selectedDeletionTarget,
    setSelectedDeletionTarget,
  ]);

  const deletionTargetContent: Record<
    DeleteAccountTarget,
    {
      title: string;
      description: string;
      disclaimer: string;
      modalSubject: string;
      deleteButtonLabel: string;
    }
  > = {
    account: {
      title: 'Excluir a conta inteira',
      description:
        'Remove os perfis ativos e encerra o acesso à plataforma.',
      disclaimer:
        'Ao excluir a conta inteira, todos os perfis ativos deixam de ficar disponíveis na plataforma.',
      modalSubject: 'a conta inteira',
      deleteButtonLabel: 'Excluir conta',
    },
    mentor: {
      title: 'Excluir o perfil mentor(a)',
      description:
        'Remove apenas o perfil de mentor(a) e preserva o acesso como mentorado(a), se existir.',
      disclaimer:
        'Ao excluir o perfil de mentor(a), ele deixa de aparecer nos resultados de busca e em novos agendamentos.',
      modalSubject: 'o perfil de mentor(a)',
      deleteButtonLabel: 'Excluir perfil',
    },
    mentee: {
      title: 'Excluir o perfil mentorado(a)',
      description:
        'Remove apenas o perfil de mentorado(a) e preserva o acesso como mentor(a), se existir.',
      disclaimer:
        'Ao excluir o perfil de mentorado(a), esse acesso deixa de ficar disponível na plataforma.',
      modalSubject: 'o perfil de mentorado(a)',
      deleteButtonLabel: 'Excluir perfil',
    },
  };

  const selectedTargetContent = deletionTargetContent[selectedDeletionTarget];

  const handleModalCancel = () => setOpenModalCancel(true);
  const handleModalDeleteAccount = async () => {
    setSchedulePendingCancellation(null);
    setHasLoadedSchedulesForDeletion(false);
    setOpenModalDeleteAccount(true);

    if (!requiresScheduleCheck) {
      setHasLoadedSchedulesForDeletion(true);
      return;
    }

    try {
      await mentorSchedules.refetch();
    } finally {
      setHasLoadedSchedulesForDeletion(true);
    }
  };

  async function handleCancelSchedule(eventUuid: string) {
    if (!userSession?.token) {
      return;
    }

    try {
      setIsCancelingSchedule(true);
      const cancellationResponse = await cancelMentorSchedule(
        eventUuid,
        userSession.token,
        'Cancelado durante o processo de exclusão de conta.'
      );
      setHasLoadedSchedulesForDeletion(false);
      await mentorSchedules.refetch();
      setSchedulePendingCancellation(null);
      toast.success(
        cancellationResponse?.status === 'past_event'
          ? 'Agendamento já ocorreu e foi removido da lista de pendências.'
          : 'Agendamento cancelado com sucesso!'
      );
    } catch {
      toast.error('Não foi possível cancelar o agendamento.');
    } finally {
      setHasLoadedSchedulesForDeletion(true);
      setIsCancelingSchedule(false);
    }
  }

  const handleDiscard = () => {
    setFormValues(initialFormValues);
    setFormErrors(initialFormValues);

    if (window.history.length > 1) {
      router.push('/me?tab=account-management');
    } else {
      router.push('/');
    }
  };

  async function handleDeleteAccount() {
    const errors: FormValues = initialFormValues;

    // Validações de obrigatoriedade
    if (!formValues.reasonOption) {
      errors.reasonOption = 'Você precisa escolher uma das opções abaixo';
    }
    if (!formValues.satisfactionRating) {
      errors.satisfactionRating = 'Você precisa escolher uma das opções abaixo';
    }
    if (!formValues.usabilityRating) {
      errors.usabilityRating = 'Você precisa escolher uma das opções abaixo';
    }
    // Validações de limite de caracteres
    if (
      formValues.userExperienceFeedback &&
      formValues.userExperienceFeedback.length > 600
    ) {
      errors.userExperienceFeedback = 'Excedeu o limite máximo de caracteres ';
    }
    if (formValues.reasonText && formValues.reasonText.length > 600) {
      errors.reasonText = 'Excedeu o limite máximo de caracteres ';
    }

    setFormErrors(errors);

    // Verifica se há erros
    const hasErrors = Object.values(errors).some(error => error !== null);

    if (!hasErrors) {
      try {
        if (
          isMentorProfile &&
          selectedDeletionTarget !== 'mentee'
        ) {
          await accountDeleteFeedback(formValues as FormValuesDeleteAccountDTO);
        }

        await deleteAccount(selectedDeletionTarget);
        router.push('/?account-deleted=true');
      } catch (error) {
        if (error instanceof AxiosError) {
          const currentMessage = error.response?.data.message;
          throwErrorMessages({
            messages: {
              'Cancel open mentor schedules before deleting this profile':
                'Cancele os agendamentos abertos do perfil de mentor(a) antes de concluir a exclusão.',
              'Mentor profile not found':
                'O perfil de mentor(a) não está disponível para exclusão.',
              'User profile not found':
                'O perfil de mentorado(a) não está disponível para exclusão.',
              'No active profile found for deletion':
                'Não há perfil ativo disponível para exclusão.',
              'Invalid deletion target':
                'Selecione uma opção de exclusão válida.',
            },
            currentMessageKey: currentMessage,
          });
        }
      }
    }
  }

  const formik = useFormik({
    initialValues: {},
    onSubmit: handleDeleteAccount,
    validateOnChange: true,
  });

  return (
    <TabContainer value="delete-account">
      <Breadcrumbs onClick={() => router.push('/me?tab=account-management')}>
        <ArrowBackIcon />
        Voltar
      </Breadcrumbs>
      <TitleTab>Exclusão de conta</TitleTab>

      <SubtitleTab>
        Para deletar a conta, responda ao nosso formulário de satisfação
      </SubtitleTab>

      <SubtitleTab>Escolha o que você deseja excluir</SubtitleTab>

      <DeletionTargetGrid>
        <DeletionTargetCard
          type="button"
          $selected={selectedDeletionTarget === 'account'}
          onClick={() => setSelectedDeletionTarget('account')}
        >
          <strong>{deletionTargetContent.account.title}</strong>
          <span>{deletionTargetContent.account.description}</span>
        </DeletionTargetCard>

        <DeletionTargetCard
          type="button"
          $selected={selectedDeletionTarget === 'mentee'}
          disabled={!hasMenteeProfile}
          onClick={() => setSelectedDeletionTarget('mentee')}
        >
          <strong>{deletionTargetContent.mentee.title}</strong>
          <span>{deletionTargetContent.mentee.description}</span>
        </DeletionTargetCard>

        <DeletionTargetCard
          type="button"
          $selected={selectedDeletionTarget === 'mentor'}
          disabled={!hasMentorProfile}
          onClick={() => setSelectedDeletionTarget('mentor')}
        >
          <strong>{deletionTargetContent.mentor.title}</strong>
          <span>{deletionTargetContent.mentor.description}</span>
        </DeletionTargetCard>
      </DeletionTargetGrid>

      {profiles.isSuccess && (!hasMentorProfile || !hasMenteeProfile) && (
        <ErrorLegend>
          Perfis indisponíveis ficam desabilitados e não podem ser excluídos
          por esta tela.
        </ErrorLegend>
      )}

      <Disclaimer>
        {selectedTargetContent.disclaimer}
        <br></br>
        {selectedDeletionTarget !== 'mentee' &&
          'Se existirem agendamentos abertos no perfil de mentor(a), a exclusão ficará bloqueada até o cancelamento.'}
        {selectedDeletionTarget !== 'mentee' && <br></br>}
        A exclusão é concluída logo após a confirmação e não existe mais reativação automática por login.
      </Disclaimer>

      <SubtitleTab>
        <span>*</span> Indica um campo obrigatório
      </SubtitleTab>

      <FormikProvider value={formik}>
        <DeleteAccountContentForm>
          <FormFields
            setFormValues={setFormValues}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
          />

          <Divider />

          <ButtonsContainer>
            <Button
              type="button"
              variant="tertiary"
              onClick={handleModalCancel}
            >
              Cancelar
            </Button>

            <Button
              type="button"
              variant="danger"
              onClick={handleModalDeleteAccount}
            >
              {selectedTargetContent.deleteButtonLabel}
            </Button>
          </ButtonsContainer>
        </DeleteAccountContentForm>
      </FormikProvider>

      <Modal.Root
        open={openModalCancel}
        onOpenChange={() => setOpenModalCancel(false)}
      >
        <ModalCancelStyled handleDiscard={handleDiscard} />
      </Modal.Root>

      <Modal.Root
        open={openModalDeleteAccount}
        onOpenChange={isOpen => {
          if (!isOpen) {
            setSchedulePendingCancellation(null);
            setHasLoadedSchedulesForDeletion(false);
            setOpenModalDeleteAccount(false);
          }
        }}
      >
        <ModalDeleteAccount
          handleDeleteAccount={formik.submitForm}
          subjectLabel={selectedTargetContent.modalSubject}
          deleteButtonLabel={selectedTargetContent.deleteButtonLabel}
          schedules={isMentorProfile ? mentorSchedules.data : []}
          isLoadingSchedules={
            requiresScheduleCheck &&
            (!hasLoadedSchedulesForDeletion ||
              mentorSchedules.isLoading ||
              mentorSchedules.isFetching)
          }
          isCancelingSchedule={requiresScheduleCheck && isCancelingSchedule}
          requiresScheduleCheck={requiresScheduleCheck}
          schedulePendingCancellation={schedulePendingCancellation}
          onCancelSchedule={handleCancelSchedule}
          onSelectScheduleToCancel={setSchedulePendingCancellation}
        />
      </Modal.Root>
    </TabContainer>
  );
}
