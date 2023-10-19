export const apiURL = "https://mentores-backend.onrender.com";

export interface MentorCardProp {
  id?: string;
  fullName: string;
  aboutMe?: string | null;
  profile: string;
  gender?:string;
  specialties: string[];
  registerComplete?:boolean;
}
