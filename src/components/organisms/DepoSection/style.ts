import { device } from '@/styles/theme'
import styled from 'styled-components'

export const ContainerDepo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem 2rem;

  max-width: 1280px;
  margin: 0 auto;
  width: 100%;

  @media ${device.desktopM} {
    max-width: none;
    padding: 4rem 0;
  }

  h2 {
    font-size: ${(props) => props.theme.fontSizes.xxl};
    font-weight: 600;
    line-height: 120%;
    color: ${(props) => props.theme.colors.black[200]};

    @media ${device.desktopM} {
      padding: 0 2rem;
    }
  }

  a {
    width: max-content;
    margin: 0 auto;
  }
`

export const ContainerSlider = styled.div`
  .swiper {
    padding: 0.25rem;
    padding-bottom: 0.75rem;
  }

  .swiper-slide {
    width: max-content !important;
  }

  @media ${device.desktopM} {
    .swiper-slide:first-child {
      padding-left: 2rem;
    }
  }
`
