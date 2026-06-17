import * as yup from 'yup';

export type RegisterProfileType = 'mentor' | 'mentee';

export const createRegisterSchema = (profileType: RegisterProfileType) =>
  yup.object({
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
      .min(8, 'Senha inválida')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
        'Senha inválida'
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Os campos informados não coincidem')
      .required(''),

    dateBirthday: yup
      .date()
      .required('Data de nascimento obrigatória')
      .test(
        'minimum-age',
        profileType === 'mentor'
          ? 'Você precisa ter pelo menos 25 anos'
          : 'Você precisa ter pelo menos 18 anos',
        value => {
          if (!value) return false;

          const today = new Date();
          const minimumAge = profileType === 'mentor' ? 25 : 18;
          const minimumDate = new Date(
            today.getFullYear() - minimumAge,
            today.getMonth(),
            today.getDate()
          );

          return value <= minimumDate;
        }
      ),

    agreeWithTermsAndPolicies: yup
      .boolean()
      .required(
        'Você precisa concordar com os Termos de Uso e Políticas de privacidade da SouJunior'
      ),
  });

export const registerSchema = createRegisterSchema('mentor');

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
