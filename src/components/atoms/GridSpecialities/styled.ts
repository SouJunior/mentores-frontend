import styled from "styled-components";

export const GridContainer = styled.div `
display: grid;
grid-template-columns: repeat(3, 165px);
gap:20px;

margin-top: 30px;
`

export const SpecialityItem = styled.div`
  width: 172px;
  height: 32px;
  border-radius: 50px;
  padding: 8px 12px 8px 4px;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.blue[600] : "gray"};
  color: white;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:2px;
`;

export const StyledCount = styled.span `
font-family: Radio Canada;
font-size: 16px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
text-align: right;
width: 100%;
color: green;
margin-top: 15px;
`

