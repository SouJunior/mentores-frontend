import { Button } from '@/components/atoms/Button';
import { Modal } from '@/components/atoms/Modal';
import { ModalDeleteAccount } from '@/components/molecules/ModalDeleteAccount';
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

const deleteAccountTabSchema = yup.object({
  reasonOption: yup.number().min(1).required(),
  inputReason: yup.string().when('reasonOption', {
    is: (val: number) => val === 5,
    then: schema => schema.max(600).required(),
    // otherwise: (schema) => schema.min(0),
  }),
  useReview: yup.number().min(1).required(),
  platformReview: yup.number().min(1).required(),
  inputExperience: yup.string().max(600),
  password: yup.string().required(),
});

export type DeleteAccountFormData = yup.InferType<
  typeof deleteAccountTabSchema
>;

export function DeleteAccountTab() {
  const router = useRouter();

  const [openModalCancel, setOpenModalCancel] = useState(false);
  const [openModalDeleteAccount, setOpenModalDeleteAccount] = useState(false);

  /**
   * Hook do Formik para gerenciar o estado do formulário de exclusão de conta.
   *
   * @type {Object} DeleteAccountFormData
   *
   * @type {Formik<DeleteAccountFormData>}
   *
   * @property {DeleteAccountFormData} initialValues - Valores iniciais do formulário.
   * @property {Object} validationSchema - Esquema de validação do formulário.
   * @property {Function} onSubmit - Função chamada ao submeter o formulário.
   * @property {boolean} validateOnChange - Indica se a validação deve ocorrer a cada mudança no formulário.
   */

  const handleModalCancel = () => setOpenModalCancel(true);
  const handleModalDeleteAccount = () => setOpenModalDeleteAccount(true);

  const handleDiscard = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  async function handleDeleteAccount(data: DeleteAccountFormData) {
    console.log('caiu aqui');
    try {
      const payload = {
        reasonOption: data.reasonOption,
      };
      console.log('Payload: ', payload);
      console.log('Data: ', data);
    } catch (error) {
      console.error(error);
    }
    // alert('Conta excluída com sucesso!');
  }

  const formik = useFormik<DeleteAccountFormData>({
    initialValues: {
      reasonOption: 0,
      inputReason: '',
      useReview: 0,
      platformReview: 0,
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
          <FormFields />

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
              type="submit"
              variant="danger"
              // onClick={handleModalDeleteAccount}
            >
              Excluir conta
            </Button>
          </ButtonsContainer>

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
            <ModalDeleteAccount
              handleDeleteAccount={() => handleDeleteAccount}
            />
          </Modal.Root>
        </DeleteAccountContentForm>
      </FormikProvider>
    </TabContainer>
  );
}
