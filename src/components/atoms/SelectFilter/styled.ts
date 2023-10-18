import styled from "styled-components";

export const StyledSelect = styled.select`
  width: 196px;
  height: 100%;
  padding: 16px 24px 16px 24px;
  background-color: white;
  border: 1px solid #666666;
  color: #666666;
  border-radius: 8px;
  font-size: 16px;
  &:focus {
    border: 1px solid #003986;
    border-radius: 8px 8px 0px 0px;
    color: #003986;
  }
  option {
    color: #666666;
  }
`;
