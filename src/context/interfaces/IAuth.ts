import { UseQueryResult } from '@tanstack/react-query'

export interface IMentor {
  id?: string
  fullName: string
  dateOfBirth: string | Date
  password: string
  email: string
  emailConfirmed?: boolean
  specialties: string[]
  role: string
  gender: string
  aboutMe: string
  calendlyName?: string
  agendaName?: string
  registerComplete?: boolean
  profileKey?: string
  profile?: string
  accessAttempt?: number
  code?: string
  createdAt?: string | Date
  updatedAt?: string | Date
  deleted?: boolean
}

export interface UserSessionInfo {
  id: string
  token: string
}

export interface IAuthContextType {
  userSession: UserSessionInfo | null
  setUserSession: (user: UserSessionInfo | null) => void
  mentor: UseQueryResult<IMentor, Error>
}
