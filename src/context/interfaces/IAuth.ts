import { ICalendlyUserInfo } from '@/services/interfaces/IUseUserCalendlyInfoService';
import { UseQueryResult } from '@tanstack/react-query';

export interface IMentor {
  id?: string;
  fullName: string;
  dateOfBirth: string | Date;
  password: string;
  email: string;
  emailConfirmed?: boolean;
  specialties: string[];
  role: string;
  gender: string;
  aboutMe: string;
  registerComplete?: boolean;
  profileKey?: string;
  profile?: string;
  copiedAboutMeFromMentor?: boolean;
  copiedProfileFromMentor?: boolean;
  accessAttempt?: number;
  code?: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  deleted?: boolean;
  isProfilePaused?: boolean;
}

export interface IUserProfile {
  id?: string;
  fullName: string;
  dateOfBirth: string | Date;
  password?: string;
  email: string;
  emailConfirmed?: boolean;
  specialties?: string[];
  gender?: string;
  aboutMe?: string;
  copiedAboutMeFromMentor?: boolean;
  registerComplete?: boolean;
  profileKey?: string;
  profile?: string;
  copiedProfileFromMentor?: boolean;
  accessAttempt?: number;
  code?: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  deleted?: boolean;
  isProfilePaused?: boolean;
}

export type ActiveProfileType = 'mentor' | 'mentee';
export type ApiProfileType = 'mentor' | 'user';
export type AccountProfile = IMentor | IUserProfile;

export interface ProfileAvailabilityItem {
  exists: boolean;
  paused: boolean;
  deleted: boolean;
  registerComplete: boolean;
}

export interface ProfileAvailabilityResponse {
  defaultProfile: ApiProfileType | null;
  mentor: ProfileAvailabilityItem;
  mentee: ProfileAvailabilityItem;
}

export interface ProfileSwitchResponse {
  token: string;
  info: AccountProfile;
  profileType: ApiProfileType;
}

export interface UserSessionInfo {
  id: string;
  token: string;
  profileType?: ActiveProfileType;
}

export interface IAuthContextType {
  userSession: UserSessionInfo | null;
  setUserSession: (user: UserSessionInfo | null) => void;
  mentor: UseQueryResult<AccountProfile, Error>;
  activeProfile: UseQueryResult<AccountProfile, Error>;
  activeProfileType: ActiveProfileType;
  switchProfile: (
    profileType: ActiveProfileType
  ) => Promise<ProfileSwitchResponse | undefined>;
  profiles: UseQueryResult<ProfileAvailabilityResponse, Error>;
  mentorCalendlyInfo: UseQueryResult<ICalendlyUserInfo, Error>;
}
