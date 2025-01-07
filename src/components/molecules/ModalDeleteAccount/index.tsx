import * as Dialog from '@radix-ui/react-dialog';
import {
  ButtonsContainer,
  ButtonStyled,
  ContainerModalDeleteAccount,
  ModalCloseButton,
  ModalDescription,
  ModalTitle,
} from './style';

interface ModalDeleteAccountProps extends Dialog.DialogContentProps {
  handleDeleteAccount: () => void;
}

export function ModalDeleteAccount({
  handleDeleteAccount,
  ...props
}: ModalDeleteAccountProps) {
  return (
    <ContainerModalDeleteAccount {...props}>
      <ModalTitle>Você tem certeza que deseja fazer isso?</ModalTitle>

      <ModalCloseButton />

      <ModalDescription>
        Se você tiver mentorias abertas no Calendly, elas continuarão ativas.
        Para fechá-las, será necessário excluí-las manualmente.
      </ModalDescription>

      <ModalDescription>
        Verifique no{' '}
        <a href="https://calendly.com/" target="_blank">
          Calendly
        </a>{' '}
        se há mentorias que precisam ser excluídas.
      </ModalDescription>

      <ButtonsContainer>
        <Dialog.Close asChild>
          <ButtonStyled variant="secondary">Cancelar</ButtonStyled>
        </Dialog.Close>

        <Dialog.Close asChild>
          <ButtonStyled
            type="submit"
            onClick={handleDeleteAccount}
            $variant="delete"
          >
            Excluir conta
          </ButtonStyled>
        </Dialog.Close>
      </ButtonsContainer>
    </ContainerModalDeleteAccount>
  );
}
