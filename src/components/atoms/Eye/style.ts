import styled from "styled-components";

export const EyeContainer = styled.button<
  Partial<{ left: number; marginTop: number; paddingTop:number }>
>`
  position: absolute;
  border: none;
  height: 48px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.gray[700]};
  left: ${(props) => props.left}px;
  margin-top: ${(props) => props.marginTop}px;
  cursor: pointer;
  outline: none;
  padding-top:${(props) => props.paddingTop}px;
  z-index:1;
`;
