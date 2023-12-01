import { Dispatch, SetStateAction } from 'react'

export interface IMentors {
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
  registerComplete?: boolean
  profileKey?: string
  profile?: string
  accessAttempt?: number
  code?: string
  createdAt?: string | Date
  updatedAt?: string | Date
  deleted?: boolean
}

export interface IuseMentorsService {
  fetchMentors: () => Promise<void>

  mentors: IMentors[]
  setMentors: Dispatch<SetStateAction<IMentors[]>>
  mentorsErrors: string
  setMentorsErrors: Dispatch<SetStateAction<string>>
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
}
