import { Button } from '@/components/atoms/Button';
import { Modal } from '@/components/atoms/Modal';
import styled from 'styled-components';

export const ContainerModalDeleteAccount = styled(Modal.Content)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 400px;
  padding: 1rem 1rem;
  position: relative;
  text-align: center;
`;

export const ModalTitle = styled(Modal.Title)`
  color: ${props => props.theme.colors.black[200]};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin-bottom: 1rem;
  padding: 0 4rem;
  text-align: center;
`;

export const ModalDescription = styled(Modal.Description)`
  color: ${props => props.theme.colors.black[200]};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.05rem;
  max-width: 352px;

  a {
    color: ${props => props.theme.colors.blue[800]};
    text-decoration: underline;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  margin-top: 1rem;
  width: 100%;
`;

export const ModalCloseButton = styled(Modal.Close)`
  right: 0.7rem;
  top: 0.7rem;
`;

export const ButtonStyled = styled(Button)<{
  $variant?: string;
  asCloseButton?: boolean;
}>`
  background-color: ${props =>
    props.$variant === 'delete' ? props.theme.colors.red[400] : ''};
  border-color: ${props =>
    props.$variant === 'delete'
      ? props.theme.colors.red[400]
      : props.theme.colors.gray[700]};
  color: ${props =>
    props.$variant === 'delete'
      ? props.theme.colors.white
      : props.theme.colors.gray[700]};
  padding-left: ${props => (props.$variant === 'delete' ? '2.5rem' : '')};
  position: ${props => (props.$variant === 'delete' ? 'relative' : '')};
  width: 100%;

  &::before {
    background-color: white;
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    display: inline-block;
    height: 24px;
    left: 24px;
    position: absolute;
    width: 24px;
  }

  &:not(:disabled):hover {
    background-color: ${props =>
      props.$variant === 'delete' ? props.theme.colors.red[800] : ''};
    border-color: ${props =>
      props.$variant === 'delete'
        ? props.theme.colors.red[800]
        : props.theme.colors.blue[850]};
    color: ${props =>
      props.$variant === 'delete'
        ? props.theme.colors.white
        : props.theme.colors.blue[850]};
  }
`;
