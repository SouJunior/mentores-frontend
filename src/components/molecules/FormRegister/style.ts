import { Button } from '@/components/atoms/Button';
import { Modal } from '@/components/atoms/Modal';
import Link from 'next/link';
import styled from 'styled-components';

export const ContainerForm = styled.div`
  width: min(31.5rem, 100%);
  height: fit-content;
  position: relative;
  margin-left: auto;
  background: ${props => props.theme.colors.white};
  border-radius: 1.5rem;
  padding: clamp(1.5rem, 3.2vh, 2rem);
  box-shadow: 0 1.5rem 3rem rgba(0, 32, 80, 0.22);

  @media (max-width: 1024px) {
    width: min(31.5rem, calc(100vw - 2rem));
    margin-left: 0;
  }
`;

export const ContainerRegister = styled.div`
  .container-logo-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 0.5rem;

    img {
      width: 15rem;
      height: 2.25rem;
    }

    p {
      font-size: 0.75rem;
      color: ${props => props.theme.colors.gray[700]};
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input[type='radio'] {
    vertical-align: middle;
    margin-right: 5px;
  }

  .asterisk {
    color: ${props => props.theme.colors.blue[500]};
  }
`;

export const ContainerTerms = styled.div`
  display: flex;
  max-height: 100px;
  text-align: justify;
  align-items: flex-start;
  justify-content: center;
  margin-top: 0.5rem;
`;

export const TxtTerms = styled.label`
  font-size: 0.875rem;
  width: 100%;
  color: ${props => props.theme.colors.blue[500]};
  line-height: 150%;

  margin-left: 0.5rem;
  margin-top: -5px; // Align text with checkbox input

  button {
    display: inline;
    padding: 0;
    color: ${props => props.theme.colors.blue[500]};

    font-size: 0.875rem;
    font-weight: 400;
    line-height: 150%;

    border-bottom: 1px solid ${props => props.theme.colors.blue[500]};
    border-radius: 0;
  }
`;

export const ContainerBtn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0px 0px;
  margin: 0px;
  gap: 16px;
`;

export const ButtonLoading = styled(Button)`
  height: 43px;
  padding: 0;

  &:disabled {
    cursor: wait;
    background-color: ${props => props.theme.colors.blue[800]};
    border-color: ${props => props.theme.colors.blue[800]};
  }
`;

export const ModalUserExistsContainer = styled(Modal.Content)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 26.5rem;
  padding: 1.5rem 0;
  position: relative;

  a + a {
    margin-top: 1rem;
  }
`;

export const ModalUserExistsTitle = styled(Modal.Title)`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: 700;
  line-height: 1.8rem;
  text-align: center;
  color: ${props => props.theme.colors.red[600]};

  margin-bottom: 2rem;
`;

export const ModalUserExistsButton = styled(Link)`
  max-width: 13.5rem;
  width: 100%;
  margin: 0 auto;

  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1.5px solid ${props => props.theme.colors.gray[750]};

  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  color: ${props => props.theme.colors.gray[750]};

  &:hover {
    background-color: ${props => props.theme.colors.blue[800]};
    border-color: ${props => props.theme.colors.blue[800]};
    color: ${props => props.theme.colors.white};
  }
`;
