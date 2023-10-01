import styled from "styled-components";

export const Dotted = styled.div`
  width: 183px;
  height: 198px;
  border-radius: 8px;
  border: 2px dotted black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:10px;
  padding:5px 0px;
`;

export const StyledImportant = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  letter-spacing: 0em;
  text-align: center;
  width: 90%;

  .last {
    color: ${(props) => props.theme.colors.blue[600]};
  }
`;

export const StyledInfo = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
`;

export const StyledInfoContainer = styled.div`
  text-align: right; 
  width: 100%;
  margin-top:-10px;
`;


export const FormContainer = styled.div `
width: 100%;

.asterisk{
  color:${(props) => props.theme.colors.blue[600]}
}
`

export const StyledHR = styled.div`
  width: 100%;
  height: 2px;
  background-color: #6666;
  margin-top: 30px;
`;

export const ButtonContainer = styled.div`

display:flex;
width: 100%;
justify-content: flex-end;
gap:2px;
`

export const NextButton = styled.button`
  width: 106px;
  height: 48px;
  padding: 12px, 16px, 12px, 16px;
  border-radius: 8px;
  background-color: ${(props) => (props.disabled ? "#ACACAC" : props.theme.colors.blue[700])};
  border: none;
  color: white;
  font-size: 16px;
  margin-top: 15px;
  align-self: flex-end;
`;

export const BackButton = styled.button`
  width: 106px;
  height: 48px;
  padding: 12px, 16px, 12px, 16px;
  border-radius: 8px;
  background-color: white;
  border: none;
  color: ${(props) => props.theme.colors.blue[700]};
  font-size: 16px;
  margin-top: 15px;
  align-self: flex-end;
`;
