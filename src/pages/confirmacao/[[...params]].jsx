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
        router.push('/LoginPage')
    } catch (error) {
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
