import { api } from '@/lib/axios';
import {
  QueryKey,
  UndefinedInitialDataOptions,
  useQuery,
} from '@tanstack/react-query';
import { IMentors } from '../interfaces/IUseMentorsService';

export const useMentorsService = (
  options?: UndefinedInitialDataOptions<IMentors[], Error, IMentors[], QueryKey>
) => {
  return useQuery<IMentors[]>({
    queryKey: ['mentors'],
    queryFn: async () => {
      const response = await api.get('/mentor/registered');
      return response.data;
    },
    ...options,
  });
};
