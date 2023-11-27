import styled from 'styled-components'

export const ContainerModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  max-width: 25rem;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1.6rem 2rem;
`

export const TitleModal = styled.h1`
  color: ${(props) => props.theme.colors.blue[500]};
  font-size: ${(props) => props.theme.fontSizes.lg};
`

export const ImageContainer = styled.div`
  width: 17.825rem;
  height: 17.825rem;

  img {
    height: 100%;
  }
`

export const Message = styled.span`
  color: ${(props) => props.theme.colors.gray[700]};
  font-size: ${(props) => props.theme.fontSizes.sm};
  text-align: center;
  line-height: 150%;
  margin-top: -1rem;
  margin-bottom: 1rem;
`
