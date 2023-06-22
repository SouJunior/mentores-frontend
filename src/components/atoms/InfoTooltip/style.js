import styled from "styled-components";

export const InfoContainer = styled.span`
  display: flex;
  justify-content: flex-end;
  height: 24px;
  position: absolute;
  right: 0;
  margin-right: 30px;
`;

export const Tooltip = styled.div`
position: absolute;
color: #fff;
padding: 5px;
font-size: 12px;
border-radius: 3px;
opacity: ${(props) => (props.visible ? 1 : 0)};
visibility: ${(props) => (props.visible ? "visible" : "hidden")};
transition: opacity 0.3s ease-in-out;
`

export const TooltipContainer = styled.div`
  background-color: white;
  width: 400px;
  height: 145px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h3`
  color: blue;
`;

export const CriteriaList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;
`;

export const Criterion = styled.li`
  margin-bottom: 5px;
  color:black;
`;


export const Line = styled.span`
position: absolute;
left: 0;
top: 0;
bottom: 0;
width: 2px;
height:80%;
background-color: #000;
`;