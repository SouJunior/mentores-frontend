export interface User {
  id: string;
  fullName: string;
  dateOfBirth: string;
  email: string;
  profile?: string | null;
  profileKey?: string | null;
  token: string;
  specialties?: string[]; 
  registerComplete: boolean;
  createdAt: string; 
  updatedAt: string;
}


export interface IAuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout:() =>void;
}
