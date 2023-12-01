import styled from 'styled-components'

export const EditPhotoContainer = styled.div`
  width: 387px;
  height: 388px;
  padding: 24px;
  border-radius: 16px;
  gap: 26px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledInfo = styled.span`
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
`

export const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 56px;
  padding: 0px 12px;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.theme.colors.gray1.neutral};
  color: #666;
  font-weight: bold;

  .icon {
    font-size: 30px;
  }
`

export const EditButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 56px;
  padding: 0px 12px;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.theme.colors.gray1.neutral};
  color: ${(props) => (props.disabled ? '#ccc' : '#666')};
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  .icon {
    font-size: 30px;
    opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  }
`

export const StyledHR = styled.div`
  width: 100%;
  height: 2px;
  background-color: #6666;
`

export const NextButton = styled.button`
  width: 78px;
  height: 48px;
  padding: 12px, 16px, 12px, 16px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.disabled ? '#ACACAC' : props.theme.colors.blue[700]};
  border: none;
  color: white;
  font-size: 16px;
  align-self: flex-end;
  margin-top: -10px;
`

export const AddPhotoButton = styled.label`
  width: 96px;
  height: 56px;
  background-color: ${(props) => props.theme.colors.gray1.neutral};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #666;

  .icon {
    font-size: 30px;
  }

  input[type='file'] {
    display: none;
  }
`
