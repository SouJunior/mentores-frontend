import Link from 'next/link'
import styled from 'styled-components'

export const MentorsComponent = styled.section`
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 90px 0;
`

export const MentorsContentContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
`

export const MentorsContent = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
`

export const MentorsTitle = styled.h1`
  color: ${(props) => props.theme.colors.gray[700]};
  font-size: 2.5rem;
  font-family: 'Radio Canada';
  font-weight: 700;
  line-height: 120%;
`

export const SeeAll = styled(Link)`
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.blue[400]};
  color: ${(props) => props.theme.colors.blue[400]};

  margin-right: 1.5rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.blue[400]};
    color: #fff;
  }
`

export const ArrowSliderBtn = styled.button`
  all: unset;
  width: 2.2rem;
  height: 2.2rem;
  border: 1px solid ${(props) => props.theme.colors.blue[400]};
  color: ${(props) => props.theme.colors.blue[400]};
  border-radius: 9999px;
  cursor: pointer;

  display: grid;
  place-content: center;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  & + & {
    margin-left: 0.75rem;
  }
`
