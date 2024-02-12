import { Modal } from '@/components/atoms/Modal'
import Link from 'next/link'
import styled from 'styled-components'

export const ContainerModalCancel = styled(Modal.Content)`
  width: 100%;
  max-width: 400px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0px 24px 24px;
`

export const HeadingModal = styled(Modal.Title)`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: ${(props) => props.theme.colors.gray[750]};
  text-align: center;
`

export const DescriptionModal = styled(Modal.Description)`
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 150%;
  color: ${(props) => props.theme.colors.gray[750]};
`

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
  color: ${(props) => props.theme.colors.red[600]};
`

export const DiscardBtn = styled(Link)`
  background-color: ${(props) => props.theme.colors.red[600]};
  border-color: ${(props) => props.theme.colors.red[600]};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.colors.red[800]};
    border-color: ${(props) => props.theme.colors.red[800]};
  }
`
