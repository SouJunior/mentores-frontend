import styled from "styled-components";

export const ItemInvisible = styled.div`
  height: 100px;
  width: 100px;
  border-radius: "12px";
  display: none;
`;

export const ItemPrimary = styled.div`
  height: 100px;
  width: 100px;
  background-color: ${(props) => props.theme.colors.blue[400]};
  border: 4px solid ${(props) => props.theme.colors.blue[400]};
  border-radius: "12px";
`;

export const ItemSecondary = styled.div`
  height: 100px;
  width: 100px;
  border: 4px solid ${(props) => props.theme.colors.blue[400]};
  background-color: transparent;
  border-radius: "12px";
`;

export const ItemImage = styled.div`
  height: 100px;
  width: 100px;
  object-fit: cover;
  border: none;
  border-radius: "12px";
`;
