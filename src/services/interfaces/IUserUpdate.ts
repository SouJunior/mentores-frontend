export interface IUserUpdate {
  handle: (data: UserUpdateDTO) => Promise<void>;
}

export type UserUpdateDTO = {
  specialties: string[];
};
