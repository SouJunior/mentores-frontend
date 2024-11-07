import { genders } from '@/data/static-info';
import UserUpdateService from '@/services/user/userUpdateService';
import { handleError } from '@/utils/handleError';
import { FormikProps, FormikProvider, useFormik } from 'formik';
import { useRouter } from 'next/router';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

import * as yup from 'yup';
import { useAuthContext } from './Auth/AuthContext';

const onBoardingSchema = yup.object({
  profile: yup.string().required('Obrigatório'),
  description: yup
    .string()
    .max(600, 'Limite máximo de caracteres excedido.')
    .required('Obrigatório'),
  gender: yup.string().oneOf(genders).required('Obrigatório'),
  specialties: yup.array(yup.string().required('Obrigatório')),
});

type OnBoardingDataType = yup.InferType<typeof onBoardingSchema>;
export type StepNumber = 1 | 2;

interface OnBoardingContextType {
  specialties: string[];
  formik: FormikProps<OnBoardingDataType>;
  hasError: boolean;
  setSpecialties: Dispatch<SetStateAction<string[]>>;
  setHasError: Dispatch<SetStateAction<boolean>>;
}

const OnBoardingContext = createContext({} as OnBoardingContextType);

export function OnBoardingProvider({ children }: { children: ReactNode }) {
  const [specialties, setSpecialties] = useState<string[]>([]);
  const [hasError, setHasError] = useState(false);

  const { mentor } = useAuthContext();

  const { handleMentorData } = UserUpdateService();
  const router = useRouter();

  const formik = useFormik<OnBoardingDataType>({
    validationSchema: onBoardingSchema,
    initialValues: {
      description: '',
      profile: '',
      gender: '',
      specialties,
    },
    onSubmit: handleSubmit,
  });

  async function handleSubmit(values: OnBoardingDataType) {
    try {
      await handleMentorData({
        aboutMe: values.description,
        profile: values.profile,
        gender: values.gender,
        specialties: values.specialties,
      });
      setHasError(false);

      mentor.refetch();
      router.push('/?connect-calendly=true');
    } catch {
      handleError('Algum erro aconteceu. Entre em contato com a gente.');
      setHasError(true);
    }
  }

  return (
    <OnBoardingContext.Provider
      value={{
        specialties,
        setSpecialties,
        formik,
        hasError,
        setHasError,
      }}
    >
      <FormikProvider value={formik}>{children}</FormikProvider>
    </OnBoardingContext.Provider>
  );
}

export const useOnBoardingContext = () => useContext(OnBoardingContext);
