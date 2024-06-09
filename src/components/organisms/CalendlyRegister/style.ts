import { Modal } from '@/components/atoms/Modal'
import styled from 'styled-components'

export const ModalContainer = styled(Modal.Content)`
  display: grid;
  gap: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;
`

export const ModalTitle = styled(Modal.Title)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.black[200]};
  font-weight: 600;
  line-height: 140%;
  text-align: center;
  max-width: 18.75rem;
  margin: 0 auto;
`

export const ModalDescription = styled(Modal.Description)`
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.black[200]};
  line-height: 140%;
  font-family: 'Radio Canada', sans-serif;
  text-align: center;
  max-width: 26.875rem;
`

export const ModalButton = styled.button`
  line-height: 1.2rem;
`

export const ModalClose = styled(Modal.Close)`
  top: 1.5rem;
  right: 1.5rem;
`
