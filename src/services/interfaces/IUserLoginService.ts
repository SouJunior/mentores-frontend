export interface IUserLoginService {
  sendLogin: (data: UserLoginDTO) => Promise<void>;
  validateForm: (data: UserLoginDTO) => Promise<boolean>;
  formState:{
    email:string,
    password:string,
    errors:string
  };
  countError: number;
  submitButton: boolean;
  disable:boolean;
  checkFields:(data:UserLoginDTO) => boolean;
  setSubmitButton: (isEnabled: boolean) => void;
} 

export type UserLoginDTO = {
  email: string;
  password: string;
};
