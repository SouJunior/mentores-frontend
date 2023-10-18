import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #6666;
  display: flex;
  flex-direction: column;
  margin-top: -80px;
  gap:10px;
`;

export const MentorsContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  width: 100vw;
  min-height: 100vh;
  padding: 20px 50px;
  
`;

export const SubHeaderContainer = styled.div`
  display: flex;
  height: 100px;
  flex-direction: column;
  padding: 10px 50px;
`;

export const TitleContainer = styled.span`
  font-size: 14px;
  padding: 0px 50px;
  color: #666666;
  font-weight: 400;
`;

export const SubTitleContainer = styled.span`
  font-size: 14px;
  color: #003986;
`;

export const CTAMain = styled.span`
  font-size: 32px;
  font-weight: 600;
  padding: 15px 50px;
  color: #003986;
  display:flex;
  flex-direction: column;
`;
export const CTASub = styled.span`
  font-size: 16px;
  color: #666666;
  font-weight: 400;

`;

