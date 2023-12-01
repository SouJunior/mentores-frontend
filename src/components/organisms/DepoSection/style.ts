import styled from 'styled-components'

export const ContainerDepo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 0px;
  background-color: ${(props) => props.theme.colors.gray[300]};

  h2 {
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 120%;
    color: ${(props) => props.theme.colors.blue[500]};
    margin-bottom: 60px;
  }
`

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  gap: 24px;
`
