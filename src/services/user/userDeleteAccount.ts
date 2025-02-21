import { useAuthContext } from '@/context/Auth/AuthContext';
import { api } from '@/lib/axios';
import { FormValuesDeleteAccountDTO } from '../interfaces/IUserDeleteAccount';
import UserLoginService from './userLoginService';

export function UserDeleteAccount() {
  const { userSession, setUserSession } = useAuthContext();
  const { logout } = UserLoginService();

  const id = userSession?.id;

  async function deleteAccount(
    password: string,
    data: FormValuesDeleteAccountDTO
  ) {
    try {
      const response = await api.put(`/mentor/${id}`, {
        password: password,
        data: data,
      });
      console.log(response.data);
      logout();
      setUserSession(null);
    } catch (error) {
      console.error(error);
    }
  }

  return { deleteAccount };
}
