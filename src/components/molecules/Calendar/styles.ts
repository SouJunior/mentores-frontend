import { PopoverContent } from '@radix-ui/react-popover'
import styled from 'styled-components'
import * as Toggle from '@radix-ui/react-toggle'
import * as Popover from '@radix-ui/react-popover'

export const Container = styled(PopoverContent)`
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1rem 2.5rem 0.5rem;
  position: relative;
  max-width: 21rem;
  transition: none;
  box-shadow: 2px 0 16px rgba(0, 0, 0, 0.1);
`

export const CalendarActions = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

const BaseCalendarAction = styled.button`
  all: unset;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme.colors.gray[700]};
  position: absolute;
  top: 1.25rem;
  padding: 0.25rem;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px rgba(17, 101, 186, 0.6);
  }
`

export const LeftCalendarAction = styled(BaseCalendarAction)`
  left: 0.7rem;
`

export const RightCalendarAction = styled(BaseCalendarAction)`
  right: 0.5rem;
`

export const CalendarTable = styled.table`
  margin-top: 0.5rem;
  table-layout: fixed;
  border-collapse: collapse;
  color: ${(props) => props.theme.colors.gray[700]};
  width: 100%;

  thead th {
    font-weight: 700;
    line-height: 150%;
  }

  tbody td {
    box-sizing: border-box;
  }
`

interface CalendarDayProps {
  isNotCurrentMonth: boolean
}

export const CalendarDay = styled(Toggle.Root)<CalendarDayProps>`
  all: unset;
  cursor: pointer;
  width: 1.1rem;
  transition: 0.3s;
  text-align: center;
  color: ${(props) => props.isNotCurrentMonth && props.theme.colors.gray[300]};

  line-height: 150%;
  padding: 0.5rem;

  &:hover {
    background-color: rgba(215, 217, 215, 0.3);
  }

  &[data-state='on'] {
    color: ${(props) => props.theme.colors.blue[500]};
    font-weight: 700;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px rgba(17, 101, 186, 0.6);
  }
`

export const CalendarTrigger = styled(Popover.Trigger)`
  all: unset;
  cursor: pointer;
  padding: 0.75rem 1rem;
  border: 1px solid ${(props) => props.theme.colors.gray[700]};
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: space-between;

  line-height: 150%;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  &[data-state='closed']:hover {
    border: 1px solid ${(props) => props.theme.colors.blue[400]};
    box-shadow: 0 3px 6px 0 rgba(17, 101, 186, 0.6);
  }

  &[data-state='open'] {
    border: 1px solid ${(props) => props.theme.colors.blue[400]};
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.blue[400]};

    svg {
      color: ${(props) => props.theme.colors.blue[400]};
    }
  }
`
