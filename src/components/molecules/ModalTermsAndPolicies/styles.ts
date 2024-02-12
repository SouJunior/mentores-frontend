import { Button } from '@/components/atoms/Button'
import { Modal } from '@/components/atoms/Modal'
import Image from 'next/image'
import styled from 'styled-components'

export const ModalHeaderContainer = styled.header`
  position: sticky;
  top: 0;

  width: 100%;
  max-width: 50rem;
  padding: 1rem;

  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem 0.5rem 0rem 0rem;
`

export const ModalLogo = styled(Image)`
  width: 15.5rem;
  height: 3.5rem;
`

export const ModalContainer = styled(Modal.Content)`
  max-width: 50rem;
  position: relative;
`

export const ModalBoxContainer = styled.div`
  padding-top: 1rem;
  padding-right: 0.5rem;
`

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 37rem;
  height: 100%;
  overflow: auto;

  padding: 0.5rem 1rem 1.5rem;
  font-family: 'Radio Canada';

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.gray[700]};
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`

export const ModalBoxTitle = styled(Modal.Title)`
  max-width: 18rem;

  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: ${(props) => props.theme.colors.blue[800]};
`

export const ModalDescription = styled(Modal.Description)`
  color: ${(props) => props.theme.colors.black[200]};
  line-height: 1.4rem;
  font-size: 1rem;
  margin: 1rem 0;

  ol {
    padding-left: 1rem;
  }

  li {
    list-style-type: decimal;
  }

  ol.list-style-type-none {
    padding-left: 0;
    li {
      list-style-type: none;
    }
  }
`

export const ModalCloseBtn = styled(Modal.Close)`
  top: 1rem;
  right: 1rem;
`

export const ModalCloseBtnSecondary = styled(Button)`
  position: static;
  margin-left: auto;

  border: 2px solid ${(props) => props.theme.colors.blue[800]};
  color: ${(props) => props.theme.colors.blue[800]};

  &:hover {
    border-color: ${(props) => props.theme.colors.blue[850]};
    color: ${(props) => props.theme.colors.blue[850]};
  }
`
