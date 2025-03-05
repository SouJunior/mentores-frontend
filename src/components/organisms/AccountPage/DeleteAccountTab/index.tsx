import { Button } from '@/components/atoms/Button';
import { Modal } from '@/components/atoms/Modal';
import { ModalDeleteAccount } from '@/components/molecules/ModalDeleteAccount';
import { FormValuesDeleteAccountDTO } from '@/services/interfaces/IUserDeleteAccount';
import { UserDeleteAccount } from '@/services/user/userDeleteAccount';
import { throwErrorMessages } from '@/utils/throw-error-messages';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AxiosError } from 'axios';
import { FormikProvider, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  ButtonsContainer,
  Divider,
  SubtitleTab,
  TabContainer,
  TitleTab,
} from '../styles';
import FormFields from './FormFields';
import {
  Breadcrumbs,
  DeleteAccountContentForm,
  Disclaimer,
  ModalCancelStyled,
} from './styles';

export interface FormValues {
  reasonOption: string | null;
  reasonText: string | null;
  usabilityRating: string | null;
  satisfactionRating: string | null;
  userExperienceFeedback: string | null;
}

export function DeleteAccountTab() {
  const router = useRouter();
  const { deleteAccount } = UserDeleteAccount();

  const initialFormValues: FormValues = {
    reasonOption: null,
    reasonText: null,
    usabilityRating: null,
    satisfactionRating: null,
    userExperienceFeedback: null,
  };

  const [openModalCancel, setOpenModalCancel] = useState<boolean>(false);
  const [openModalDeleteAccount, setOpenModalDeleteAccount] =
    useState<boolean>(false);
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormValues>(initialFormValues);

  const handleModalCancel = () => setOpenModalCancel(true);
  const handleModalDeleteAccount = () => setOpenModalDeleteAccount(true);

  const handleDiscard = () => {
    setFormValues(initialFormValues);
    setFormErrors(initialFormValues);

    if (window.history.length > 1) {
      router.push('/me?tab=account-management');
    } else {
      router.push('/');
    }
  };

  async function handleDeleteAccount() {
    const errors: FormValues = initialFormValues;

    // Validações de obrigatoriedade
    if (!formValues.reasonOption) {
      errors.reasonOption = 'Você precisa escolher uma das opções abaixo';
    }
    if (!formValues.satisfactionRating) {
      errors.satisfactionRating = 'Você precisa escolher uma das opções abaixo';
    }
    if (!formValues.usabilityRating) {
      errors.usabilityRating = 'Você precisa escolher uma das opções abaixo';
    }
    // Validações de limite de caracteres
    if (
      formValues.userExperienceFeedback &&
      formValues.userExperienceFeedback.length > 600
    ) {
      errors.userExperienceFeedback = 'Excedeu o limite máximo de caracteres ';
    }
    if (formValues.reasonText && formValues.reasonText.length > 600) {
      errors.reasonText = 'Excedeu o limite máximo de caracteres ';
    }

    setFormErrors(errors);

    // Verifica se há erros
    const hasErrors = Object.values(errors).some(error => error !== null);

    if (!hasErrors) {
      try {
        await deleteAccount(formValues as FormValuesDeleteAccountDTO, {
          action: 'delete',
        });
        router.push('/?account-deleted=true');
      } catch (error) {
        if (error instanceof AxiosError) {
          const currentMessage = error.response?.data.message;
          throwErrorMessages({
            messages: {},
            currentMessageKey: currentMessage,
          });
        }
      }
    }
  }

  const formik = useFormik({
    initialValues: {},
    onSubmit: handleDeleteAccount,
    validateOnChange: true,
  });

  return (
    <TabContainer value="delete-account">
      <Breadcrumbs onClick={() => router.push('/me?tab=account-management')}>
        <ArrowBackIcon />
        Voltar
      </Breadcrumbs>
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
