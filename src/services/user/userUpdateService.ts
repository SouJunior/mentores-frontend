import axios from "axios";
import { IUserUpdate, UserUpdateDTO } from "../interfaces/IUserUpdate";
import useUser from "@/context/Auth/useUser";

const userUpdateService = (): IUserUpdate => {
  const { user } = useUser();

  const token = user?.token;
  const id = user?.id;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handle = async (data: UserUpdateDTO) => {
    try {
      const url = `https://mentores-backend.onrender.com/mentor/${id}`;
      const response = await axios.put(url, data, config);
    } catch (error) {
      console.error("Erro ao atualizar:", error);
    }
  };

  return { handle };
};

export default userUpdateService;
