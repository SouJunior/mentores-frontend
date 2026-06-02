import binIcon from '@/assets/icons/bin.png';
import { DialogClose } from '@/components/ui/dialog';
import Image from 'next/image';
import {
  ButtonsContainer,
  ButtonStyled,
  ContainerModalDeleteAccount,
  ModalCloseButton,
  ModalDescription,
  ModalTitle,
} from './style';

interface ModalDeleteAccountProps {
  handleDeleteAccount: () => void;
}

export function ModalDeleteAccount({
  handleDeleteAccount,
}: ModalDeleteAccountProps) {
  return (
    <ContainerModalDeleteAccount>
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
        <DialogClose
          render={
            <ButtonStyled type="button" variant="secondary">
              Cancelar
            </ButtonStyled>
          }
        />

        <DialogClose
          render={
            <ButtonStyled
              type="submit"
              onClick={handleDeleteAccount}
              $variant="delete"
            >
              <Image src={binIcon} alt="Delete Icon" width={24} height={24} />
              Excluir conta
            </ButtonStyled>
          }
        />
      </ButtonsContainer>
    </ContainerModalDeleteAccount>
  );
}
