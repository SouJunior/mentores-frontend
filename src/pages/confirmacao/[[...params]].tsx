import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

interface ConfirmationPageProps {
  code: string;
  email: string;
}

const ConfirmationPage = ({ code, email }: ConfirmationPageProps) => {
  const router = useRouter();

  const handleConfirmation = async () => {
    try {
      const encodedEmail = encodeURIComponent(email);
      const response = await axios.patch(
        `https://mentores-backend.onrender.com/mentor/active?code=${code}&email=${encodedEmail}`
      );
      router.push("/login");
    } catch (error) {
      console.log(error)
      router.push("/login");
    }
  };

  useEffect(() => {
    handleConfirmation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { code, email } = context.query;

  if (!code || !email) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      code: code,
      email: email,
    },
  };
};

export default ConfirmationPage;
