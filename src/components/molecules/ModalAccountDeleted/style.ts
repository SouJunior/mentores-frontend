import { Modal } from '@/components/atoms/Modal';
import styled from 'styled-components';

export const ModalContainer = styled(Modal.Content)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  max-width: 25rem;
`;

export const ModalImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
`;

export const ModalTitle = styled(Modal.Title)`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.black[200]};
  font-weight: 500;
  line-height: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const ModalDescription = styled(Modal.Description)`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.gray[700]};
  line-height: 1rem;
  font-family: 'Radio Canada', sans-serif;
  margin-bottom: 0.5rem;
`;

export const ModalClose = styled(Modal.Close)`
  top: 1rem;
  right: 1rem;
`;
