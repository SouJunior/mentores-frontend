import { api } from '@/lib/axios';
import {
  QueryKey,
  UseQueryOptions,
  useQuery,
} from '@tanstack/react-query';
import { ICalendlyUserInfo } from '../interfaces/IUseUserCalendlyInfoService';

export const useMentorsCalendlyInfoService = (
  options?: Omit<
    UseQueryOptions<ICalendlyUserInfo[], Error, ICalendlyUserInfo[], QueryKey>,
    'queryKey' | 'queryFn'
  >
) => {

  return useQuery<ICalendlyUserInfo[]>({
    queryKey: ['calendlyInfo'],
    queryFn: async () => {
      const response = await api.get('/calendly');
      return response.data;
    },
    ...options,
  });
};
