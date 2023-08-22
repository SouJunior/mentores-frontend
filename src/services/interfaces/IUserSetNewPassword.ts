export interface IUserSetNewPassword {
  handle: (data: SetNewPasswordDTO, options: { code: string, email: string }) => Promise<void>;
}

export type SetNewPasswordDTO = {
  password: string;
  confirmPassword: string;
};
