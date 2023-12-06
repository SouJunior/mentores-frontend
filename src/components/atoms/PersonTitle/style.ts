import styled from 'styled-components'

export const ContainerTitle = styled.div`
  margin-bottom: 8px;
  margin-top: 60px;

  h2 {
    color: ${(props) => props.theme.colors.gray[700]};
    font-size: ${(props) => props.theme.fontSizes.xxl};
  }
`
