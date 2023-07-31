export interface IUsePasswordService {
    sendResetLink: (email: UserPasswordServiceDTO) => Promise<void>;
    
  }

  export type UserPasswordServiceDTO = {
    email: string;
  }