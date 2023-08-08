import axios from "axios";
import {
  IUserLoginService,
  UserLoginDTO,
} from "./interfaces/IUserLoginService"; 
import { useState } from "react";
import { useRouter } from "next/router";
import {  toast } from "react-toastify";

const UserLoginService = (): IUserLoginService => {

  const router = useRouter()
  const [countError, setCountError] = useState(0);
  const [submitButton, setSubmitButtonState] = useState(false);
  const [disable, setDisable] = useState(false)
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    errors: "",
  });
    

  const handleError = (message: string) => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      toastId: "customId",
    });
  };

  const handleErrorNotifications = () => {
    if (countError === 3) {
      handleError(
        'Você digitou a senha incorretamente e será bloqueado após cinco tentativas. Para cadastrar uma nova senha clique em "Esqueci minha senha".'
      );
    }
    if (countError >= 4) {
      setSubmitButton(true);
      handleError(
        'Por questões de segurança, bloqueamos sua conta após você ter atingido a quantidade máxima de tentativas de acesso. Para cadastrar uma nova senha, clique em "Esqueci minha senha".'
      );
      setDisable(true)
      setSubmitButton(false)
    }
  };

  


  const sendLogin = async (data: UserLoginDTO) => {
    const isValid = await validateForm(data);
    if (isValid) {
      try {
        const response = await axios.post(
          "https://mentores-backend.onrender.com/auth/login",
          data
        );
        setFormState({
          ...formState,
          errors: "",
        });
        router.push("/genericPage");
      } catch (error) {
        setFormState({
          ...formState,
          errors: "*E-mail ou senha incorretos.",
        });
        setCountError(countError + 1);
        handleErrorNotifications()
      }
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

  function checkFields(data: UserLoginDTO) {
    return data.email.trim() !== "" && data.password.trim() !== "";
  }

  const setSubmitButton = (isEnabled: boolean) => {
    setSubmitButtonState(isEnabled);
  };

  return { sendLogin, validateForm, formState, countError,disable,  checkFields, setSubmitButton, submitButton};
};


export default UserLoginService