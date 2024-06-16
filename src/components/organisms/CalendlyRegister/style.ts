import { Modal } from '@/components/atoms/Modal'
import styled from 'styled-components'

export const ModalContainer = styled(Modal.Content)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  max-width: 32rem;
`

export const ModalTitle = styled(Modal.Title)`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.black[200]};
  font-weight: 600;
  line-height: 140%;
  text-align: center;
  padding: 0 4rem;
  margin: 1.5rem auto 0 auto;
`

export const ModalDescription = styled(Modal.Description)`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.black[200]};
  line-height: 140%;
  font-family: 'Radio Canada', sans-serif;
  text-align: center;
  padding: 0 4rem;
`
export const ModalImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const ModalButton = styled.button`
  padding-left: 2rem;
  padding-right: 2rem;
`
export const ModalButtonSecondary = styled(ModalButton)`
  border: 2.5px solid ${(props) => props.theme.colors.gray[700]};
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.gray[700]};

  &:hover {
    border: 2.5px solid ${(props) => props.theme.colors.gray[750]} !important;
    background-color: ${(props) => props.theme.colors.gray[200]} !important;
    color: ${(props) => props.theme.colors.gray[750]} !important;
  }
`

export const ModalClose = styled(Modal.Close)`
  top: 1.5rem;
  right: 1.5rem;
`
