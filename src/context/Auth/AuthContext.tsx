import { createContext, ReactNode, useState } from "react";
import { IAuthContextType, User } from "../interfaces/IAuth";

export const AuthContent = createContext<IAuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);



  return (
    <AuthContent.Provider value={{ user, setUser,  }}>
      {children}
    </AuthContent.Provider>
  );
}
