export interface IUserUpdate {
  handle: (data: UserUpdateDTO) => Promise<void>;
}

export type UserUpdateDTO = {
  specialties?: string[];
  id?:string;
  profile?:string;
  profileKey?:string;
  registerComplete?:boolean
  gender?:string;
};

