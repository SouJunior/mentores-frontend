import Image from 'next/image';
import styled from 'styled-components';

export const ContainerOnBoarding = styled.main`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.colors.blue[600]};
  position: relative;
`;

export const ContainerBoardModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
`;

export const OnBoardImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  inset: 0;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 596px;
  width: 100%;
  border-radius: 16px;
  padding: 24px;
  background-color: white;
`;

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0px 20px;
  width: 100%;
`;

export const Tab = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
`;

export const TabLabel = styled.span`
  margin-bottom: 5px;
  font-weight: 500;
  line-height: 1.2rem;
  color: ${props => props.theme.colors.gray[600]};

  &[data-active='true'] {
    color: ${props => props.theme.colors.blue[800]};
  }
`;

export const TabLine = styled.div`
  width: 258px;
  height: 2px;
  transition: width 0.3s ease-in-out;

  &[data-active='true'] {
    background-color: ${props => props.theme.colors.blue[800]};
  }
`;

export const TabWrapper = styled.div`
  &:first-child {
    margin-right: 5px;
  }

  &:last-child {
    margin-left: 5px;
  }
`;

export const ContainerSpinnerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  .spinner {
    display: block;
    width: 5rem;
    height: 5rem;
  }

  .spinner::before {
    border-color: ${props => props.theme.colors.blue[800]};
  }
`;
