import styled from 'styled-components';
import { Modal } from '../Modal';

export const Container = styled(Modal.Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  max-width: 24.18rem;
  width: 100%;
  padding: 1.5rem;
  position: relative;
`;

export const CropTitle = styled(Modal.Title)`
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: ${props => props.theme.colors.black[200]};
  margin-right: auto;
`;

export const CropInfo = styled.span`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4rem;
  color: ${props => props.theme.colors.black[200]};
  margin-right: auto;
`;

export const CropContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  padding: 10px;
`;

export const CropImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid red;
`;

export const CropControlsContainer = styled.div`
  width: 100%;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 1rem;
`;

export const ModalCloseBtn = styled(Modal.Close)`
  position: static;
  color: ${props => props.theme.colors.blue[800]};
  padding-left: 1rem;
  padding-right: 1rem;

  &.save-image-editor-btn {
    background-color: ${props => props.theme.colors.blue[800]};
    color: ${props => props.theme.colors.white};
    line-height: 0.7;
  }
`;

export const ControlButton = styled.span`
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  color: ${props => props.theme.colors.black[200]};
`;

export const StyledHR = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.colors.gray[700]};
  margin-top: 0.25rem;
`;

export const ModalClose = styled(Modal.Close)`
  top: 1.5rem;
  right: 1.5rem;
`;
