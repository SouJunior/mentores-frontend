import { UserLoginDTO } from './interfaces/IUserLoginService'
import { api } from '@/lib/axios'

export async function loginApi(data: UserLoginDTO) {
  try {
    const response = await api.post('/auth/login', data)
    return response.data
  } catch (error) {
    throw error
  }
}
