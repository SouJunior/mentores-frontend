import userWithoutImage from '@/assets/userDefault.png';
import { Button } from '@/components/atoms/Button';
import { Tag } from '@/components/atoms/Tag';
import { Footer } from '@/components/organisms/Footer';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { api } from '@/lib/axios';
import { IMentors } from '@/services/interfaces/IUseMentorsService';
import {
  ICalendlyAvailableTime,
  ICreateCalendlyInviteeRequest,
} from '@/services/interfaces/IUseMentorSchedulingService';
import {
  createMentorInvitee,
  useMentorAvailableTimesService,
} from '@/services/user/useMentorSchedulingService';
import {
  CalendarHeader,
  CalendarTitle,
  Content,
  DayButton,
  DaysGrid,
  EmptyMessage,
  HeaderBand,
  MainGrid,
  MentorBio,
  MentorName,
  MentorPhoto,
  MonthButton,
  NotesInput,
  NotesLabel,
  PageContainer,
  SchedulingSection,
  Sidebar,
  SidebarSection,
  SidebarTitle,
  TagsContainer,
  TimeButton,
  TimesGrid,
  TimesPanel,
  WeekDay,
  WeekDays,
} from '@/styles/pages/mentorScheduling';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const weekDays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

export default function MentorSchedulingPage() {
  const router = useRouter();
  const { userSession } = useAuthContext();
  const [currentMonth, setCurrentMonth] = useState(() =>
    dayjs().startOf('month')
  );
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [description, setDescription] = useState('');
  const [isScheduling, setIsScheduling] = useState(false);

  const mentorId = useMemo(() => {
    const queryMentorId = router.query.mentorId;

    if (Array.isArray(queryMentorId)) {
      return queryMentorId[0];
    }

    return queryMentorId;
  }, [router.query.mentorId]);

  const monthStart = useMemo(() => {
    const firstDayOfMonth = currentMonth.startOf('month').startOf('day');
    const nextAvailableMinute = dayjs().add(1, 'minute');

    return firstDayOfMonth.isBefore(nextAvailableMinute)
      ? nextAvailableMinute.toISOString()
      : firstDayOfMonth.toISOString();
  }, [currentMonth]);

  const monthEnd = useMemo(() => {
    return currentMonth.endOf('month').endOf('day').toISOString();
  }, [currentMonth]);

  const mentorResponse = useQuery<IMentors>({
    queryKey: ['mentorScheduling', mentorId],
    queryFn: async () => {
      const response = await api.get(`/mentor/${mentorId}`);
      return response.data;
    },
    enabled: Boolean(mentorId),
  });

  const availableTimesResponse = useMentorAvailableTimesService(
    mentorId,
    monthStart,
    monthEnd,
    {
      enabled: Boolean(mentorId),
    }
  );

  const availableTimesByDate = useMemo(() => {
    return (
      availableTimesResponse.data?.availableTimes
        ?.filter(time => time.status === 'available')
        .reduce<Record<string, ICalendlyAvailableTime[]>>((acc, time) => {
          const dateKey = dayjs(time.start_time).format('YYYY-MM-DD');

          if (!acc[dateKey]) {
            acc[dateKey] = [];
          }

          acc[dateKey].push(time);
          return acc;
        }, {}) ?? {}
    );
  }, [availableTimesResponse.data?.availableTimes]);

  const availableDateKeys = useMemo(() => {
    return Object.keys(availableTimesByDate).sort();
  }, [availableTimesByDate]);

  const selectedDateTimes = useMemo(() => {
    return (availableTimesByDate[selectedDate] ?? []).sort((a, b) =>
      a.start_time.localeCompare(b.start_time)
    );
  }, [availableTimesByDate, selectedDate]);

  const calendarDays = useMemo(() => {
    const startOfMonth = currentMonth.startOf('month');
    const days: { date: dayjs.Dayjs; isOutsideMonth: boolean }[] = [];

    for (let index = 0; index < startOfMonth.day(); index++) {
      days.push({
        date: startOfMonth.subtract(startOfMonth.day() - index, 'day'),
        isOutsideMonth: true,
      });
    }

    for (let index = 0; index < currentMonth.daysInMonth(); index++) {
      days.push({
        date: startOfMonth.add(index, 'day'),
        isOutsideMonth: false,
      });
    }

    while (days.length % 7 !== 0) {
      const lastDate = days[days.length - 1].date;
      days.push({
        date: lastDate.add(1, 'day'),
        isOutsideMonth: true,
      });
    }

    return days;
  }, [currentMonth]);

  const availableDateKeysHash = availableDateKeys.join('|');

  useEffect(() => {
    if (!availableDateKeys.length) {
      setSelectedDate('');
      setSelectedTime('');
      return;
    }

    if (!selectedDate || !availableDateKeys.includes(selectedDate)) {
      setSelectedDate(availableDateKeys[0]);
      setSelectedTime('');
    }
  }, [availableDateKeys, availableDateKeysHash, selectedDate]);

  function handlePreviousMonth() {
    const previousMonth = currentMonth.subtract(1, 'month');

    if (previousMonth.isBefore(dayjs().startOf('month'))) {
      return;
    }

    setCurrentMonth(previousMonth);
    setSelectedTime('');
  }

  function handleNextMonth() {
    setCurrentMonth(currentMonth.add(1, 'month'));
    setSelectedTime('');
  }

  async function handleSchedule() {
    if (!mentorId || !selectedTime) {
      return;
    }

    if (!userSession?.token) {
      toast.error('Faça login para agendar a mentoria.');
      return;
    }

    const payload: ICreateCalendlyInviteeRequest = {
      startTime: selectedTime,
      schedulingUrl: selectedDateTimes.find(
        time => time.start_time === selectedTime
      )?.scheduling_url,
      timezone:
        Intl.DateTimeFormat().resolvedOptions().timeZone ||
        'America/Sao_Paulo',
      description: description.trim() || undefined,
    };

    try {
      setIsScheduling(true);
      const response = await createMentorInvitee(
        mentorId,
        payload,
        userSession.token
      );

      window.location.assign(response.schedulingUrl);
    } catch {
      toast.error('Não foi possível agendar a mentoria.');
    } finally {
      setIsScheduling(false);
    }
  }

  const mentor = mentorResponse.data;
  const isLoading = mentorResponse.isLoading || availableTimesResponse.isLoading;

  return (
    <>
      <PageContainer>
        <HeaderBand />

        <Content>
          <MentorPhoto>
            <Image
              src={mentor?.profile || userWithoutImage}
              alt={mentor?.fullName || 'Foto do mentor'}
              fill
              sizes="112px"
              style={{ objectFit: 'cover' }}
            />
          </MentorPhoto>

          {mentorResponse.isError ? (
            <EmptyMessage>Não foi possível carregar este mentor.</EmptyMessage>
          ) : (
            <MainGrid>
              <section>
                <MentorName>{mentor?.fullName || 'Mentor'}</MentorName>
                <MentorBio>
                  {mentor?.aboutMe ||
                    'Este mentor ainda não adicionou uma descrição.'}
                </MentorBio>

                <SchedulingSection>
                  <div>
                    <CalendarHeader>
                      <MonthButton
                        type="button"
                        aria-label="Mês anterior"
                        onClick={handlePreviousMonth}
                      >
                        <KeyboardArrowLeftIcon />
                      </MonthButton>

                      <CalendarTitle>
                        {currentMonth.format('MMMM YYYY')}
                      </CalendarTitle>

                      <MonthButton
                        type="button"
                        aria-label="Próximo mês"
                        onClick={handleNextMonth}
                      >
                        <KeyboardArrowRightIcon />
                      </MonthButton>
                    </CalendarHeader>

                    <WeekDays>
                      {weekDays.map(weekDay => (
                        <WeekDay key={weekDay}>{weekDay}</WeekDay>
                      ))}
                    </WeekDays>

                    <DaysGrid>
                      {calendarDays.map(day => {
                        const dateKey = day.date.format('YYYY-MM-DD');
                        const hasAvailableTime =
                          Boolean(availableTimesByDate[dateKey]?.length) &&
                          !day.isOutsideMonth;

                        return (
                          <DayButton
                            key={dateKey}
                            type="button"
                            disabled={!hasAvailableTime || isLoading}
                            isSelected={selectedDate === dateKey}
                            isOutsideMonth={day.isOutsideMonth}
                            aria-pressed={selectedDate === dateKey}
                            onClick={() => {
                              setSelectedDate(dateKey);
                              setSelectedTime('');
                            }}
                          >
                            {day.date.date()}
                          </DayButton>
                        );
                      })}
                    </DaysGrid>
                  </div>

                  <TimesPanel>
                    <TimesGrid>
                      {isLoading ? (
                        <EmptyMessage>Carregando horários...</EmptyMessage>
                      ) : selectedDateTimes.length ? (
                        selectedDateTimes.map(time => (
                          <TimeButton
                            key={time.start_time}
                            type="button"
                            isSelected={selectedTime === time.start_time}
                            onClick={() => setSelectedTime(time.start_time)}
                          >
                            {dayjs(time.start_time).format('HH:mm')}
                          </TimeButton>
                        ))
                      ) : (
                        <EmptyMessage>
                          Não há horários disponíveis para este mês.
                        </EmptyMessage>
                      )}
                    </TimesGrid>

                    <NotesLabel>
                      Conte brevemente o que deseja abordar
                      <NotesInput
                        value={description}
                        maxLength={600}
                        onChange={event => setDescription(event.target.value)}
                      />
                    </NotesLabel>

                    <Button
                      type="button"
                      disabled={!selectedTime || isScheduling}
                      onClick={handleSchedule}
                    >
                      {isScheduling ? 'Redirecionando...' : 'Agendar mentoria'}
                    </Button>
                  </TimesPanel>
                </SchedulingSection>
              </section>

              <Sidebar>
                <SidebarSection>
                  <SidebarTitle>Especialidade</SidebarTitle>
                  <TagsContainer>
                    {mentor?.specialties?.map(specialty => (
                      <Tag key={specialty}>{specialty}</Tag>
                    ))}
                  </TagsContainer>
                </SidebarSection>

                <SidebarSection>
                  <SidebarTitle>Gênero</SidebarTitle>
                  <TagsContainer>
                    <Tag>{mentor?.gender || 'Não informado'}</Tag>
                  </TagsContainer>
                </SidebarSection>
              </Sidebar>
            </MainGrid>
          )}
        </Content>
      </PageContainer>

      <Footer />
      <ToastContainer position="top-center" />
    </>
  );
}
