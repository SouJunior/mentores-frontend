import { device } from '@/styles/theme'
import styled from 'styled-components'

export const MentorsComponent = styled.section`
  background: ${(props) => props.theme.colors.blue[25]};
`

export const MentorsContentContainer = styled.div`
  position: relative;
  padding: 4rem 2rem;
  padding-right: 0;

  @media ${device.desktopM} {
    max-width: none;
    padding: 4rem 0;
  }

  @media ${device.mobileL} {
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
  }
`

export const MentorsContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`

export const ContainerButtons = styled.div`
  display: flex;
  align-self: center;
  gap: 1.5rem;

  .arrow-slider {
    color: ${(props) => props.theme.colors.blue[800]};
    padding: 0.5rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`

export const MentorsTitle = styled.h2`
  color: ${(props) => props.theme.colors.black[200]};
  font-size: ${(props) => props.theme.fontSizes.xxl};
  font-weight: 600;
  line-height: 120%;

  @media ${device.desktopM} {
    padding: 0 2rem;
  }

  @media ${device.desktopS} {
    padding: 0 1rem;
  }

  @media ${device.tablet} {
    font-size: ${(props) => props.theme.fontSizes.xl};
  }
`
