import { createContext, ReactNode, useState } from "react";
import { IUserContextType, User } from "./interfaces/IUser";

export const UserContext = createContext<IUserContextType | undefined>(
  undefined
);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
