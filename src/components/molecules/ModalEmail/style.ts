import styled from 'styled-components'

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  gap: 1.5rem;

  padding: 0 3.5rem;
`

export const HeaderModal = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 17.8125rem;
    height: 17.375rem;

    margin-top: -0.5rem;
    margin-bottom: -1.3rem;
  }
`

export const TitleModal = styled.h1`
  color: ${(props) => props.theme.colors.blue[500]};
  font-size: ${(props) => props.theme.fontSizes.lg};
`

export const Message = styled.p`
  color: ${(props) => props.theme.colors.gray[700]};
  font-size: 1rem;
  text-align: center;
  line-height: 150%;
  max-width: 15.5rem;
`

export const Hash = styled.span`
  color: ${(props) => props.theme.colors.blue[500]};
  font-size: 0.875rem;
  line-height: 150%;
`

export const FooterModal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.3rem;
  padding-bottom: 1.2rem;

  img {
    width: 6.75rem;
    height: 1rem;
  }
`
