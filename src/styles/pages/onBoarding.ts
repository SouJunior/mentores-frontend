import Image from 'next/image'
import styled from 'styled-components'

export const ContainerOnBoarding = styled.main`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.colors.gradient};
  position: relative;
`

export const ContainerBoardModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
`

export const OnBoardImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  inset: 0;
`
