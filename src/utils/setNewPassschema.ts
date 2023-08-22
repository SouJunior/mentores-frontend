import * as yup from "yup";

export const setNewPassSchema = yup.object({
  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(8, "Senha inválida")
    .matches(
     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
      "Senha inválida"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Os campos informados não coincidem")
    .required("")    
});

export const initialValues = {
  password: "",
  confirmPassword: "",
};

export type ValuesFormType = {
  password: string;
  confirmPassword: string;
};
