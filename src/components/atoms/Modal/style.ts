import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const ModalBtnClose = styled(Dialog.Close)`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  line-height: 0;

  border: none;
  background-color: transparent;
  color: ${props => props.theme.colors.black[200]};

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const ModalOverlay = styled(Dialog.Overlay)`
  display: grid;
  place-items: center;
  overflow-y: auto;

  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  inset: 0;
  padding: 0 1rem;
  z-index: 9999;
`;

export const ModalContent = styled(Dialog.Content)`
  background: ${props => props.theme.colors.white};
  border-radius: 0.5rem;
`;
