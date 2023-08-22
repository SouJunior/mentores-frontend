export interface IUserSetNewPassword {
  handle: (data: SetNewPasswordDTO) => Promise<void>;
}

export type SetNewPasswordDTO = {
  password: string;
  confirmPassword: string;
};
