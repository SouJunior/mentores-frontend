import { useAuthContext } from '@/context/Auth/AuthContext';
import { api } from '@/lib/axios';
import {
  UserUpdateDTO,
  UserUpdatePasswordDTO,
} from '../interfaces/IUserUpdate';
import { ICalendlyUserInfo } from '../interfaces/IUseUserCalendlyInfoService';

const UserUpdateService = () => {
  const { userSession } = useAuthContext();

  const token = userSession?.token;
  const id = userSession?.id;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleMentorData = async (data: UserUpdateDTO) => {
    await api.put(
      `/mentor`,
      {
        id,
        ...data,
      },
      config
    );
  };

  const handleMentorCalendlyInfo = async (data: ICalendlyUserInfo) => {
    await api.post(
      `/calendly`,
      {
        ...data,
      },
      config
    );
  };

  const updatePassword = async (data: UserUpdatePasswordDTO) => {
    await api.put(
      `/mentor/change_password`,
      {
        oldPassword: data.oldPassword,
        password: data.password,
        confirmPassword: data.confirmPassword,
      },
      config
    );
  };

  return { handleMentorData, handleMentorCalendlyInfo, updatePassword };
};

export default UserUpdateService;
