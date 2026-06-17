export type UserCredentialsDTO = {
  email: string;
  password: string;
  type?: string;
};

export interface UserLoginInfoResponse {
  id: string;
  fullName: string;
  dateOfBirth: string;
  email: string;
  specialties: string[];
  role: string | null;
  aboutMe: string | null;
  copiedAboutMeFromMentor?: boolean;
  gender: string;
  registerComplete: boolean;
  calendlyName: string;
  profile: string | null;
  profileKey: string | null;
  copiedProfileFromMentor?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserLoginResponse {
  token: string;
  info: UserLoginInfoResponse;
  profileType: 'mentor' | 'user';
}
