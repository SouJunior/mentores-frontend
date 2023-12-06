import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 387px;
  height: 528px;
  padding: 0px 30px;
  gap: 10px;
`

export const CropInfo = styled.span`
  text-align: left;
  width: 100%;
  font-weight: 600;
`

export const CropContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  padding: 10px;
`

export const CropImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid red;
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  width: 100%;
`

export const ButtomsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 5px;
`

export const SaveButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.blue[700]};
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`

export const CancelButtom = styled.button`
  padding: 10px 20px;
  background-color: white;
  color: ${(props) => props.theme.colors.blue[700]};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.blue[700]};
    color: white;
  }
`

export const ControlButton = styled.span`
  font-size: 25px;
  cursor: pointer;
`

export const StyledHR = styled.div`
  width: 100%;
  height: 2px;
  background-color: #6666;
`
