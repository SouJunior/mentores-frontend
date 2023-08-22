import axios from "axios";
import {
  IUsePasswordService,
  UserPasswordServiceDTO,
} from "./interfaces/IUsePasswordResetServices";
import { useState } from "react";

const usePasswordResetService = (): IUsePasswordService => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sendResetLink = async (data: UserPasswordServiceDTO) => {
    try {
      const email = data.email;
      const encodedEmail = encodeURIComponent(email);
      console.log(email)
      const response = await axios.post(
        `https://mentores-backend.onrender.com/user/restoreAccount/${email}`,
      );
      if (response.status === 201) {
        setIsModalOpen(true);
        console.log("Email de recuperação enviado com sucesso!");
      } else {
        console.log("Algo deu errado ao enviar o email de recuperação.");
      }
    } catch (error) {
      console.log("Erro ao enviar o email de recuperação:", error);
    }
  }; 

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return { sendResetLink, closeModal, isModalOpen };
};

export default usePasswordResetService;
