import styled from "styled-components";

export const EyeContainer = styled.button`
  position: absolute;
  border: none;
  height: 48px;
  background-color: transparent;
  color:${(props) => props.theme.colors.gray[400]};
  left:${(props)=>props.left};
  margin-top: ${(props) => props.marginTop};
  cursor:pointer;
  outline: none;
`;
