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
