import styled from "styled-components";

export const ConatinerCheckbox = styled.label`
  display: inline-block;
  position: relative;
  padding-left: 10px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font: 100% ${(props)=> props.theme.fontSizes.sm};
  font-weight: 400;
  font-size: 16px;
  color: ${(props)=> props.theme.colors.blue[400]};
`