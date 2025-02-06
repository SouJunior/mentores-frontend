import { api } from '@/lib/axios';
import {
  IUserSetNewPassword,
  SetNewPasswordDTO,
} from '../interfaces/IUserSetNewPassword';

const setNewPasswordService = (): IUserSetNewPassword => {
  const handle = async (
    data: SetNewPasswordDTO,
    { code, email }: { code: string; email: string }
  ) => {
    try {
      await api.patch(
        `/mentor/restoreAccount/redefinePass`,
        {
          password: data.password,
          confirmPassword: data.confirmPassword,
        },
        {
          params: {
            code,
            email,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return { handle };
};

export default setNewPasswordService;
