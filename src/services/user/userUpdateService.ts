import { useAuthContext } from '@/context/Auth/AuthContext';
import { api } from '@/lib/axios';
import {
  SyncUserProfileSharedFieldsDTO,
  UserUpdateDTO,
  UserUpdatePasswordDTO,
} from '../interfaces/IUserUpdate';
import { ICalendlyUserInfo } from '../interfaces/IUseUserCalendlyInfoService';

const UserUpdateService = () => {
  const { userSession, activeProfileType } = useAuthContext();

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

  const handleUserData = async (data: UserUpdateDTO) => {
    await api.put(
      `/user/${id}`,
      {
        id,
        ...data,
      },
      config
    );
  };

  const discardUserProfileDraft = async (tokenOverride?: string) => {
    await api.delete(`/user/profile/draft`, {
      headers: {
        Authorization: `Bearer ${tokenOverride ?? token}`,
      },
    });
  };

  const syncUserProfileSharedFields = async (
    data: SyncUserProfileSharedFieldsDTO
  ) => {
    await api.patch(`/user/profile/shared-fields`, data, config);
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

  const updateMentorCalendlyInfo = async (data: ICalendlyUserInfo) => {
    await api.put(
      `/calendly/mentorInfo`,
      {
        ...data,
      },
      config
    );
  };

  const updatePassword = async (data: UserUpdatePasswordDTO) => {
    const endpoint =
      activeProfileType === 'mentor'
        ? `/mentor/change_password`
        : `/user/change_password`;

    await api.put(
      endpoint,
      {
        oldPassword: data.oldPassword,
        password: data.password,
        confirmPassword: data.confirmPassword,
      },
      config
    );
  };

  return {
    handleMentorData,
    handleUserData,
    discardUserProfileDraft,
    syncUserProfileSharedFields,
    handleMentorCalendlyInfo,
    updateMentorCalendlyInfo,
    updatePassword,
  };
};

export default UserUpdateService;
