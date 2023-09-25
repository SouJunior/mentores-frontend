import Image from "next/image";
import styled from "styled-components";

export const ContainerOnBoarding = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: -100px;
  background: ${(props) => props.theme.colors.gradient};
  position: relative;
`;

export const OnBoardImage = styled(Image)`
  width: 100%;
  height: 100vh;
  object-fit: contain;
`;