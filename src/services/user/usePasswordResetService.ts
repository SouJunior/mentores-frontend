import { UserPasswordServiceDTO } from '../interfaces/IUsePasswordResetServices'
import { api } from '@/lib/axios'

const usePasswordResetService = () => {
  const sendResetLink = async (data: UserPasswordServiceDTO) => {
    const email = data.email
    const response = await api.post(`/mentor/restoreAccount/${email}`)
    return response
  }

  return { sendResetLink }
}

export default usePasswordResetService
