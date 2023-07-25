import styled from "styled-components";

export const InfoContainer = styled.span`
  display: flex;
  justify-content: flex-end;
  height: 24px;
  position: absolute;
  right: 0;
  margin-right: 30px;
`;

export const Tooltip = styled.div<{ isVisible: boolean }>`
  position: absolute;
  color: #fff;
  padding: 5px;
  font-size: 12px;
  border-radius: 3px;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out;
`;

export const TooltipContainer = styled.div`
  background-color: white;
  width: 400px;
  height: 145px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 0px 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.blue[400]};
  font-size: 14px;
`;

export const CriteriaList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 15px;
`;

export const Criterion = styled.li`
  margin-bottom: 5px;
  color: black;
`;

export const Line = styled.span`
  position: absolute;
  left: 10px;
  top: 45px;
  bottom: 0;
  width: 2px;
  height: 50%;
  background-color: ${(props) => props.theme.colors.gray[700]};
`;
