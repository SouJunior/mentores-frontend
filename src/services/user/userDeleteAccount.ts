import { useAuthContext } from '@/context/Auth/AuthContext';
import { api } from '@/lib/axios';
import UserLoginService from './userLoginService';

export function UserDeleteAccount() {
  const { setUserSession, userSession } = useAuthContext();
  const { logout } = UserLoginService();

  const token = userSession?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  async function deleteAccount() {
    try {
      await api.patch(`/mentor/delete-mentor`, {}, config);
      logout();
      setUserSession(null);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return { deleteAccount };
}
