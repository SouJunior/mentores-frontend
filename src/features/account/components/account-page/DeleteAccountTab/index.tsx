import { Button } from '@/components/button';
import { Modal } from '@/components/modal';
import { TabsContent } from '@/components/ui/tabs';
import {
  accountDeleteFeedback,
  deleteAccount,
} from '@/features/account/actions/actions';
import { ModalCancelKeepRoute } from '@/features/account/components/modal-cancel-keep-route';
import { ModalDeleteAccount } from '@/features/account/components/modal-delete-account';
import { FormValuesDeleteAccountDTO } from '@/services/interfaces/IUserDeleteAccount';
import { handleError } from '@/utils/handleError';
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
      router.push('/me?tab=account-management');
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
    <TabsContent value="delete-account" className="flex flex-col gap-4">
      <button
        onClick={() => router.push('/me?tab=account-management')}
        className="flex items-center gap-2 bg-transparent text-left font-medium border-none py-2 text-[#003986]"
      >
        <ArrowBackIcon />
        Voltar
      </button>
      <h2 className="text-2xl font-semibold leading-[1.8rem] pt-1 pb-2">
        Exclusão de conta
      </h2>

      <p className="text-[0.875rem] leading-4 [&_span]:text-[#338AFF]">
        Para deletar a conta, responda ao nosso formulário de satisfação
      </p>

      <p className="text-[#666666] leading-[1.4rem]">
        Ao excluir sua conta, seu perfil não ficará visível para agendamentos.
        <br />
        Você terá 30 dias para reconsiderar antes da exclusão definitiva. <br />
        Caso deseje reativar seu perfil, faça o login antes dos 30 dias.
      </p>

      <p className="text-[0.875rem] leading-4 [&_span]:text-[#338AFF]">
        <span>*</span> Indica um campo obrigatório
      </p>

      <FormikProvider value={formik}>
        <form className="flex flex-col gap-4 max-w-[36rem]">
          <FormFields
            setFormValues={setFormValues}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
          />

          <div className="h-px w-full bg-[#666666]" />

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
    </TabsContent>
  );
}
