import { useAuthContext } from '@/context/Auth/AuthContext'
import { UserUpdateDTO } from '../interfaces/IUserUpdate'
import { api } from '@/lib/axios'

const UserUpdateService = () => {
  const { userSession } = useAuthContext()

  const token = userSession?.token
  const id = userSession?.id

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const handle = async (data: UserUpdateDTO) => {
    await api.put(
      `/mentor`,
      {
        id,
        ...data,
      },
      config,
    )
  }

  return { handle }
}

export default UserUpdateService
