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
  gender: string;
  registerComplete: boolean;
  calendlyName: string;
  profile: string | null;
  profileKey: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface UserLoginResponse {
  token: string;
  info: UserLoginInfoResponse;
}
