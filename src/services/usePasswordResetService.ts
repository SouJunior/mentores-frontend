import axios from "axios";
import { IUsePasswordService, UserPasswordServiceDTO } from "./interfaces/IUsePasswordResetServices";
import { apiURL } from "@/utils/globals";
import { useState } from "react";


const usePasswordResetService = () : IUsePasswordService => {
  const [isModalOpen, setIsModalOpen] = useState(false);

    const sendResetLink = async(data: UserPasswordServiceDTO) => {
      try {
        console.log(data)
        setIsModalOpen(true)
      } catch (error) {
        console.log(error)
      }
    }


    const closeModal = () => {
      setIsModalOpen(false)
    }
   

    return  { sendResetLink, closeModal, isModalOpen }
}


export default usePasswordResetService