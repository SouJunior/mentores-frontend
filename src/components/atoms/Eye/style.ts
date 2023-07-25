import styled from "styled-components";

export const EyeContainer = styled.button<
  Partial<{ left: number; marginTop: number }>
>`
  position: absolute;
  border: none;
  height: 48px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.gray[400]};
  left: ${(props) => props.left}px;
  margin-top: ${(props) => props.marginTop}px;
  cursor: pointer;
  outline: none;
`;
