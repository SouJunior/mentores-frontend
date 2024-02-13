import {
  UserCredentialsDTO,
  UserLoginResponse,
} from '../interfaces/IUserLoginService'
import { deleteCookie, getCookie } from 'cookies-next'
import { ResourceNotFound } from '../errors/resource-not-found'
import { api } from '@/lib/axios'
import { sessionNameUserInfo } from '@/data/static-info'
import { UserAlreadyLoggedIn } from '../errors/user-already-logged-in'

const UserLoginService = () => {
  const login = async (data: UserCredentialsDTO) => {
    if (!data.email.trim() || !data.password.trim()) {
      throw new ResourceNotFound()
    }

    const sessionCookie = getCookie(sessionNameUserInfo)

    if (sessionCookie) {
      throw new UserAlreadyLoggedIn()
    }

    const response = await api.post<UserLoginResponse>('/auth/login', {
      email: data.email,
      password: data.password,
      type: data.type,
    })

    return response
  }

  const logout = () => {
    deleteCookie(sessionNameUserInfo)
  }

  return {
    login,
    logout,
  }
}

export default UserLoginService
