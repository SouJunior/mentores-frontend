import styled from 'styled-components'
import * as Tabs from '@radix-ui/react-tabs'

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;

  min-height: 100vh;

  main {
    flex: 1;
  }
`

export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  color: ${(props) => props.theme.colors.black[200]};
`

export const AsideTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 600;
  line-height: 2.4rem;
`

export const AsideDivider = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.colors.gray[600]};
  width: 100%;
`

export const ContentDivider = styled.div`
  width: 2px;
  background-color: ${(props) => props.theme.colors.gray[250]};
`

export const AsideNavContainer = styled(Tabs.List)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const AsideNavItem = styled(Tabs.Trigger)`
  all: unset;

  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 400;

  padding: 1rem;
  padding-left: 0;
  cursor: pointer;
  transition: 0.3s;

  &[data-state='active'] {
    font-weight: 500;
    color: ${(props) => props.theme.colors.blue[850]};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.gray[200]};
  }
`
