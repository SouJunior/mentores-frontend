import { Modal } from '@/components/atoms/Modal';
import Link from 'next/link';
import styled, { css } from 'styled-components';

export const ContainerModalCancel = styled(Modal.Content)`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 1.5rem 2rem;
  position: relative;
`;

export const HeadingModal = styled(Modal.Title)`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: ${props => props.theme.colors.gray[750]};
  text-align: center;
`;

export const DescriptionModal = styled(Modal.Description)`
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 150%;
  color: ${props => props.theme.colors.gray[750]};

  max-width: 17rem;
  margin: 0 auto;
`;

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
  color: ${props => props.theme.colors.red[600]};
`;

const BaseButtonStyles = css`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  line-height: 1.5rem;

  max-width: 9rem;
  width: 100%;
`;

export const DiscardBtn = styled(Link)`
  ${BaseButtonStyles}

  background-color: ${props => props.theme.colors.red[600]};
  border-color: ${props => props.theme.colors.red[600]};

  &:not(:disabled):hover {
    background-color: ${props => props.theme.colors.red[800]};
    border-color: ${props => props.theme.colors.red[800]};
  }
`;

export const ModalCloseCancelBtn = styled(Modal.Close)`
  position: static;

  ${BaseButtonStyles}

  border: 1.5px solid ${props => props.theme.colors.gray[750]};
  color: ${props => props.theme.colors.gray[750]};
`;
