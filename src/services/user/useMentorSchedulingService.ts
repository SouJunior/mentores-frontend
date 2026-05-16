import { api } from '@/lib/axios';
import {
  ICalendlyAvailableTimesResponse,
  ICreateCalendlyInviteeResponse,
  ICreateCalendlyInviteeRequest,
} from '../interfaces/IUseMentorSchedulingService';
import {
  QueryKey,
  UseQueryOptions,
  useQuery,
} from '@tanstack/react-query';

export const useMentorAvailableTimesService = (
  mentorId: string | undefined,
  startTime: string,
  endTime: string,
  options?: Omit<
    UseQueryOptions<
      ICalendlyAvailableTimesResponse,
      Error,
      ICalendlyAvailableTimesResponse,
      QueryKey
    >,
    'queryKey' | 'queryFn'
  >
) => {
  return useQuery<ICalendlyAvailableTimesResponse>({
    queryKey: ['mentorAvailableTimes', mentorId, startTime, endTime],
    queryFn: async () => {
      const response = await api.get(
        `/calendly/mentor/${mentorId}/available-times`,
        {
          params: {
            startTime,
            endTime,
          },
        }
      );

      return response.data;
    },
    enabled: Boolean(mentorId && startTime && endTime),
    ...options,
  });
};

export const createMentorInvitee = async (
  mentorId: string,
  data: ICreateCalendlyInviteeRequest,
  token: string
): Promise<ICreateCalendlyInviteeResponse> => {
  const response = await api.post(
    `/calendly/mentor/${mentorId}/invitees`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
