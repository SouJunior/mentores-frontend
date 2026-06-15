import * as yup from 'yup';

export const registerSchema = yup.object({
  name: yup
    .string()
    .required('')
    .matches(/^[A-Za-zÀ-ÿ\s]+$/, 'O nome deve conter apenas letras')
    .max(50, 'Máximo de 100 caracteres'),
  email: yup
    .string()
    .email('E-mail inválido')
    .required('')
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      'E-mail inválido'
    ),
  confirmEmail: yup
    .string()
    .oneOf([yup.ref('email')], 'Os campos informados não coincidem')
    .required(''),
  password: yup
    .string()
    .required('A senha é obrigatória')
    .min(8, 'A senha deve conter no mínimo 8 caracteres')
    .matches(
      /^(?=.*[a-z])[A-Za-z\d\W_]{8,}$/,
      'A senha deve conter pelo menos uma letra minúscula'
    )
    .matches(
      /^(?=.*[A-Z])[A-Za-z\d\W_]{8,}$/,
      'A senha deve conter pelo menos uma letra maiúscula'
    )
    .matches(
      /^(?=.*\d)[A-Za-z\d\W_]{8,}$/,
      'A senha deve conter pelo menos um número'
    )
    .matches(
      /^(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
      'A senha deve conter pelo menos um caractere especial'
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Os campos informados não coincidem')
    .required(''),

  dateBirthday: yup
    .date()
    .required('Data de nascimento obrigatória')
    .test('is-25', 'Você precisa ter pelo menos 25 anos', value => {
      if (!value) return false;

      const today = new Date();
      const twentyFiveYearsAgo = new Date(
        today.getFullYear() - 25,
        today.getMonth(),
        today.getDate()
      );

      return value <= twentyFiveYearsAgo;
    }),

  agreeWithTermsAndPolicies: yup
    .boolean()
    .required(
      'Você precisa concordar com os Termos de Uso e Políticas de privacidade da SouJunior'
    ),
});

export type ValuesFormType = {
  name: string;
  email: string;
  dateBirthday: Date | null;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  agreeWithTermsAndPolicies: boolean;
};

export const initialValues: ValuesFormType = {
  name: '',
  email: '',
  dateBirthday: null,
  confirmEmail: '',
  password: '',
  confirmPassword: '',
  agreeWithTermsAndPolicies: false,
};
