import styled from 'styled-components'

export const ContainerFooter = styled.div`
  padding: 48px;
  display: flex;
  justify-content: space-around;
  gap: 48px;
  background: #5d5f5d;
  color: #fff;
  font-size: 16px;
`

export const ContainerModais = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  gap: 24px;

  span {
    width: 1px;
    height: 24px;
    background-color: #fff;
  }
`

export const ContainerSocialMedias = styled.div`
  background: #5d5f5d;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
  padding: 0px 0px 64px;

  a {
    &:hover {
      filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.6));
    }
  }
`

export const SectionFooter = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: fit-content;
  max-height: 120px;
`

export const SectionFooterLinks = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  max-width: fit-content;

  h2 {
    font-size: 16px;
    margin-bottom: 32px;
    line-height: 20px;
  }

  a {
    color: #fff;
    text-align: justify;
    margin-bottom: 24px;
    line-height: 24px;
  }
`
