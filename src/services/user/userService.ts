import { User } from "../../context/interfaces/IAuth";

export function createUserFromResponseData(responseData: any): User | null {
  if (!responseData || !responseData.info) {
    return null;
  }

  const user: User = {
    token: responseData.token,
    id: responseData.info.id || "",
    fullName: responseData.info.fullName || "",
    dateOfBirth: responseData.info.dateOfBirth || "",
    email: responseData.info.email || "",
    specialties:responseData.specialties,
    profile:responseData.info.profile,
    aboutMe: responseData.info.aboutMe,
    registerComplete: responseData.info.registerComplete,
    createdAt:responseData.info.createdAt,
    updatedAt:responseData.info.updatedAt
    
  };

  return user;
}
