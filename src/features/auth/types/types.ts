import { ICalendlyUserInfo } from '@/services/interfaces/IUseUserCalendlyInfoService';

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
  accessAttempt?: number;
  code?: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  deleted?: boolean;
}

export interface Session {
  id: string;
  fullName: string;
  profile?: string | null;
  profileKey?: string | null;
  registerComplete?: boolean;
}

export type { ICalendlyUserInfo };
