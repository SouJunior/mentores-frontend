import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #f1f3f5;
  display: flex;
  flex-direction: column;
  margin-top: -80px;
  gap: 10px;
`

export const MentorsContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(23.5rem, 1fr));
  grid-auto-rows: max-content;
  grid-gap: 30px;
  width: 100vw;
  min-height: 100vh;
  padding: 20px 8%;
  padding-bottom: 2rem;
  position: relative;
`

export const SubHeaderContainer = styled.div`
  display: flex;
  height: 100px;
  flex-direction: column;
  padding: 24px 120px;
`

export const TitleContainer = styled.span`
  padding: 5px 50px;
  a {
    color: #666666;
    font-weight: 400;
    font-size: 14px;
  }
`

export const SubTitleContainer = styled.span`
  font-size: 14px;
  color: #003986;
`

export const CTAMain = styled.span`
  font-size: 32px;
  font-weight: 600;
  padding: 15px 50px;
  color: #003986;
  display: flex;
  flex-direction: column;
`
export const CTASub = styled.span`
  font-size: 16px;
  color: #666666;
  font-weight: 400;
`

export const NoResultContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`

export const NoResultMain = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: #003986;
  margin-top: 10px;
`

export const StacksContainer = styled.span`
  display: flex;
  gap: 8px;
  width: 100%;
  flex-wrap: wrap;
  padding: 24px 0px 0px 170px;
`

export const Stack = styled.span`
  background: #fff;
  font-size: 12px;
  line-height: 14px;
  height: 30px;
  min-width: 73px;
  color: #001633;
  padding: 8px;
  border-radius: 40px;
  text-align: center;
`
