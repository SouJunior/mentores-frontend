import {
  IUserLoginService,
  UserLoginDTO,
} from "../interfaces/IUserLoginService";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { setCookie, getCookie } from "cookies-next";
import useUser from "@/context/Auth/useUser";
import { createUserFromResponseData } from "./userService";
import { loginApi } from "../loginApi";

const UserLoginService = (): IUserLoginService => {
  const router = useRouter();
  const userContext = useUser();
  const [countError, setCountError] = useState(0);
  const [submitButton, setSubmitButtonState] = useState(false);
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
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
      setDisable(true);
      setSubmitButton(true);
      setCookie("disable", "true");
    }
  };

  const sendLogin = async (data: UserLoginDTO) => {
    const isValid = await validateForm(data);
    if (isValid) {
      setLoading(true);
      try {
        // const response = await loginApi(data);
        // const userFromResponse = createUserFromResponseData(response);
        const newUser = userContext.setUser({
          id: "1", 
          fullName: "Luiz Bello",
          dateOfBirth: "15/12/1991",
          email: "luiz@luiz.com",
          avatar: "https://img.freepik.com/vetores-premium/imagem-de-perfil-de-personagem-de-desenho-animado-avatar-jovem_18591-55058.jpg",
          token: "aksjdakl2390uksajdkals",
          specialities: [],
        });

        const userStringfy = JSON.stringify(newUser)

        localStorage.setItem('user', userStringfy)
        setFormState({
          ...formState,
          errors: "",
        });
        router.push("/onBoarding");
      } catch (error) {
        setFormState({
          ...formState,
          errors: "*E-mail ou senha incorretos.",
        });
        setCountError(countError + 1);
        handleErrorNotifications();
      }
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    const isDisable = getCookie("disable");

    isDisable ? setDisable(false) : setDisable(false);
  }, [disable]);

  const validateForm = async (data: UserLoginDTO): Promise<boolean> => {
    if (!data.email || !data.password) {
      setFormState({
        ...formState,
        errors: "*E-mail ou senha incorretos.",
      });
      return false;
    } else {
      return true;
    }
  };

  function checkFields(data: UserLoginDTO) {
    return data.email.trim() !== "" && data.password.trim() !== "";
  }

  const setSubmitButton = (isEnabled: boolean) => {
    setSubmitButtonState(isEnabled);
  };

  return {
    sendLogin,
    validateForm,
    formState,
    countError,
    disable,
    loading,
    checkFields,
    setSubmitButton,
    submitButton,
  };
};

export default UserLoginService;
