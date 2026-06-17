import { api } from '@/lib/axios';
import {
  ICreateMentorshipFeedbackRequest,
  IMentorshipFeedbackDetail,
  IMentorshipFeedbackOverview,
} from '../interfaces/IMentorshipFeedbackService';
import { QueryKey, UseQueryOptions, useQuery } from '@tanstack/react-query';

export const useMentorshipFeedbackOverviewService = (
  token: string | undefined,
  userId: string | undefined,
  options?: Omit<
    UseQueryOptions<
      IMentorshipFeedbackOverview,
      Error,
      IMentorshipFeedbackOverview,
      QueryKey
    >,
    'queryKey' | 'queryFn'
  >
) => {
  return useQuery<IMentorshipFeedbackOverview>({
    queryKey: ['mentorshipFeedbackOverview', userId],
    queryFn: async () => {
      const response = await api.get<IMentorshipFeedbackOverview>(
        '/mentorship-feedback/me',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    },
    enabled: Boolean(token && userId),
    ...options,
  });
};

export const useMentorshipFeedbackDetailService = (
  token: string | undefined,
  historyId: string | undefined,
  options?: Omit<
    UseQueryOptions<IMentorshipFeedbackDetail, Error, IMentorshipFeedbackDetail, QueryKey>,
    'queryKey' | 'queryFn'
  >
) => {
  return useQuery<IMentorshipFeedbackDetail>({
    queryKey: ['mentorshipFeedbackDetail', historyId],
    queryFn: async () => {
      const response = await api.get<IMentorshipFeedbackDetail>(
        `/mentorship-feedback/me/${historyId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    },
    enabled: Boolean(token && historyId),
    ...options,
  });
};

export const createMentorshipFeedback = async (
  data: ICreateMentorshipFeedbackRequest,
  token: string
) => {
  const response = await api.post('/mentorship-feedback', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
