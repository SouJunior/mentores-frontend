import Image from 'next/image'
import styled from 'styled-components'

export const ContainerLogin = styled.div`
  background: ${(props) => props.theme.colors.blue[600]};

  main {
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;
    padding: 2rem 0;
    padding-right: 2.75rem;

    width: 100%;
    min-height: 100vh;
  }
`

export const ContainerImage = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1280px;
`

export const MyImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
