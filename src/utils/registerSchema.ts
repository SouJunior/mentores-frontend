import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email("E-mail inválido")
    .required("")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      "E-mail inválido"
    ),
  confirmEmail: yup
    .string()
    .oneOf([yup.ref("email")], "Os campos informados não coincidem")
    .required("Confirme seu e-mail"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(8, "Senha inválida")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Senha inválida"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Os campos informados não coincidem")
    .required("Confirme a sua senha"),
  dataBirthday: yup.date().required(""),
});

export const initialValues = {
  name: "",
  email: "",
  dataBirthday: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
};
