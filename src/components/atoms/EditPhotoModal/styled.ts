import styled from 'styled-components'
import { Button } from '../Button'

export const EditPhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 387px;
  padding: 1.5rem;
  padding-top: 0;
`

export const StyledInfo = styled.span`
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`
export const PhotoContainerActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`

export const StyledHR = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.gray[700]};
  margin-top: 0.25rem;
`

export const SaveButton = styled(Button)`
  margin-left: auto;
`

export const ActionButton = styled.button`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 0.75rem;
  background-color: ${(props) => props.theme.colors.gray[200]};
  border-radius: 0.5rem;
  border: 0;

  cursor: pointer;
  color: ${(props) => props.theme.colors.gray[700]};
  font-weight: 600;
  line-height: 1.2rem;
  font-size: 1rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${(props) => props.theme.colors.gray[700]};
  }

  input[type='file'] {
    display: none;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.colors.gray[200]};
    color: ${(props) => props.theme.colors.gray[600]};
  }
`
