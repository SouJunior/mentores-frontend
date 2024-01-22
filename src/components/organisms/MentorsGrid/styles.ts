import styled from 'styled-components'

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
  font-size: 1.5rem;
  font-weight: 600;
  color: #003986;
  margin-top: 10px;
`

export const CTASub = styled.span`
  font-size: 1rem;
  color: #666666;
  font-weight: 400;
`
