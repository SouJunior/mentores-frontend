import { User } from "../../context/interfaces/IUser";

export function createUserFromResponseData(responseData: any): User | null {
  if (!responseData || !responseData.user) {
    return null;
  }

  const user: User = {
    token: responseData.token,
    id: responseData.user.id || "",
    fullName: responseData.user.fullName || "",
    dateOfBirth: responseData.user.dateOfBirth || "",
    email: responseData.user.email || "",
  };

  return user;
}
