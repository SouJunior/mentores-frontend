import styled from "styled-components";

export const MentorsComponent = styled.section`
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 90px 0;
`;

export const MentorsContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
`;

export const MentorsTitle = styled.h1`
  color: #5d5f5d;
  font-size: 40px;
  font-family: "Radio Canada";
  font-weight: 700;
  line-height: 120%;
  margin-left: 50px;
  margin-bottom: 30px;
`;

export const MentorsTitleDetach = styled.span`
  color: #046ad0;
  font-size: 40px;
  font-family: "Radio Canada";
  font-weight: 700;
  line-height: 120%;
`;

export const SeeAll = styled.a`
  display: inline-flex;
  height: 42px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  color: #046ad0;
  font-size: 16px;
  font-family: "Radio Canada";
  line-height: 150%;

  background: transparent;
  border-radius: 8px;
  border: 1px solid #046ad0;
  box-shadow: 0px 1px 15px 0px rgba(17, 101, 186, 0.4);
  backdrop-filter: blur(8px);

  position: absolute;
  top: 18px;
  right: 140px;
  cursor: pointer;
  z-index: 10;
`;
