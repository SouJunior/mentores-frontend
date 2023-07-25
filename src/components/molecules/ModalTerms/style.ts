import styled from "styled-components";

export const ModalLogo = styled.img`
  max-width: 120px;
  align-self: center;
`;
export const ModalHash = styled.p`
  font-family: "Radio Canada";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #1165ba;
  margin-top: 5px;
`;
export const ModalBox = styled.div`
  overflow: auto;
  background-color: white;
  width: 100%;
  padding: 24px;
  margin-top: 30px;
  font-family: "Radio Canada";

  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-thumb {
    background: #5d5f5d;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(215, 217, 215, 0.5);
  }
`;

export const ModalBoxTitle = styled.h2`
  width: 521px;
  height: 24px;
  font-family: "Radio Canada";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #1165ba;
`;

export const ModalBoxSubTitle = styled.h2`
  font-family: "Radio Canada";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  color: #000000;
  margin-top: 15px;
`;
export const ModalBoxParagraph = styled.p`
  width: 100%;
  margin: 12px 0px;
  font-family: "Radio Canada";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #000000;
`;
