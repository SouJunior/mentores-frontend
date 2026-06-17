export type UserUpdateDTO = {
  specialties?: string[];
  profile?: string;
  profileKey?: string;
  copiedProfileFromMentor?: boolean;
  registerComplete?: boolean;
  gender?: string;
  aboutMe?: string;
  copiedAboutMeFromMentor?: boolean;
  fullName?: string;
};

export type SyncUserProfileSharedFieldsDTO = {
  aboutMe?: string;
  profile?: string;
  profileKey?: string;
  syncAboutMe?: boolean;
  syncProfile?: boolean;
};

export type UserUpdatePasswordDTO = {
  oldPassword: string;
  password: string;
  confirmPassword: string;
};
