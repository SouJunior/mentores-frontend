import styled from "styled-components";

interface DropdownMenuProps {
  open: boolean;
}

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background-color: white;
  color: #666666;
  padding: 16px 24px;
  border: 1px solid #666666;
  width: 196px;
  height: 44px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 400;
  &:hover {
    border-radius: 8px 8px 0px 0px;
    color: #003986;
    border: 1px solid #003986;
  }
`;

export const DropdownMenu = styled.div<DropdownMenuProps>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  display: ${({ open }) => (open ? "block" : "none")};
  z-index: 9999;
`;

export const CheckboxLabel = styled.label`
  display: block;
  margin-bottom: 14px;
  input {
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }
`;
