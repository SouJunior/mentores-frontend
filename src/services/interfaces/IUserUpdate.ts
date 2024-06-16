export type UserUpdateDTO = {
  specialties?: string[];
  profile?: string;
  profileKey?: string;
  registerComplete?: boolean;
  gender?: string;
  aboutMe?: string;
  fullName?: string;
  calendlyName?: string;
  agendaName?: string;
};

export type UserUpdatePasswordDTO = {
  oldPassword: string;
  password: string;
  confirmPassword: string;
};
