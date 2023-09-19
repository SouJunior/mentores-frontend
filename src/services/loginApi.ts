import axios from "axios";
import { UserLoginDTO } from "./interfaces/IUserLoginService";

export async function loginApi(data: UserLoginDTO) {
  try {
    const response = await axios.post(
      "https://mentores-backend.onrender.com/auth/login",
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
