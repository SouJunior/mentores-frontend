import * as Tabs from '@radix-ui/react-tabs';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 13.25rem minmax(0, 1fr);
  gap: 2rem;
  max-width: 86rem;
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: calc(100vh - 5rem);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const AsideContainer = styled.aside`
  min-height: 38rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.75rem 1.5rem;
  border: 1px solid ${props => props.theme.colors.gray[250]};
  border-radius: 0.5rem;
  background: ${props => props.theme.colors.white};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  color: ${props => props.theme.colors.black[200]};
`;

export const AsideTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: 600;
  line-height: 2.4rem;
  text-align: center;
`;

export const AsideDivider = styled.div`
  height: 1px;
  background-color: ${props => props.theme.colors.gray[600]};
  width: 100%;
`;

export const AsideNavContainer = styled(Tabs.List)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

export const AsideNavItem = styled(Tabs.Trigger)`
  all: unset;
  border-radius: 0.25rem;
  color: ${props => props.theme.colors.black[200]};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.2rem;
  padding: 0.75rem;
  transition: 0.2s;

  &[data-state='active'] {
    color: ${props => props.theme.colors.blue[800]};
    background-color: ${props => props.theme.colors.blue[25]};
  }

  &:hover {
    background-color: ${props => props.theme.colors.gray[200]};
  }
`;

export const ContentCard = styled.main`
  min-height: 38rem;
  padding: 2rem;
  border: 1px solid ${props => props.theme.colors.gray[250]};
  border-radius: 0.5rem;
  background: ${props => props.theme.colors.white};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
`;

export const ContainerSpinnerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  .spinner {
    display: block;
    width: 5rem;
    height: 5rem;
  }

  .spinner::before {
    border-color: ${props => props.theme.colors.blue[800]};
  }
`;
