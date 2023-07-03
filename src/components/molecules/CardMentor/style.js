import styled from "styled-components";

export const CardImage = styled.img`
  max-width: 200px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const CardTitle = styled.h1`
  font-family: "Radio Canada";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  color: #5d5f5d;
  align-self: flex-start;
  margin-left: 20px;
  margin-bottom: 5px;
  margin-top:5px;
`;

export const CardSubtitle = styled.h2`
  font-family: "Radio Canada";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #5d5f5d;
  align-self: flex-start;
  margin-left: 20px;
  height: 60px;
`;

export const CardStacks = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 6px 12px;
  gap: 10px;
  margin-top: 25px;
  width: 100%;
  margin-left: 10px;
`;

export const CardStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  background: #5d5f5d;
  border-radius: 4px;
  font-family: "Radio Canada";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: #fdfdfd;
`;

export const CardButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;
  border-color: #046ad0;
  width: 256px;
  height: 48px;

  background: #046ad0;
  border-radius: 8px;

  font-family: "Radio Canada";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  color: #fdfdfd;

  margin-top: 10px;
  &:hover {
    background-color: #fdfdfd;
    color: #046ad0;
  }
`;
