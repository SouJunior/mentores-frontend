import styled from 'styled-components';
import { Modal } from '../Modal';

export const ModalContainer = styled(Modal.Content)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 50.125rem;
  width: 100%;
  border-radius: 1rem;
  padding: 2rem;

  button,
  a {
    width: max-content;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const MentorName = styled(Modal.Title)`
  font-size: 2.5rem;
  line-height: 3rem;
  max-width: 15rem;
  font-weight: 600;
  color: #323232;
`;

export const SpecialityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Specialitytitle = styled.span`
  font-size: 14px;
  color: #666666;
  line-height: 16.8px;
`;

export const StacksContainer = styled.span`
  display: flex;
  gap: 0.25rem;
  width: 100%;
  flex-wrap: wrap;
`;

export const Stack = styled.span`
  background: #f5f1f3;
  font-size: 0.75rem;
  line-height: 0.9rem;
  color: #001633;
  padding: 0.5rem;
  border-radius: 2.5rem;
  text-align: center;
`;

export const AboutContainer = styled(Modal.Description)`
  font-size: 16px;
  line-height: 24px;
  color: #666666;
`;

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
`;
