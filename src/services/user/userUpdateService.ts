import { useAuthContext } from '@/context/Auth/AuthContext'
import { IUserUpdate, UserUpdateDTO } from '../interfaces/IUserUpdate'
import { api } from '@/lib/axios'

const UserUpdateService = (): IUserUpdate => {
  const { userSession } = useAuthContext()

  const token = userSession?.token
  const id = userSession?.id

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const handle = async (data: UserUpdateDTO) => {
    try {
      await api.put(
        `/mentor`,
        {
          id,
          ...data,
        },
        config,
      )
      return true
    } catch (error) {
      return false
    }
  }

  return { handle }
}

export default UserUpdateService
