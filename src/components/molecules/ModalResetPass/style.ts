import { Modal } from '@/components/atoms/Modal'
import styled from 'styled-components'

export const ContainerModal = styled(Modal.Content)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 25rem;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1.75rem 1.5rem 2rem;
  position: relative;
`

export const TitleModal = styled(Modal.Title)`
  color: ${(props) => props.theme.colors.blue[500]};
  font-size: ${(props) => props.theme.fontSizes.lg};
`

export const ImageContainer = styled.div`
  width: 17.825rem;
  height: 17.825rem;

  img {
    height: 100%;
  }
`

export const Message = styled(Modal.Description)`
  color: ${(props) => props.theme.colors.gray[700]};
  font-size: ${(props) => props.theme.fontSizes.sm};
  text-align: center;
  line-height: 150%;
  margin-top: -1rem;
  margin-bottom: 1rem;
`
