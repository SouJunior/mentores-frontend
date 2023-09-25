import styled from "styled-components";

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