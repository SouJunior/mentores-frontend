import styled from "styled-components";

export const EyeContainer = styled.button`
  position: absolute;
  border: none;
  height: 48px;
  background-color: transparent;
  color:${(props) => props.theme.colors.gray[400]};
  left:430px;
  margin-top: 23px;
  cursor:pointer;
`;
