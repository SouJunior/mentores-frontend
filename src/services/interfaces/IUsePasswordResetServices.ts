export type UserPasswordServiceDTO = {
  email: string
}

export interface IUsePasswordService {
  sendResetLink: (email: UserPasswordServiceDTO) => Promise<void>
  isModalOpen: boolean
  closeModal: () => void
}
