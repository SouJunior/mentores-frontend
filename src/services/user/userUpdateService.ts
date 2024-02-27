import { useAuthContext } from '@/context/Auth/AuthContext'
import { UserUpdateDTO, UserUpdatePasswordDTO } from '../interfaces/IUserUpdate'
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

  const updatePassword = async (data: UserUpdatePasswordDTO) => {
    await api.put(
      `/mentor/change_password`,
      {
        oldPassword: data.oldPassword,
        password: data.password,
        confirmPassword: data.confirmPassword,
      },
      config,
    )
  }

  return { handle, updatePassword }
}

export default UserUpdateService
