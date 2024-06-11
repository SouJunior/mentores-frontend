import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { IAuthContextType, IMentor, UserSessionInfo } from '../interfaces/IAuth'
import { sessionNameUserInfo } from '@/data/static-info'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { AxiosError } from 'axios'
import { jwtDecode } from 'jwt-decode'
import UserLoginService from '@/services/user/userLoginService'

export const AuthContent = createContext({} as IAuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userSession, setUserSession] = useState<UserSessionInfo | null>(null)
  const { logout } = UserLoginService()

  useEffect(() => {
    const storedUser =
      localStorage.getItem(sessionNameUserInfo)?.toString() ||
      sessionStorage.getItem(sessionNameUserInfo)?.toString()
    const decodedToken = storedUser && jwtDecode(JSON.parse(storedUser).token)
    const isTokenExpires =
      decodedToken &&
      decodedToken.exp &&
      decodedToken.exp <= Math.floor(Date.now() / 1000)

    if (isTokenExpires) {
      logout()
      setUserSession(null)
      return
    }

    if (storedUser) {
      let userParsed
      try {
        userParsed = JSON.parse(storedUser)
      } catch {
        userParsed = undefined
      }
      setUserSession(userParsed)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const mentorResponse = useQuery({
    queryKey: ['mentor', userSession?.id],
    queryFn: async () => {
      const response = await api.get<IMentor>(`/mentor/${userSession?.id}`)
      return response.data
    },
    enabled: !!userSession?.id,
  })

  if (
    mentorResponse.error instanceof AxiosError &&
    mentorResponse.error.response?.status === 404
  ) {
    logout()
  }

  return (
    <AuthContent.Provider
      value={{ userSession, setUserSession, mentor: { ...mentorResponse } }}
    >
      {children}
    </AuthContent.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContent)

  if (context === undefined) {
    throw new Error('Ocorreu algum erro no provider!')
  }
  return context
}
