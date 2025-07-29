import { api } from '@/lib/axios';
import {
  QueryKey,
  UndefinedInitialDataOptions,
  useQuery,
} from '@tanstack/react-query';
import { ICalendlyUserInfo } from '../interfaces/IUseUserCalendlyInfoService';

export const useMentorsCalendlyInfoService = (
  options?: UndefinedInitialDataOptions<ICalendlyUserInfo[], Error, ICalendlyUserInfo[], QueryKey>
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
