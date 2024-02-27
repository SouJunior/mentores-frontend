import * as yup from 'yup'

export const registerSchema = yup.object({
  name: yup.string().required(''),
  email: yup
    .string()
    .email('E-mail inválido')
    .required('')
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      'E-mail inválido',
    ),
  confirmEmail: yup
    .string()
    .oneOf([yup.ref('email')], 'Os campos informados não coincidem')
    .required(''),
  password: yup
    .string()
    .required('A senha é obrigatória')
    .min(8, 'Senha inválida')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
      'Senha inválida',
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Os campos informados não coincidem')
    .required(''),

  dateBirthday: yup.date().required(''),
  agreeWithTermsAndPolicies: yup
    .boolean()
    .required(
      'Você precisa concordar com os Termos de Uso e Políticas de privacidade da SouJunior',
    ),
})

export type ValuesFormType = {
  name: string
  email: string
  dateBirthday: Date | null
  confirmEmail: string
  password: string
  confirmPassword: string
  agreeWithTermsAndPolicies: boolean
}

export const initialValues: ValuesFormType = {
  name: '',
  email: '',
  dateBirthday: null,
  confirmEmail: '',
  password: '',
  confirmPassword: '',
  agreeWithTermsAndPolicies: false,
}
