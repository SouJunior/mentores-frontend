import { api } from '@/lib/axios';
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
  IAuthContextType,
  IMentor,
  UserSessionInfo,
} from '../interfaces/IAuth';

export const AuthContent = createContext({} as IAuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userSession, setUserSession] = useState<UserSessionInfo | null>(null);
  const { logout } = UserLoginService();

  const token = userSession?.token;

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

  const mentorResponse = useQuery({
    queryKey: ['mentor', userSession?.id],
    queryFn: async () => {
      const response = await api.get<IMentor>(`/mentor/${userSession?.id}`);
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
    enabled: !!userSession?.id,
  });

  if (
    (mentorResponse.error instanceof AxiosError &&
      mentorResponse.error.response?.status === 404) ||
    (calendlyResponse.error instanceof AxiosError &&
      calendlyResponse.error.response?.status === 404)
  ) {
    logout();
  }

  return (
    <AuthContent.Provider
      value={{
        userSession,
        setUserSession,
        mentor: { ...mentorResponse },
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
