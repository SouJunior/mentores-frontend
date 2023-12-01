export type UserUpdateDTO = {
  specialties?: string[]
  id?: string
  profile?: string
  profileKey?: string
  registerComplete?: boolean
  gender?: string
}

export interface IUserUpdate {
  handle: (data: UserUpdateDTO) => Promise<boolean>
}
