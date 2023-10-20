export interface User {
  id?: string;
  fullName?: string;
  dateOfBirth?: string;
  email?: string;
  profile?: string | null;
  aboutMe?: string | null;
  gender?:string;
  token?: string;
  specialties?: string[]; 
  registerComplete?: boolean;
  createdAt?: string; 
  updatedAt?: string;
}


export interface IAuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout:() =>void;
  updateUser:(updatedUser:User) => void;
}
