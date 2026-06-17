import binIcon from '@/assets/icons/bin.png';
import { Spinner } from '@/components/atoms/Spinner';
import { IMentorSchedule } from '@/services/interfaces/IUseMentorSchedulesService';
import * as Dialog from '@radix-ui/react-dialog';
import dayjs from 'dayjs';
import Image from 'next/image';
import {
  ButtonsContainer,
  ButtonStyled,
  ContainerModalDeleteAccount,
  LoadingSchedulesContainer,
  ModalCloseButton,
  ModalDescription,
  ModalTitle,
  ScheduleActions,
  ScheduleItem,
  ScheduleList,
  ScheduleMeta,
  ScheduleTitle,
} from './style';

interface ModalDeleteAccountProps extends Dialog.DialogContentProps {
  handleDeleteAccount: () => void | Promise<void>;
  subjectLabel: string;
  deleteButtonLabel: string;
  schedules?: IMentorSchedule[];
  isLoadingSchedules?: boolean;
  isCancelingSchedule?: boolean;
  requiresScheduleCheck?: boolean;
  schedulePendingCancellation?: string | null;
  onCancelSchedule?: (eventUuid: string) => void;
  onSelectScheduleToCancel?: (eventUuid: string | null) => void;
}

export function ModalDeleteAccount({
  handleDeleteAccount,
  subjectLabel,
  deleteButtonLabel,
  schedules = [],
  isLoadingSchedules = false,
  isCancelingSchedule = false,
  requiresScheduleCheck = true,
  schedulePendingCancellation = null,
  onCancelSchedule,
  onSelectScheduleToCancel,
}: ModalDeleteAccountProps) {
  const hasOpenSchedules = schedules.length > 0;
  const isAccountDeletionBlocked =
    (requiresScheduleCheck && hasOpenSchedules) ||
    (requiresScheduleCheck && isLoadingSchedules) ||
    (requiresScheduleCheck && isCancelingSchedule) ||
    Boolean(schedulePendingCancellation);
  const shouldShowLoadingSchedules =
    requiresScheduleCheck && isLoadingSchedules && !schedulePendingCancellation;

  return (
    <ContainerModalDeleteAccount>
      <ModalTitle>Você tem certeza que deseja fazer isso?</ModalTitle>

      <ModalCloseButton />

      <ModalDescription>
        Ao excluir {subjectLabel}, a remoção será concluída logo após a
        confirmação.
      </ModalDescription>

      {!requiresScheduleCheck ? (
        <ModalDescription>
          Não existe reativação automática por login depois que a exclusão for
          concluída.
        </ModalDescription>
      ) : shouldShowLoadingSchedules ? (
        <LoadingSchedulesContainer>
          <Spinner />
          <ModalDescription>
            Verificando agendamentos abertos no Calendly...
          </ModalDescription>
        </LoadingSchedulesContainer>
      ) : hasOpenSchedules ? (
        <>
          <ModalDescription>
            Cancele os agendamentos abertos do perfil de mentor(a) antes de
            excluir {subjectLabel}.
          </ModalDescription>

          <ScheduleList>
            {schedules.map(schedule => {
              const participant = schedule.participants[0];
              const isPendingCancellation =
                schedulePendingCancellation === schedule.eventUuid;

              return (
                <ScheduleItem key={schedule.eventUuid}>
                  <ScheduleTitle>
                    {participant?.name || 'Participante sem nome'}
                  </ScheduleTitle>
                  <ScheduleMeta>
                    {dayjs(schedule.startTime).format('DD/MM/YYYY [às] HH:mm')}
                  </ScheduleMeta>
                  <ScheduleMeta>{participant?.email}</ScheduleMeta>

                  {isPendingCancellation ? (
                    <ScheduleActions>
                      <ButtonStyled
                        type="button"
                        variant="secondary"
                        disabled={isCancelingSchedule}
                        onClick={() => onSelectScheduleToCancel?.(null)}
                      >
                        Voltar
                      </ButtonStyled>
                      <ButtonStyled
                        type="button"
                        $variant="delete"
                        disabled={isCancelingSchedule}
                        onClick={() => onCancelSchedule?.(schedule.eventUuid)}
                      >
                        {isCancelingSchedule ? 'Cancelando...' : 'Confirmar'}
                      </ButtonStyled>
                    </ScheduleActions>
                  ) : (
                    <ButtonStyled
                      type="button"
                      $variant="delete"
                      disabled={isCancelingSchedule || isLoadingSchedules}
                      onClick={() =>
                        onSelectScheduleToCancel?.(schedule.eventUuid)
                      }
                    >
                      Cancelar agendamento
                    </ButtonStyled>
                  )}
                </ScheduleItem>
              );
            })}
          </ScheduleList>
        </>
      ) : (
        <ModalDescription>
          Nenhum agendamento aberto foi encontrado no Calendly. Após confirmar,
          a exclusão de {subjectLabel} será concluída imediatamente.
        </ModalDescription>
      )}

      <ButtonsContainer>
        <Dialog.Close asChild>
          <ButtonStyled type="button" variant="secondary">
            Cancelar
          </ButtonStyled>
        </Dialog.Close>

        <ButtonStyled
          type="submit"
          onClick={() => {
            if (!isAccountDeletionBlocked) {
              handleDeleteAccount();
            }
          }}
          $variant="delete"
          disabled={isAccountDeletionBlocked}
        >
          <Image src={binIcon} alt="Delete Icon" width={24} height={24} />
          {deleteButtonLabel}
        </ButtonStyled>
      </ButtonsContainer>
    </ContainerModalDeleteAccount>
  );
}
