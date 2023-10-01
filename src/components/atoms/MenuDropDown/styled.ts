import styled from "styled-components";

interface DropDownProps {
  isvisible: boolean;
}

export const MenuContainer = styled.div<DropDownProps>`
  position: absolute;
  margin-top: 50px;
  right: 0px;
  width: 270px;
  height: 169px;
  border-radius: 15px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
  padding: 10px 15px;
  opacity: ${({ isvisible }) => (isvisible ? "1" : "0")};
  visibility: ${({ isvisible }) => (isvisible ? "visible" : "hidden")};
  z-index:9999;
  background-color:white;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
`;

export const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  justify-content: space-around;
`;

export const UserName = styled.span`
  font-size: 20px;
  color: #323232;
  font-weight: 500;
`;

export const UserType = styled.span`
  font-size: 16px;
  color: #323232;
`;

export const StyledHR = styled.div`
  width: 100%;
  height: 2px;
  background-color: #6666;
  margin-top: 5px;
`;
