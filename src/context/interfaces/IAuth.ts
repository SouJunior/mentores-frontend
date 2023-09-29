export interface User {
  id: string;
  fullName: string;
  dateOfBirth: string;
  email: string;
  avatar?:string;
  token:string;
  specialities?:[]
}

export interface IAuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}
