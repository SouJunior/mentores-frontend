import * as yup from 'yup';

export const resetPasswordSchema = yup.object({
  email: yup
    .string()
    .required('')
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      'E-mail inválido'
    ),
});
