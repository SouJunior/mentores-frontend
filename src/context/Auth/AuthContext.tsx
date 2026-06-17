import { api } from '@/lib/axios';
import { sessionNameUserInfo } from '@/data/static-info';
import { getToken } from '@/lib/getToken';
import { ICalendlyUserInfo } from '@/services/interfaces/IUseUserCalendlyInfoService';
import UserLoginService from '@/services/user/userLoginService';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { jwtDecode } from 'jwt-decode';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  AccountProfile,
  ActiveProfileType,
  IAuthContextType,
  ProfileSwitchResponse,
  UserSessionInfo,
} from '../interfaces/IAuth';

export const AuthContent = createContext({} as IAuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userSession, setUserSession] = useState<UserSessionInfo | null>(null);
  const { logout } = UserLoginService();

  const token = userSession?.token;
  const activeProfileType = userSession?.profileType ?? 'mentor';

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const storedUser = getToken();
    const decodedToken = storedUser && jwtDecode(JSON.parse(storedUser).token);
    const isTokenExpires =
      decodedToken &&
      decodedToken.exp &&
      decodedToken.exp <= Math.floor(Date.now() / 1000);

    if (isTokenExpires) {
      logout();
      setUserSession(null);
      return;
    }

    if (storedUser) {
      let userParsed;
      try {
        userParsed = JSON.parse(storedUser);
      } catch {
        userParsed = undefined;
      }
      setUserSession(userParsed);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const persistUserSession = (sessionInfo: UserSessionInfo) => {
    const currentStorage =
      localStorage.getItem(sessionNameUserInfo) !== null
        ? localStorage
        : sessionStorage;

    currentStorage.setItem(sessionNameUserInfo, JSON.stringify(sessionInfo));
  };

  const profileResponse = useQuery({
    queryKey: ['profile', activeProfileType, userSession?.id],
    queryFn: async () => {
      const endpoint =
        activeProfileType === 'mentor'
          ? `/mentor/${userSession?.id}`
          : `/user/${userSession?.id}`;
      const response = await api.get<AccountProfile>(endpoint);
      return response.data;
    },
    enabled: !!userSession?.id,
  });

  const calendlyResponse = useQuery({
    queryKey: ['calendlyInfo', userSession?.id],
    queryFn: async () => {
      const response = await api.get<ICalendlyUserInfo>(
        `/calendly/mentorInfo`,
        config
      );
      return response.data;
    },
    enabled: !!userSession?.id && activeProfileType === 'mentor',
  });

  const profilesResponse = useQuery({
    queryKey: ['profiles', userSession?.id, userSession?.profileType],
    queryFn: async () => {
      const response = await api.get('/auth/profiles', config);
      return response.data;
    },
    enabled: !!userSession?.token,
  });

  const switchProfile = async (
    profileType: ActiveProfileType
  ): Promise<ProfileSwitchResponse | undefined> => {
    if (!userSession?.token || profileType === activeProfileType) {
      return undefined;
    }

    const type = profileType === 'mentor' ? 'mentor' : 'user';
    const response = await api.post<ProfileSwitchResponse>(
      '/auth/switch-profile',
      { type },
      {
        headers: {
          Authorization: `Bearer ${userSession.token}`,
        },
      }
    );

    const nextProfileType: 'mentor' | 'mentee' =
      response.data.profileType === 'mentor' ? 'mentor' : 'mentee';

    const sessionInfo = {
      id: String(response.data.info.id),
      token: response.data.token,
      profileType: nextProfileType,
    };

    persistUserSession(sessionInfo);
    setUserSession(sessionInfo);
    return response.data;
  };

  useEffect(() => {
    if (
      profileResponse.error instanceof AxiosError &&
      profileResponse.error.response?.status === 404
    ) {
      logout();
      setUserSession(null);
    }
  }, [logout, profileResponse.error]);

  return (
    <AuthContent.Provider
      value={{
        userSession,
        setUserSession,
        mentor: { ...profileResponse },
        activeProfile: { ...profileResponse },
        activeProfileType,
        switchProfile,
        profiles: { ...profilesResponse },
        mentorCalendlyInfo: { ...calendlyResponse },
      }}
    >
      {children}
    </AuthContent.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContent);

  if (context === undefined) {
    throw new Error('Ocorreu algum erro no provider!');
  }
  return context;
};
