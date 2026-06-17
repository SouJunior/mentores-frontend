import { Button } from '@/components/atoms/Button';
import { Modal } from '@/components/atoms/Modal';
import styled from 'styled-components';

export const ContainerModalDeleteAccount = styled(Modal.Content)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 560px;
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
  $variant?: 'delete';
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
  width: 100%;
  gap: 1px;
  padding: 0.5rem 0 0.5rem 0;

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

export const ScheduleList = styled.div`
  width: 100%;
  max-height: 18rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
  padding-right: 0.25rem;
`;

export const ScheduleItem = styled.div`
  width: 100%;
  border: 1px solid ${props => props.theme.colors.gray[200]};
  border-radius: 0.5rem;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  text-align: left;
`;

export const ScheduleTitle = styled.strong`
  color: ${props => props.theme.colors.black[200]};
  font-size: ${props => props.theme.fontSizes.sm};
  line-height: 1.3rem;
`;

export const ScheduleMeta = styled.span`
  color: ${props => props.theme.colors.gray[700]};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 1.25rem;
  overflow-wrap: anywhere;
`;

export const ScheduleActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const LoadingSchedulesContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem 0;

  span {
    --spinner-color: ${props => props.theme.colors.blue[800]};
  }
`;
