import { Button } from '@/components/atoms/Button';
import { Modal } from '@/components/atoms/Modal';
import { ModalDeleteAccount } from '@/components/molecules/ModalDeleteAccount';
import { FormValuesDeleteAccountDTO } from '@/services/interfaces/IUserDeleteAccount';
import { UserDeleteAccount } from '@/services/user/userDeleteAccount';
import { throwErrorMessages } from '@/utils/throw-error-messages';
import { AxiosError } from 'axios';
import { FormikProvider, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as yup from 'yup';
import {
  ButtonsContainer,
  Divider,
  SubtitleTab,
  TabContainer,
  TitleTab,
} from '../styles';
import FormFields from './FormFields';
import {
  DeleteAccountContentForm,
  Disclaimer,
  ModalCancelStyled,
} from './styles';

const passwordValidation = yup
  .string()
  .required('Obrigatório')
  .min(8, 'Senha inválida')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
    'Senha inválida'
  );

const deleteAccountTabSchema = yup.object({
  password: passwordValidation,
});

export type DeleteAccountFormData = yup.InferType<
  typeof deleteAccountTabSchema
>;

export interface FormValues {
  reasonOption: string | null;
  inputReason: string | null;
  useReview: string | null;
  platformReview: string | null;
  inputExperience: string | null;
}

export function DeleteAccountTab() {
  const router = useRouter();
  const { deleteAccount } = UserDeleteAccount();

  const [openModalCancel, setOpenModalCancel] = useState(false);
  const [openModalDeleteAccount, setOpenModalDeleteAccount] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    reasonOption: null,
    inputReason: null,
    useReview: null,
    platformReview: null,
    inputExperience: null,
  });
  const [formErrors, setFormErrors] = useState<FormValues>({
    reasonOption: '',
    inputReason: '',
    useReview: '',
    platformReview: '',
    inputExperience: '',
  });

  const handleModalCancel = () => setOpenModalCancel(true);
  const handleModalDeleteAccount = () => setOpenModalDeleteAccount(true);

  const handleDiscard = () => {
    setFormValues({
      reasonOption: null,
      inputReason: null,
      useReview: null,
      platformReview: null,
      inputExperience: null,
    });
    setFormErrors({
      reasonOption: '',
      inputReason: '',
      useReview: '',
      platformReview: '',
      inputExperience: '',
    });
    if (window.history.length > 1) {
      router.push('/me?tab=personal-info');
    } else {
      router.push('/');
    }
  };

  async function handleDeleteAccount(data: DeleteAccountFormData) {
    const errors: FormValues = {
      reasonOption: '',
      inputReason: '',
      useReview: '',
      platformReview: '',
      inputExperience: '',
    };

    // Validações de obrigatoriedade
    if (!formValues.reasonOption) {
      errors.reasonOption = 'Você precisa escolher uma das opções abaixo';
    }
    if (!formValues.platformReview) {
      errors.platformReview = 'Você precisa escolher uma das opções abaixo';
    }
    if (!formValues.useReview) {
      errors.useReview = 'Você precisa escolher uma das opções abaixo';
    }
    // Validações de limite de caracteres
    if (formValues.inputExperience && formValues.inputExperience.length > 600) {
      errors.inputExperience = 'Excedeu o limite máximo de caracteres ';
    }
    if (formValues.inputReason && formValues.inputReason.length > 600) {
      errors.inputReason = 'Excedeu o limite máximo de caracteres ';
    }

    setFormErrors(errors);

    // Verifica se há erros
    const hasErrors = Object.values(errors).some(error => error !== '');

    if (!hasErrors) {
      try {
        await deleteAccount(
          data.password,
          formValues as FormValuesDeleteAccountDTO
        );
        router.push('/?account-deleted=true');
      } catch (error) {
        if (error instanceof AxiosError) {
          const currentMessage = error.response?.data.message;
          const messages = {
            'Incorrect old password': 'Senha inválida',
          };

          throwErrorMessages({ messages, currentMessageKey: currentMessage });
        }
      }
    }
  }

  const formik = useFormik<DeleteAccountFormData>({
    initialValues: {
      password: '',
    },
    validationSchema: deleteAccountTabSchema,
    onSubmit: handleDeleteAccount,
    validateOnChange: true,
  });

  return (
    <TabContainer value="delete-account">
      <TitleTab>Exclusão de conta</TitleTab>

      <SubtitleTab>
        Para deletar a conta, responda ao nosso formulário de satisfação
      </SubtitleTab>

      <Disclaimer>
        Ao excluir sua conta, seu perfil não ficará visível para agendamentos.
        <br></br>Você terá 30 dias para reconsiderar antes da exclusão
        definitiva. <br></br>Caso deseje reativar seu perfil, faça o login antes
        dos 30 dias.
      </Disclaimer>

      <SubtitleTab>
        <span>*</span> Indica um campo obrigatório
      </SubtitleTab>

      <FormikProvider value={formik}>
        <DeleteAccountContentForm>
          <FormFields
            setFormValues={setFormValues}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
          />

          <Divider />

          <ButtonsContainer>
            <Button
              type="button"
              variant="tertiary"
              onClick={handleModalCancel}
            >
              Cancelar
            </Button>

            <Button
              type="button"
              variant="danger"
              onClick={handleModalDeleteAccount}
            >
              Excluir conta
            </Button>
          </ButtonsContainer>
        </DeleteAccountContentForm>
      </FormikProvider>

      <Modal.Root
        open={openModalCancel}
        onOpenChange={() => setOpenModalCancel(false)}
      >
        <ModalCancelStyled handleDiscard={handleDiscard} />
      </Modal.Root>

      <Modal.Root
        open={openModalDeleteAccount}
        onOpenChange={() => setOpenModalDeleteAccount(false)}
      >
        <ModalDeleteAccount handleDeleteAccount={formik.submitForm} />
      </Modal.Root>
    </TabContainer>
  );
}
