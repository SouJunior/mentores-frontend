import { useAuthContext } from '@/context/Auth/AuthContext';
import { IMenteeSchedule } from '@/services/interfaces/IUseMentorSchedulesService';
import { useMenteeSchedulesService } from '@/services/user/useMenteeSchedulesService';
import dayjs from 'dayjs';
import { Dispatch, SetStateAction, useState } from 'react';
import { TabContainer, TitleTab } from '../styles';
import {
  ParticipantAvatar,
  ParticipantName,
  ScheduleCard,
  ScheduleDateGroup,
  ScheduleDateTitle,
  ScheduleDetailBlock,
  ScheduleDetailLabel,
  ScheduleDetailLink,
  ScheduleDetailText,
  ScheduleDetails,
  ScheduleDetailsIcon,
  ScheduleDetailsToggle,
  ScheduleEmptyState,
  ScheduleEndMessage,
  ScheduleSummaryButton,
  ScheduleTimeRange,
  SchedulesList,
} from '../ScheduleTab/styles';
import {
  AppointmentSection,
  AppointmentSections,
  AppointmentSectionTitle,
  AppointmentStatus,
  MentorSummary,
  MentorTopic,
} from './styles';

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0])
    .join('')
    .toUpperCase();
}

function groupSchedulesByDate(schedules: IMenteeSchedule[]) {
  return schedules.reduce<Record<string, IMenteeSchedule[]>>((acc, schedule) => {
    const dateKey = dayjs(schedule.startTime).format('YYYY-MM-DD');

    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }

    acc[dateKey].push(schedule);
    return acc;
  }, {});
}

function getStatusLabel(status: IMenteeSchedule['status']) {
  if (status === 'pending') {
    return 'Aguardando confirmação';
  }

  if (status === 'scheduled') {
    return 'Agendada';
  }

  return 'Concluída';
}

function formatTimeRange(schedule: IMenteeSchedule) {
  const startTime = dayjs(schedule.startTime).format('HH:mm');

  if (!schedule.endTime) {
    return startTime;
  }

  return `${startTime} - ${dayjs(schedule.endTime).format('HH:mm')}`;
}

function renderScheduleSection(
  title: string,
  schedules: IMenteeSchedule[],
  expandedScheduleId: string | null,
  setExpandedScheduleId: Dispatch<SetStateAction<string | null>>
) {
  if (!schedules.length) {
    return null;
  }

  const groupedSchedules = groupSchedulesByDate(schedules);
  const dateKeys = Object.keys(groupedSchedules).sort((first, second) =>
    title === 'Próximas mentorias'
      ? first.localeCompare(second)
      : second.localeCompare(first)
  );

  return (
    <AppointmentSection>
      <AppointmentSectionTitle>{title}</AppointmentSectionTitle>
      <SchedulesList>
        {dateKeys.map(dateKey => (
          <ScheduleDateGroup key={`${title}-${dateKey}`}>
            <ScheduleDateTitle>
              {dayjs(dateKey).format('dddd, DD [de] MMMM [de] YYYY')}
            </ScheduleDateTitle>

            {groupedSchedules[dateKey]
              .sort((first, second) =>
                title === 'Próximas mentorias'
                  ? first.startTime.localeCompare(second.startTime)
                  : second.startTime.localeCompare(first.startTime)
              )
              .map(schedule => {
                const isExpanded = expandedScheduleId === schedule.eventUuid;

                return (
                  <ScheduleCard key={schedule.eventUuid} $isExpanded={isExpanded}>
                    <ScheduleSummaryButton
                      type="button"
                      aria-expanded={isExpanded}
                      onClick={() =>
                        setExpandedScheduleId(currentId =>
                          currentId === schedule.eventUuid
                            ? null
                            : schedule.eventUuid
                        )
                      }
                    >
                      <ScheduleTimeRange>{formatTimeRange(schedule)}</ScheduleTimeRange>

                      <MentorSummary>
                        <span
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            minWidth: 0,
                          }}
                        >
                          <ParticipantAvatar>
                            {getInitials(schedule.mentor.fullName)}
                          </ParticipantAvatar>
                          <ParticipantName>{schedule.mentor.fullName}</ParticipantName>
                        </span>
                        <MentorTopic>{schedule.eventName || 'Mentoria'}</MentorTopic>
                      </MentorSummary>

                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          justifySelf: 'end',
                        }}
                      >
                        <AppointmentStatus $variant={schedule.status}>
                          {getStatusLabel(schedule.status)}
                        </AppointmentStatus>
                        <ScheduleDetailsToggle $isExpanded={isExpanded}>
                          Detalhes
                          <ScheduleDetailsIcon />
                        </ScheduleDetailsToggle>
                      </span>
                    </ScheduleSummaryButton>

                    {isExpanded && (
                      <ScheduleDetails>
                        <ScheduleDetailBlock>
                          <ScheduleDetailLabel>Mentor(a)</ScheduleDetailLabel>
                          <ScheduleDetailText>
                            {schedule.mentor.fullName}
                          </ScheduleDetailText>
                        </ScheduleDetailBlock>

                        <ScheduleDetailBlock>
                          <ScheduleDetailLabel>Status</ScheduleDetailLabel>
                          <ScheduleDetailText>
                            {getStatusLabel(schedule.status)}
                          </ScheduleDetailText>
                        </ScheduleDetailBlock>

                        <ScheduleDetailBlock>
                          <ScheduleDetailLabel>Tema</ScheduleDetailLabel>
                          <ScheduleDetailText>
                            {schedule.eventName || 'Mentoria'}
                          </ScheduleDetailText>
                        </ScheduleDetailBlock>

                        <ScheduleDetailBlock>
                          <ScheduleDetailLabel>Descrição</ScheduleDetailLabel>
                          <ScheduleDetailText>
                            {schedule.description || 'Nenhuma descrição informada.'}
                          </ScheduleDetailText>
                        </ScheduleDetailBlock>

                        <ScheduleDetailBlock>
                          <ScheduleDetailLabel>Duração</ScheduleDetailLabel>
                          <ScheduleDetailText>
                            {schedule.duration || 'Não informada'}
                          </ScheduleDetailText>
                        </ScheduleDetailBlock>

                        <ScheduleDetailBlock>
                          <ScheduleDetailLabel>Link da reunião</ScheduleDetailLabel>
                          {schedule.joinUrl ? (
                            <ScheduleDetailLink
                              href={schedule.joinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {schedule.joinUrl}
                            </ScheduleDetailLink>
                          ) : schedule.status === 'pending' ? (
                            <ScheduleDetailText>
                              Disponível após a confirmação no Calendly.
                            </ScheduleDetailText>
                          ) : (
                            <ScheduleDetailText>Não informado</ScheduleDetailText>
                          )}
                        </ScheduleDetailBlock>

                        {schedule.eventUrl && (
                          <ScheduleDetailBlock>
                            <ScheduleDetailLabel>Calendly</ScheduleDetailLabel>
                            <ScheduleDetailLink
                              href={schedule.eventUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Abrir no Calendly
                            </ScheduleDetailLink>
                          </ScheduleDetailBlock>
                        )}
                      </ScheduleDetails>
                    )}
                  </ScheduleCard>
                );
              })}
          </ScheduleDateGroup>
        ))}
      </SchedulesList>
    </AppointmentSection>
  );
}

export function MenteeAppointmentsTab() {
  const { userSession } = useAuthContext();
  const [expandedScheduleId, setExpandedScheduleId] = useState<string | null>(
    null
  );
  const menteeSchedules = useMenteeSchedulesService(
    userSession?.token,
    userSession?.id
  );

  const schedules = menteeSchedules.data ?? [];
  const upcomingSchedules = schedules.filter(
    schedule =>
      schedule.status === 'pending' || schedule.status === 'scheduled'
  );
  const completedSchedules = schedules.filter(
    schedule => schedule.status === 'completed'
  );

  return (
    <TabContainer value="schedule">
      <TitleTab>Agendamentos</TitleTab>

      {menteeSchedules.isLoading ? (
        <ScheduleEmptyState>Carregando seus agendamentos...</ScheduleEmptyState>
      ) : menteeSchedules.isError ? (
        <ScheduleEmptyState>
          Não foi possível carregar seus agendamentos.
        </ScheduleEmptyState>
      ) : !schedules.length ? (
        <ScheduleEmptyState>
          Você ainda não possui mentorias agendadas como mentorado(a).
        </ScheduleEmptyState>
      ) : (
        <AppointmentSections>
          {renderScheduleSection(
            'Próximas mentorias',
            upcomingSchedules,
            expandedScheduleId,
            setExpandedScheduleId
          )}
          {renderScheduleSection(
            'Histórico',
            completedSchedules,
            expandedScheduleId,
            setExpandedScheduleId
          )}
          <ScheduleEndMessage>Você chegou ao fim da lista</ScheduleEndMessage>
        </AppointmentSections>
      )}
    </TabContainer>
  );
}
