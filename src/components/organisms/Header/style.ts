import styled, { css } from 'styled-components';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { device } from '@/styles/theme';

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media ${device.desktopS} {
    padding: 1rem;
  }

  .navigation {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.25rem 0;

    .mySpan {
      background-color: ${props => props.theme.colors.blue[800]};
      width: 2px;
      height: 2.5rem;
    }

    .nav-logo {
      width: 15.5rem;
      height: 2.5rem;

      @media ${device.mobileL} {
        width: 11.9rem;
        height: 2rem;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      a {
        padding: 0.25rem 0.5rem;
        font-size: 1.25rem;
        line-height: 1.75rem;
        color: ${props => props.theme.colors.blue[800]};
        border-top: 2px solid transparent;
        border-bottom: 2px solid transparent;

        &:hover {
          font-weight: 600;
          font-size: 1.225rem;
        }
      }
    }

    @media ${device.desktopXS} {
      .mySpan,
      .nav-links {
        display: none;
      }
    }
  }
`;

export const GroupBtn = styled.div`
  display: flex;
  gap: 1rem;

  @media ${device.desktopXS} {
    display: none;
  }
`;

export const AvatarGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
`;

export const DropdownMenuTrigger = styled(DropdownMenu.Trigger)`
  all: unset;

  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  line-height: 0;

  @media ${device.mobileL} {
    gap: 0.5rem;
  }

  img {
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;

    @media ${device.mobileL} {
      width: 2rem;
      height: 2rem;
    }
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
    color: #666;
    rotate: 270deg;
    transition: rotate 0.3s;
  }

  &[data-state='open'] svg {
    rotate: 90deg;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px rgba(17, 101, 186, 0.6);
  }
`;

export const DropdownMenuContent = styled(DropdownMenu.Content)`
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: ${props => props.theme.colors.black[200]};
  display: flex;
  flex-direction: column;
  z-index: 1;

  width: 17rem;

  .menu-burger-links {
    display: none;
    flex-direction: column;

    a {
      padding: 1rem;
      line-height: 1.2rem;
      color: ${props => props.theme.colors.blue[800]};
      outline: 0;
    }

    @media ${device.desktopXS} {
      display: flex;
    }
  }

  span {
    padding: 0 1rem;
  }

  @media ${device.desktopXS} {
    width: var(--radix-dropdown-menu-content-available-width);
    border-radius: 0;
    margin-top: -3px;
  }
`;

export const DropdownMenuLabel = styled.strong`
  font: 500 1.25rem 'Radio Canada';
  line-height: 120%;
  padding: 0.5rem 1rem;
`;

export const DropdownMenuSeparator = styled(DropdownMenu.Separator)`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.colors.gray[600]};
  margin: 0.5rem 0;

  &.with-user-log-in {
    display: none;

    @media ${device.desktopXS} {
      display: block;
    }
  }
`;

const baseBtnStyles = css`
  all: unset;
  cursor: pointer;
  display: block;
  padding: 1rem;
  line-height: 120%;
  flex: 1;
  transition: 0.2s;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.gray[250]};
  }
`;

export const LinkUserAccount = styled(Link)`
  ${baseBtnStyles}

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.black[200]};
    background-color: ${props => props.theme.colors.gray[250]};
  }
`;

export const SignOutBtn = styled(DropdownMenu.Item)`
  ${baseBtnStyles}
  color: ${props => props.theme.colors.red[300]};
`;

// Menu Burger
export const MenuBurgerTrigger = styled(DropdownMenu.Trigger)`
  all: unset;
  display: none;
  cursor: pointer;
  align-self: center;

  color: ${props => props.theme.colors.blue[800]};
  line-height: 0;
  transition: transform 0.3s;

  &[data-state='open'] {
    transform: rotate(90deg);
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media ${device.desktopXS} {
    display: block;
  }
`;

export const MenuBurgerOverlay = styled.div`
  display: none;
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  inset: 0;
  z-index: 1;
  margin-top: 5rem; // Header's height

  @media ${device.desktopXS} {
    display: block;
  }
`;

export const MenuBurgerContent = styled(DropdownMenu.Content)`
  display: none;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 1;

  @media ${device.desktopXS} {
    display: flex;
  }

  @media ${device.mobileL} {
    margin-top: -4px;
  }

  background-color: ${props => props.theme.colors.white};
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-top: 2px solid ${props => props.theme.colors.gray[500]};

  padding: 1rem 0;
  color: ${props => props.theme.colors.blue[800]};
  width: var(--radix-dropdown-menu-content-available-width);

  .menu-burger-links {
    display: flex;
    flex-direction: column;

    a {
      padding: 1rem;
      line-height: 1.2rem;
    }
  }

  [role='menuitem'] {
    outline: 0;
  }
`;

export const Divider = styled.hr`
  border: 0;
  border-top: 2px solid ${props => props.theme.colors.gray[500]};
`;

export const GroupBtnMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 1rem 0;
`;
