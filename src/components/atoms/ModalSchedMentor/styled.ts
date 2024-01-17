import styled from 'styled-components'

interface ModalProps {
  open: boolean
}

export const ModalContainer = styled.div<ModalProps>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  gap: 1.5rem;
  position: fixed;
  max-width: 50.125rem;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const MentorName = styled.span`
  font-size: 2.5rem;
  line-height: 3rem;
  max-width: 15rem;
  font-weight: 600;
  color: #323232;
`

export const SpecialityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Specialitytitle = styled.span`
  font-size: 14px;
  color: #666666;
  line-height: 16.8px;
`

export const StacksContainer = styled.span`
  display: flex;
  gap: 0.25rem;
  width: 100%;
  flex-wrap: wrap;
`

export const Stack = styled.span`
  background: #f5f1f3;
  font-size: 0.75rem;
  line-height: 0.9rem;
  color: #001633;
  padding: 0.5rem;
  border-radius: 2.5rem;
  text-align: center;
`

export const AboutContainer = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #666666;
`

export const SchedButton = styled.button`
  width: 174.5px;
  height: 44px;
  padding: 16px 24px 16px 24px;
  border-radius: 8px;
  gap: 8px;
  background-color: #003986;
  border: none;
  color: white;
  font-size: 15px;
  line-height: 19.2px;
  display: flex;
  align-items: center;

  &:not(:disabled):hover {
    background-color: #002c66;
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.gray[700]};
    cursor: not-allowed;
  }
`

export const ButtonClose = styled.button`
  all: unset;
  color: #cbcbcb;
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const ModalOverlay = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: ${({ open }) => (open ? 'block' : 'none')};
  justify-content: center;
  align-items: center;
`
