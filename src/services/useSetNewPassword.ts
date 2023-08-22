import { IUserSetNewPassword } from "./interfaces/IUserSetNewPassword";
import { SetNewPasswordDTO } from "./interfaces/IUserSetNewPassword";
import axios from "axios";

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
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  

  return { handle };
};

export default setNewPasswordService;
