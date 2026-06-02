import styled, { keyframes, createGlobalStyle } from 'styled-components';

const fadeInOut = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const GlobalStyle = createGlobalStyle<{ overflowDisabled: boolean }>`
  body {
    overflow-y: ${props => (props.overflowDisabled ? 'hidden' : 'auto')};
  }
`;

export const BackgroundOverlay = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9998;
  display: ${props => (props.visible ? 'block' : 'none')};
`;

export const ToastContainer = styled.div<{ visible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 9999;
  transform: translate(-50%, -50%);

  border-radius: 8px;
  width: 400px;
  height: 207px;

  opacity: ${props => (props.visible ? '1' : '0')};
  animation: ${fadeInOut} 0.3s ease-in-out;
  background-color: #ffff;
`;

export const ContainerContentToast = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 17px;
`;

export const ContainerToastTitle = styled.div`
  color: #149911;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

export const ContainerToastIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerToastIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerToastIconClose = styled.div`
  position: absolute;
  right: 3%;
  top: 5%;

  .iconClose {
    cursor: pointer;
  }
`;

export const ContainerButton = styled.button`
  padding: 12px 56px;
  border-color: #5d5f5d;
  color: #5d5f5d;
  transition: ease-in-out 0.3s;
  background-color: transparent;
  font-size: 16px;

  &:hover {
    transition: ease-in-out 0.3s;
    transform: scale(1.1);
  }
`;
