import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Confirmacao = () => {
  const router = useRouter();
  const { code, email } = router.query;

  const handleConfirmation = async (code, email) => {
    try {
      const encodedEmail = encodeURIComponent(email);
      const response = await axios.patch(
        `https://mentores-backend.onrender.com/user/active?code=${code}&email=${encodedEmail}`
      );

      console.log(response);

      if (response.status === 200) {
        toast.success("Email confirmado com sucesso!");

        setTimeout(() => {
          router.push("/LoginPage");
        }, 1000);
      } else {
        toast.error("Erro ao confirmar o email. Tente novamente mais tarde.");
        router.push("/LoginPage");
      }
    } catch (error) {
      toast.error("Erro ao confirmar o email. Tente novamente mais tarde.");
      router.push("/LoginPage");
    }
  };

  useEffect(() => {
    if (code && email) {
      handleConfirmation(code, email);
    }
  }, [code, email]);

  return <></>;
};

export default Confirmacao;
