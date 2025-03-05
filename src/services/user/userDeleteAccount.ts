import { useAuthContext } from '@/context/Auth/AuthContext';
import { api } from '@/lib/axios';
import { FormValuesDeleteAccountDTO } from '../interfaces/IUserDeleteAccount';
import UserLoginService from './userLoginService';

export function UserDeleteAccount() {
  const { userSession, setUserSession } = useAuthContext();
  const { logout } = UserLoginService();

  const id = userSession?.id;

  type ActionFlag = {
    action: 'delete' | 'disable';
  };

  async function deleteAccount(
    data: FormValuesDeleteAccountDTO,
    action: ActionFlag
  ) {
    try {
      await api.patch(`/mentor/${id}`, {
        data,
        action,
      });
      logout();
      setUserSession(null);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return { deleteAccount };
}
