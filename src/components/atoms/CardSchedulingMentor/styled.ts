import styled from 'styled-components'

export const CardContainer = styled.div`
  height: 17rem;
  width: 100%;
  background-color: #ffff;
  border-radius: 16px;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.2);
    border-radius: 24px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    background-color: #d9d9d9;
  }
`

export const StyledName = styled.div`
  font-size: 1.5rem;
  line-height: 1.8rem;
  font-weight: 500;
  max-width: 10rem;
`

export const StacksContainer = styled.span`
  display: flex;
  gap: 8px;
  width: 100%;
  flex-wrap: wrap;
`

const BaseButton = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  line-height: 0.9rem;
  border: none;
`

export const InfoButton = styled(BaseButton)`
  background-color: #ffff;
  color: #003986;
  text-align: center;

  &:hover {
    color: #002c66;
  }
`

export const ButtonsContainer = styled.span`
  display: flex;
  gap: 0.5rem;
`
