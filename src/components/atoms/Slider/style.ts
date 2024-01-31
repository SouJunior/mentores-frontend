import { device } from '@/styles/theme'
import styled from 'styled-components'

export const SwiperContainer = styled.div`
  position: relative;

  .swiper-slide {
    max-width: 19rem;
    width: 100% !important;
  }

  @media ${device.desktopM} {
    .swiper-slide:first-child {
      padding-left: 2rem;
    }
  }
`
