import { api } from '@/lib/axios'
import {
  QueryKey,
  UndefinedInitialDataOptions,
  useQuery,
} from '@tanstack/react-query'
import { ITestimony } from '../interfaces/IUseTestimonyService'

export const useTestimonyService = (
  options?: UndefinedInitialDataOptions<
    ITestimony[],
    Error,
    ITestimony[],
    QueryKey
  >,
) => {
  return useQuery<ITestimony[]>({
    queryKey: ['testimonies'],
    queryFn: async () => {
      const response = await api.get('/testimony')
      return response.data
    },
    ...options,
  })
}
