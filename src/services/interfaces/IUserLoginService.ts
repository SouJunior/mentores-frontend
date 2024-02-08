import { User } from '@/context/interfaces/IAuth'

export type UserLoginDTO = {
  email: string
  password: string
  type: string
}

export interface IUserLoginService {
  sendLogin: (data: UserLoginDTO) => Promise<User | null | undefined>
  validateForm: (data: UserLoginDTO) => Promise<boolean>
  countError: number
  submitButton: boolean
  disable: boolean
  loading: boolean
  checkFields: (data: UserLoginDTO) => boolean
  setSubmitButton: (isEnabled: boolean) => void
}
