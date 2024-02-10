import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { IAuthContextType, IMentor, UserSessionInfo } from '../interfaces/IAuth'
import { getCookie } from 'cookies-next'
import { sessionNameUserInfo } from '@/data/static-info'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'

export const AuthContent = createContext({} as IAuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userSession, setUserSession] = useState<UserSessionInfo | null>(null)

  useEffect(() => {
    const storedUser = getCookie(sessionNameUserInfo)?.toString()

    if (storedUser) {
      let userParsed
      try {
        userParsed = JSON.parse(storedUser)
      } catch {
        userParsed = undefined
      }
      setUserSession(userParsed)
    }
  }, [])

  const mentorResponse = useQuery({
    queryKey: ['mentor', userSession?.id],
    queryFn: async () => {
      const response = await api.get<IMentor>(`/mentor/${userSession?.id}`)
      return response.data
    },
    enabled: !!userSession?.id,
  })

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
