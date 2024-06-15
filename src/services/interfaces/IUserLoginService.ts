export type UserCredentialsDTO = {
  email: string;
  password: string;
  type: string;
};

export interface UserLoginInfoResponse {
  id: string;
  fullName: string;
  dateOfBirth: string;
  email: string;
  specialties: string[];
  role: string | null;
  aboutMe: string | null;
  calendlyName: string | null;
  agendaName: string | null;
  gender: string;
  registerComplete: boolean;
  profile: string | null;
  profileKey: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface UserLoginResponse {
  token: string;
  info: UserLoginInfoResponse;
}
