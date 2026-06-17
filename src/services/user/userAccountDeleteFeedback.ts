import { useAuthContext } from '@/context/Auth/AuthContext';
import { api } from '@/lib/axios';
import { FormValuesDeleteAccountDTO } from '../interfaces/IUserDeleteAccount';

export function UserAccountDeleteFeedback() {
  const { userSession } = useAuthContext();

  const token = userSession?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  async function accountDeleteFeedback(data: FormValuesDeleteAccountDTO) {
    await api.post('/account-deletion-feedback', data, config);
  }

  return { accountDeleteFeedback };
}
