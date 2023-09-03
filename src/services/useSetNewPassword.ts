import { IUserSetNewPassword } from "./interfaces/IUserSetNewPassword";
import { SetNewPasswordDTO } from "./interfaces/IUserSetNewPassword";
import axios from "axios";
import { toast } from "react-toastify";

const setNewPasswordService = (): IUserSetNewPassword => {
  const handle = async (data: SetNewPasswordDTO, { code, email }: { code: string, email: string }) => {
    try {
      const response = await axios.patch(
        `https://mentores-backend.onrender.com/user/restoreAccount/redefinePass`,
        {
          password: data.password,
          confirmPassword: data.confirmPassword,
        },
        {
          params: {
            code: code,
            email: email,
          },
        }
      );
      toast.success('🦄Toast provisório de sucesso!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  

  return { handle };
};

export default setNewPasswordService;
