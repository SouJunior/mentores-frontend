import styled from "styled-components";

export const ButtonClose = styled.button<Partial<{ showBtn: boolean }>>`
  position: absolute;
  top: 3px;
  right: 3px;
  font-size: 1.2rem;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  color: black;
  display: ${(props) => (props.showBtn === true ? "none" : "block")};
  background-color: rgba(255, 255, 255, 0);
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
