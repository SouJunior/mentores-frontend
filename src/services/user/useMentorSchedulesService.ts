import { api } from '@/lib/axios';
import { IMentorSchedule } from '../interfaces/IUseMentorSchedulesService';
import {
  QueryKey,
  UseQueryOptions,
  useQuery,
} from '@tanstack/react-query';

export const useMentorSchedulesService = (
  token: string | undefined,
  mentorId: string | undefined,
  options?: Omit<
    UseQueryOptions<IMentorSchedule[], Error, IMentorSchedule[], QueryKey>,
    'queryKey' | 'queryFn'
  >
) => {
  return useQuery<IMentorSchedule[]>({
    queryKey: ['mentorSchedules', mentorId],
    queryFn: async () => {
      const response = await api.get('/calendly/schedules', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    },
    enabled: Boolean(token && mentorId),
    ...options,
  });
};

export const cancelMentorSchedule = async (
  eventUuid: string,
  token: string,
  reason?: string
) => {
  const response = await api.post(
    `/calendly/schedules/${eventUuid}/cancellation`,
    {
      reason,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
