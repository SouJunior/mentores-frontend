import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f1f3f5;
  display: flex;
  flex-direction: column;
  margin-top: -80px;
  gap: 10px;
`

export const MainContent = styled.main``

export const MentorsContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  grid-auto-rows: max-content;
  grid-gap: 30px;

  max-width: 1280px;
  width: 100%;
  margin: 0 auto;

  min-height: 100vh;
  padding: 2rem;
  position: relative;
`

export const SubHeaderContainer = styled.div`
  display: flex;
  height: 100px;
  flex-direction: column;
  padding: 1.5rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
`

export const TitleContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    color: #666666;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.05rem;

    &:hover {
      color: #666666;
      text-decoration: underline;
    }
  }

  div[aria-hidden] {
    width: 0.5rem;
    height: 0.5rem;
    background-color: #666666;
    border-radius: 100%;
  }
`

export const SubTitleContainer = styled.span`
  font-size: 0.875rem;
  color: #003986;
  line-height: 1.05rem;
`

export const CTAMain = styled.span`
  font-size: 32px;
  font-weight: 600;
  color: #003986;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
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
  gap: 0.75rem;
  width: 100%;
  flex-wrap: wrap;
  padding: 1.6rem 2rem 0;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`

export const Stack = styled.span`
  background: #fff;
  font-size: 0.875rem;
  line-height: 1.05rem;
  color: #323232;
  padding: 0.5rem 1rem;
  border-radius: 2.5rem;
  text-align: center;
`

export const Divider = styled.div`
  width: 2px;
  height: 2rem;

  background-color: #cbcbcb;
`

export const RemoveFiltersBtn = styled.button`
  all: unset;
  cursor: pointer;

  border-radius: 0.5rem;
  font-size: 1rem;
  text-align: center;

  color: #003986;

  &:hover {
    color: #002c66;
  }
`
