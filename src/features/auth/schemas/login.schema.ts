import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().email('E-mail inválido').required('Obrigatório'),
  password: yup
    .string()
    .required('A senha é obrigatória')
    .min(8, 'Senha inválida'),
});

export type LoginDataType = yup.InferType<typeof loginSchema>;
