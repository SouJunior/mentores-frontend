import { device } from '@/styles/theme'
import styled from 'styled-components'

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  div {
    display: flex;
    gap: 20px;
  }

  @media ${device.mobileL} {
    gap: 0.6rem;

    div {
      gap: 0.6rem;
    }
  }
`
