import {
  accountDeleteFeedback,
  deleteAccount,
} from '@/features/account/actions/actions';
import { ModalCancelKeepRoute } from '@/features/account/components/modal-cancel-keep-route';
import { ModalDeleteAccount } from '@/features/account/components/modal-delete-account';
import { FormValuesDeleteAccountDTO } from '@/features/account/types/IUserDeleteAccount';
import { Button } from '@/shared/components/button';
import { Modal } from '@/shared/components/modal';

import { handleError } from '@/shared/utils/handleError';
import { FormikProvider, useFormik } from 'formik';
import { ArrowLeft as ArrowBackIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import FormFields from './FormFields';

export interface FormValues {
  reasonOption: string | null;
  reasonText: string | null;
  usabilityRating: string | null;
  satisfactionRating: string | null;
  userExperienceFeedback: string | null;
}

export function DeleteAccountTab() {
  const router = useRouter();

  const initialFormValues: FormValues = {
    reasonOption: null,
    reasonText: null,
    usabilityRating: null,
    satisfactionRating: null,
    userExperienceFeedback: null,
  };

  const [openModalCancel, setOpenModalCancel] = useState(false);
  const [openModalDeleteAccount, setOpenModalDeleteAccount] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormValues>(initialFormValues);

  const handleModalCancel = () => setOpenModalCancel(true);
  const handleModalDeleteAccount = () => setOpenModalDeleteAccount(true);

  const handleDiscard = () => {
    setFormValues(initialFormValues);
    setFormErrors(initialFormValues);
    if (window.history.length > 1) {
      router.push('/account/account-management');
    } else {
      router.push('/');
    }
  };

  async function handleDeleteAccount() {
    const errors: FormValues = { ...initialFormValues };

    if (!formValues.reasonOption)
      errors.reasonOption = 'Você precisa escolher uma das opções abaixo';
    if (!formValues.satisfactionRating)
      errors.satisfactionRating = 'Você precisa escolher uma das opções abaixo';
    if (!formValues.usabilityRating)
      errors.usabilityRating = 'Você precisa escolher uma das opções abaixo';
    if (
      formValues.userExperienceFeedback &&
      formValues.userExperienceFeedback.length > 600
    )
      errors.userExperienceFeedback = 'Excedeu o limite máximo de caracteres ';
    if (formValues.reasonText && formValues.reasonText.length > 600)
      errors.reasonText = 'Excedeu o limite máximo de caracteres ';

    setFormErrors(errors);
    const hasErrors = Object.values(errors).some(e => e !== null);
    if (hasErrors) return;

    const feedbackResult = await accountDeleteFeedback(
      formValues as FormValuesDeleteAccountDTO
    );
    if (feedbackResult?.error) {
      handleError('Algum erro aconteceu. Entre em contato com a gente.');
      return;
    }
    await deleteAccount();
  }

  const formik = useFormik({
    initialValues: {},
    onSubmit: handleDeleteAccount,
    validateOnChange: true,
  });

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={() => router.push('/account/account-management')}
        className="flex items-center gap-2 bg-transparent text-left font-medium border-none py-2 text-blue-800"
      >
        <ArrowBackIcon />
        Voltar
      </button>
      <h2 className="text-2xl font-semibold leading-[1.8rem] pt-1 pb-2">
        Exclusão de conta
      </h2>

      <p className="text-[0.875rem] leading-4 [&_span]:text-blue-700">
        Para deletar a conta, responda ao nosso formulário de satisfação
      </p>

      <p className="text-gray-700 leading-[1.4rem]">
        Ao excluir sua conta, seu perfil não ficará visível para agendamentos.
        <br />
        Você terá 30 dias para reconsiderar antes da exclusão definitiva. <br />
        Caso deseje reativar seu perfil, faça o login antes dos 30 dias.
      </p>

      <p className="text-[0.875rem] leading-4 [&_span]:text-blue-700">
        <span>*</span> Indica um campo obrigatório
      </p>

      <FormikProvider value={formik}>
        <form className="flex flex-col gap-4 max-w-[36rem]">
          <FormFields
            setFormValues={setFormValues}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
          />

          <div className="h-px w-full bg-gray-700" />

          <div className="flex gap-4 ml-auto">
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
          </div>
        </form>
      </FormikProvider>

      <Modal.Root
        open={openModalCancel}
        onOpenChange={() => setOpenModalCancel(false)}
      >
        <ModalCancelKeepRoute handleDiscard={handleDiscard} />
      </Modal.Root>

      <Modal.Root
        open={openModalDeleteAccount}
        onOpenChange={() => setOpenModalDeleteAccount(false)}
      >
        <ModalDeleteAccount handleDeleteAccount={formik.submitForm} />
      </Modal.Root>
    </div>
  );
}
