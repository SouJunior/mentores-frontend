import { device } from '@/styles/theme'
import styled from 'styled-components'

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  background-color: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  padding: 1.5rem 1rem;
  text-align: center;

  img {
    width: 10rem;
    height: 10rem;

    @media ${device.mobileL} {
      width: 7.875rem;
      height: 7.875rem;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    .title {
      color: ${(props) => props.theme.colors.blue[850]};
      font-size: 1.25rem;
      line-height: 1.5rem;
      font-weight: 500;
    }

    p {
      color: ${(props) => props.theme.colors.black[200]};
      font-size: ${(props) => props.theme.fontSizes.sm};
      font-weight: 400;
      line-height: 1.4rem;
      max-width: 15.75rem;
    }
  }
`
