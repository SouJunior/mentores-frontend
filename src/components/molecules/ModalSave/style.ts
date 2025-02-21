import { Modal } from '@/components/atoms/Modal';
import styled, { css } from 'styled-components';

export const ContainerModal = styled(Modal.Content)`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1rem 1rem;
  position: relative;
`;

export const Heading = styled(Modal.Title)`
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.black[500]};
  text-align: center;
  max-width: 259px;
`;

export const Description = styled(Modal.Description)`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  color: ${props => props.theme.colors.gray[750]};

  max-width: 23rem;
  margin: 0 auto 0.2rem auto;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
`;

const ButtonStyleBase = css`
  position: static;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  line-height: 1.5rem;

  min-width: 9rem;
  width: 100%;
`;

export const DiscardButton = styled(Modal.Close)`
  ${ButtonStyleBase}

  border: 1.5px solid ${props => props.theme.colors.gray[750]};
  color: ${props => props.theme.colors.gray[750]};
`;

export const SaveButton = styled(Modal.Close)`
  ${ButtonStyleBase}

  border: 2px solid ${props => props.theme.colors.blue[800]};
  background-color: ${props => props.theme.colors.blue[800]};
  color: ${props => props.theme.colors.white};
`;

export const CloseButton = styled(Modal.Close)`
  top: 0.7rem;
  right: 0.7rem;
`;
