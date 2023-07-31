import axios from "axios";
import { IUsePasswordService, UserPasswordServiceDTO } from "./interfaces/IUsePasswordResetServices";
import { apiURL } from "@/utils/globals";


const usePasswordResetService = () : IUsePasswordService => {

    const sendResetLink = async(data: UserPasswordServiceDTO) => {
        try {
            await axios.post(`${apiURL}/resetPassword`, data)
        } catch (error) {
            console.log(error)
        }
    }

    return  { sendResetLink }
}