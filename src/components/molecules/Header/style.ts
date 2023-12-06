import styled, { css } from 'styled-components'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'

export const ContainerHeader = styled.header`
  padding: 16px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header {
    display: flex;
    gap: 20px;
    align-items: center;
    .mySpan {
      background-color: ${(props) => props.theme.colors.blue[400]};
      width: 2px;
      height: 28px;
    }
  }
`

export const GroupBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
`

export const AvatarGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
`

export const DropdownMenuTrigger = styled(DropdownMenu.Trigger)`
  all: unset;

  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  line-height: 0;

  img {
    width: 2.75rem;
    height: 2.75rem;
    border: 2px solid #666;
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
`

export const DropdownMenuContent = styled(DropdownMenu.Content)`
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #323232;
  display: flex;
  flex-direction: column;

  width: 17rem;

  span {
    padding: 0 1rem;
  }
`

export const DropdownMenuLabel = styled.strong`
  font: 500 1.25rem 'Radio Canada';
  line-height: 120%;
  padding: 0.5rem 1rem;
`

export const DropdownMenuSeparator = styled(DropdownMenu.Separator)`
  width: 100%;
  height: 1px;
  background-color: #acacac;
  margin: 0.5rem 0;
`

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
    background-color: ${(props) => props.theme.colors.gray[300]};
  }
`

export const LinkUserAccount = styled(Link)`
  ${baseBtnStyles}

  &:hover,
  &:focus {
    color: #323232;
    background-color: ${(props) => props.theme.colors.gray[300]};
  }
`

export const SignOutBtn = styled(DropdownMenu.Item)`
  ${baseBtnStyles}
  color: ${(props) => props.theme.colors.red[300]};
`
