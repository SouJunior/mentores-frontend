import { api } from '@/lib/axios';
import { IMenteeSchedule } from '../interfaces/IUseMentorSchedulesService';
import {
  QueryKey,
  UseQueryOptions,
  useQuery,
} from '@tanstack/react-query';

export const useMenteeSchedulesService = (
  token: string | undefined,
  userId: string | undefined,
  options?: Omit<
    UseQueryOptions<IMenteeSchedule[], Error, IMenteeSchedule[], QueryKey>,
    'queryKey' | 'queryFn'
  >
) => {
  return useQuery<IMenteeSchedule[]>({
    queryKey: ['menteeSchedules', userId],
    queryFn: async () => {
      const response = await api.get('/calendly/mentee/schedules', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    },
    enabled: Boolean(token && userId),
    ...options,
  });
};
