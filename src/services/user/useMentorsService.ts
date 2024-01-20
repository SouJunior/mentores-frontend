import { api } from '@/lib/axios'
import { IMentors } from '../interfaces/IUseMentorsService'
import {
  QueryKey,
  UndefinedInitialDataOptions,
  useQuery,
} from '@tanstack/react-query'

export const useMentorsService = (
  options?: UndefinedInitialDataOptions<
    IMentors[],
    Error,
    IMentors[],
    QueryKey
  >,
) => {
  return useQuery<IMentors[]>({
    queryKey: ['mentors'],
    queryFn: async () => {
      const response = await api.get('/mentor')
      return response.data
    },
    ...options,
  })
}
