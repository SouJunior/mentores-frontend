import { useAuthContext } from '@/context/Auth/AuthContext';
import { api } from '@/lib/axios';

export function UserMentorSchedule() {
  const { userSession } = useAuthContext();

  const token = userSession?.token;
  const id = userSession?.id;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  async function fetchMentorSchedule() {
    try {
      const response = await api.get(`/calendly/schedules?id=${id}`, config);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  return { fetchMentorSchedule };
}
