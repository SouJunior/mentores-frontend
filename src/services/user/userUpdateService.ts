import { IUserUpdate, UserUpdateDTO } from '../interfaces/IUserUpdate'
import useUser from '@/context/Auth/useUser'
import { api } from '@/lib/axios'

const UserUpdateService = (): IUserUpdate => {
  const { user } = useUser()

  const token = user?.token
  const id = user?.id

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const handle = async (data: UserUpdateDTO) => {
    try {
      await api.put(`/mentor/${id}`, data, config)
      return true
    } catch (error) {
      return false
    }
  }

  return { handle }
}

export default UserUpdateService
