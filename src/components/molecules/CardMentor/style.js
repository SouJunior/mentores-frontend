import styled from "styled-components";

export const CardImagem = styled.img`
  max-width: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const CardTitulo = styled.h1`
  font-family: "Radio Canada";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #5d5f5d;
  align-self: flex-start;
  margin-left: 20px;
  margin-bottom: 5px;
`;

export const CardSubtitulo = styled.h2`
  font-family: "Radio Canada";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #5d5f5d;
  align-self: flex-start;
  margin-left: 20px;
`;

export const CardSecaoAreas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  gap: 10px;
  margin-top: 35px;
`;

export const CardArea = styled.div`
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

export const CardAgendar = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;

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
`;
