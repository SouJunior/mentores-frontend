import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.colors.blue[600]};
`

export const ContainerOnboarding = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: ${(props) => props.theme.fontSizes.xxl};
    color: ${(props) => props.theme.colors.white};
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .description-onboarding {
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSizes.lg};
    font-weight: 600;
    line-height: 1.8rem;
    margin-bottom: 3rem;
  }
`

export const ContainerListCard = styled.div`
  display: flex;
  gap: 1.5rem;
`
