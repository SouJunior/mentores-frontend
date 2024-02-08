import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 387px;
  padding: 0px 1.5rem 1.5rem;
`

export const CropTitle = styled.h4`
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: ${(props) => props.theme.colors.black[200]};
  margin-right: auto;
`

export const CropInfo = styled.span`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4rem;
  color: ${(props) => props.theme.colors.black[200]};
  margin-right: auto;
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

export const CropControlsContainer = styled.div`
  width: 100%;
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 1rem;

  button {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

export const ControlButton = styled.span`
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  color: ${(props) => props.theme.colors.black[200]};
`

export const StyledHR = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.gray[700]};
  margin-top: 0.25rem;
`
