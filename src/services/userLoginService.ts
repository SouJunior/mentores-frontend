import axios from "axios";
import {
  IUserLoginService,
  UserLoginDTO,
} from "./interfaces/IUserLoginService";
import { useState } from "react";
import { useRouter } from "next/router";

const userLoginService = (): IUserLoginService => {

  const router = useRouter()
  const [countError, setCountError] = useState(0);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    errors: "",
  });
    
  const sendLogin = async (data: UserLoginDTO) => {

    await validateForm(data)
    try {
      const response = await axios.post(
        "https://mentores-backend.onrender.com/auth/login",
        data
      );
      setFormState({
        ...formState,
        errors: ""
      })
      router.push('/genericPage')
    } catch (error) {
      setFormState({
        ...formState,
        errors:"*E-mail ou senha incorretos."
      })
      setCountError(countError + 1)
      console.log(countError)
    }
  };

  const validateForm = async(data:UserLoginDTO):Promise<boolean> => { 
    if(!data.email || !data.password){
      setFormState({
        ...formState,
        errors:"*E-mail ou senha incorretos."
      })
      return false
    }else {
      return true
    }   
  }

  return { sendLogin, validateForm, formState, countError};
};


export default userLoginService