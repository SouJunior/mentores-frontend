export interface User {
  id: string;
  fullName: string;
  dateOfBirth: string;
  email: string;
  token:string;
}

export interface IUserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}
