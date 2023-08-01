import CardLoading from "@/assets/loading.gif";
import souJuniorLogoImg from "@/assets/logos/sou-junior.svg";
import { Button } from "@/components/atoms/Button";
import { InputLogin } from "@/components/atoms/InputLogin";
import axios from "axios";
import { setCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Checkbox } from "../../atoms/Checkbox";
import { ContainerForm } from "./style";

export function FormLogin() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepConnected, setKeepConnected] = useState(false);
  const [countError, setCountError] = useState(0);
  const [disable, setDisable] = useState(false);
  const [botaoConcluir, setBotaoConcluir] = useState(false)
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    errors: "",
  });
  const [toastMessage, setToastMessage] = useState(
    'Você digitou a senha incorretamente e será bloqueado após cinco tentativas. Para cadastrar um nova senha clique em "Esqueci a senha".'
  );

  const notify = () => {
    toast.error(toastMessage, {
      position: toast.POSITION.TOP_CENTER,
      toastId: "customId",
    });
  };

  function validateForm() {
    if (!password || !email) {
      setFormState({
        ...formState,
        errors: "*E-mail ou senha incorretos.",
      });
      setCountError(countError + 1);
      return;
    } else {
      return true;
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post(
          "https://mentores-backend.onrender.com/auth/login",
          {
            email: email,
            password: password,
          }
        );
        if (keepConnected) {
          setCookie("U", response.data);
        }
        console.log(response.data);
        console.log("USUÁRIO LOGADO");
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (error) {
        console.log(error);

        console.log("ERRO AO FAZER O LOGIN");
        setFormState({ ...formState, errors: "*E-mail ou senha incorretos." });
        setCountError(countError + 1);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (countError == 4) {
      console.log(countError, 'aqui');
      setToastMessage(
        'Você digitou a senha incorretamente e será bloqueado após cinco tentativas. Para cadastrar um nova senha clique em "Esqueci minha senha".'
      );
      notify()
    }
    if (countError >= 5) {
      setToastMessage(
        'Por questões de segurança, bloqueamos sua conta após você ter atingido a quantidade máxima de tentativas de acesso. Para cadastrar uma nova senha, clique em "Esqueci minha senha"'
      )
     notify()
     setDisable(true)
     setBotaoConcluir(true)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState, countError]);

  function checkFields() {
    return email.trim() !== "" && password.trim() !== "";
  }

  useEffect(() => {
    setBotaoConcluir(!checkFields());
  }, [email, password]);

 

  return (
    <>
      <ToastContainer
        autoClose={3500}
        hideProgressBar={true}
        closeOnClick
        theme="colored"
        style={{
          textAlign: "justify",
          fontSize: "16px",
          width: "550px",
          lineHeight: "32px",
        }}
      />
      <ContainerForm>
        <form onSubmit={handleSubmit}>
          <Image
            src={souJuniorLogoImg}
            alt="Logo SouJunior"
            width={264}
            height={40}
          />

          <h2>Bem-vindo de volta</h2>

          <InputLogin
            error={formState.errors}
            key={"email"}
            type="email"
            value={email}
            setValue={setEmail}
            placeholder=""
            label="E-mail"
            id="emailID"
          />
          <div style={{ position: "relative" }}>
            <InputLogin
              error={formState.errors}
              key={"pass"}
              type="password"
              value={password}
              setValue={setPassword}
              placeholder=""
              label="Senha"
              id="passID"
            />
            {!disable && <span>{formState.errors}</span>}
          </div>
          {disable && (
            <span>
              Seu acesso a conta continua bloqueado, pois você não redefiniu sua
              senha após as cinco tentativas de acesso incorretas. Por favor,
              clique em &lsquo;Esqueci minha senha&rsquo; para realizar a
              recuperação
            </span>
          )}

          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "16px",
            }}
          >
            <Checkbox
              isChecked={keepConnected}
              setValue={setKeepConnected}
              id="connected"
              text="Me manter conectado"
            />
            <a href="#" style={{ textDecoration: "underline" }}>
              Esqueci a senha
            </a>
          </div>

          <Button
            disabled={botaoConcluir}
            btnRole={"form"}
            content={
              loading ? (
                <Image alt="loading" src={CardLoading} width={24} height={24} />
              ) : (
                "Entrar"
              )
            }
          />

          <p>
            Ainda não possui cadastro?{" "}
            <Link href="/cadastro">Cique aqui e cadastre-se</Link>
          </p>
        </form>
      </ContainerForm>
    </>
  );
}
