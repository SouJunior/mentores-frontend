import styled, { css } from 'styled-components';

interface BackgroundProps {
  $backgroundImage: string;
}

interface ProfileChoiceCardProps {
  $isSelected: boolean;
  $isMuted: boolean;
}

export const RegisterContainer = styled.main<BackgroundProps>`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem clamp(1rem, 5vw, 4rem);
  box-sizing: border-box;
  overflow: hidden;
  background-color: #267bc9;
  background-image: url(${props => props.$backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  @media (max-width: 1024px) {
    min-height: 100vh;
    justify-content: center;
    align-items: flex-start;
    padding: 1.5rem 1rem 3rem;
    overflow: visible;
    background-size: cover;
    background-position: center center;
  }
`;

export const RegisterBackButton = styled.button`
  all: unset;
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 2;
  color: ${props => props.theme.colors.blue[800]};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.blue[850]};
  }

  @media (max-width: 1024px) {
    position: relative;
    top: auto;
    left: auto;
    display: inline-flex;
    margin-bottom: 1rem;
    width: fit-content;
  }
`;

export const ProfileChoiceContainer = styled.main<BackgroundProps>`
  min-height: 100vh;
  overflow: hidden;
  background-color: #3684d8;
  background-image: url(${props => props.$backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const ProfileChoiceHeader = styled.header`
  height: 4.75rem;
  display: grid;
  grid-template-columns: minmax(16rem, 1fr) auto minmax(16rem, 1fr);
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
  background: ${props => props.theme.colors.white};
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);

  img {
    width: 16rem;
    height: auto;
  }

  nav {
    display: flex;
    justify-content: center;
    gap: 2rem;
    white-space: nowrap;
  }

  a {
    color: ${props => props.theme.colors.blue[800]};
    font-size: 1.25rem;
    font-weight: 500;
    text-decoration: none;
  }

  @media (max-width: 980px) {
    height: auto;
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 1rem;

    img {
      width: 13rem;
    }
  }
`;

export const ProfileChoiceActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;

  button {
    min-width: 5.5rem;
    white-space: nowrap;
  }

  button:last-child {
    min-width: 12.75rem;
  }

  @media (max-width: 980px) {
    justify-content: center;
  }
`;

export const ProfileChoiceStage = styled.section`
  min-height: calc(100vh - 4.75rem);
  display: flex;
  justify-content: center;
  padding: 5rem 1.5rem 4rem;

  @media (max-width: 980px) {
    min-height: auto;
    padding: 3rem 1rem;
  }
`;

export const ProfileSelectionContent = styled.div`
  width: min(56rem, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.colors.white};

  > p {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
  }

  h1 {
    margin-bottom: 3.75rem;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.1;
    text-align: center;
  }

  > button {
    min-width: 21.875rem;
    margin-top: 2rem;
    font-weight: 700;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }

  @media (max-width: 760px) {
    h1 {
      margin-bottom: 2rem;
    }

    > button {
      width: 100%;
      min-width: 0;
    }
  }
`;

export const ProfileChoiceGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const ProfileChoiceCard = styled.button<ProfileChoiceCardProps>`
  all: unset;
  min-height: 25.375rem;
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
  box-sizing: border-box;
  padding: 2rem;
  border-radius: 0.75rem;
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.blue[800]};
  box-shadow: 0 1rem 2rem rgba(0, 32, 80, 0.18);
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;

  ${props =>
    props.$isSelected &&
    css`
      border-top: 0.375rem solid ${props.theme.colors.blue[800]};
    `}

  ${props =>
    props.$isMuted &&
    css`
      opacity: 0.68;
    `}

  &:focus-visible {
    outline: 0.1875rem solid ${props => props.theme.colors.blue[800]};
    outline-offset: 0.25rem;
  }

  > svg {
    width: 2.5rem;
    height: 2.5rem;
    color: ${props => props.theme.colors.blue[800]};
  }

  h2 {
    margin-top: 0.5rem;
    color: ${props => props.theme.colors.blue[800]};
    font-size: 1.5rem;
    line-height: 1.3;
    font-weight: 700;
  }

  strong {
    color: ${props => props.theme.colors.blue[700]};
    font-size: 1rem;
    line-height: 1.45;
  }
`;

export const ProfileHint = styled.span`
  width: 100%;
  box-sizing: border-box;
  margin: 0.125rem 0;
  padding: 1.375rem 1.5rem;
  border-radius: 0.5rem;
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.gray[700]};
  box-shadow: 0 0.5rem 1.125rem rgba(0, 0, 0, 0.14);
  line-height: 1.45;
`;

export const ProfileBenefitItem = styled.span`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: ${props => props.theme.colors.blue[700]};
  font-weight: 700;
  line-height: 1.45;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    flex: 0 0 1.25rem;
    color: ${props => props.theme.colors.blue[800]};
  }
`;
