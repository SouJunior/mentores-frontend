import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 596px;
  height: 547px;
  border-radius: 16px;
  padding: 24px;
  background-color: white;
  position: absolute;
  top: 50px;
  left: 390px;
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

export const TabLabel = styled.div`
  margin-bottom: 5px;
`;

export const TabLine = styled.div`
  width: 258px;
  height: 2px;
  background-color: ${(props) => props.theme.colors.blue[700]};
`;

export const TabWrapper = styled.div`
  &:first-child {
    margin-right: 5px;
  }

  &:last-child {
    margin-left: 5px;
  }
`;

export const StyledSpan = styled.span`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
`;

export const StyledTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 25px;
`;

export const StyledImportant = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  width: 100%;
  margin-top: 15px;

  &::first-letter {
    color: ${(props) => props.theme.colors.blue[600]};
  }
`;

export const StyledHR = styled.div`
  width: 100%;
  height: 2px;
  background-color: #6666;
  margin-top: 30px;
`;

export const NextButton = styled.button `
width: 106px;
height:48px;
padding: 12px, 16px, 12px, 16px;
border-radius: 8px;
background-color: ${(props) => props.theme.colors.blue[700]};
border:none;
color: white;
font-size: 16px;
margin-top: 15px;
align-self: flex-end;

`
