import { UserPasswordServiceDTO } from '../interfaces/IUsePasswordResetServices'
import { api } from '@/lib/axios'

const usePasswordResetService = () => {
  const sendResetLink = async (data: UserPasswordServiceDTO) => {
    try {
      const email = data.email
      const response = await api.post(`/mentor/restoreAccount/${email}`)
      if (response.status === 201) {
        console.log('Email de recuperação enviado com sucesso!')
      }
    } catch (error) {
      console.log('Erro ao enviar o email de recuperação:', error)
    }
  }

  return { sendResetLink }
}

export default usePasswordResetService
