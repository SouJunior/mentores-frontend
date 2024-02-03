import { device } from '@/styles/theme'
import styled from 'styled-components'

export const SwiperContainer = styled.div`
  position: relative;

  .swiper-slide {
    max-width: 19rem;
  }

  @media ${device.desktopM} {
    .swiper-slide:first-child {
      padding-left: 2rem;
    }
  }

  @media ${device.desktopS} {
    .swiper-slide,
    .swiper-slide:first-child {
      padding-left: 1.5rem;
    }

    .swiper-slide:last-child {
      padding-right: 1rem;
    }
  }
`
