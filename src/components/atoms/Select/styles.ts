import * as Select from '@radix-ui/react-select';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import styled from 'styled-components';

export const SelectTrigger = styled(Select.Trigger)`
  all: unset;
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid ${props => props.theme.colors.gray[700]};
  color: ${props => props.theme.colors.gray[700]};
  line-height: 150%;

  span {
    transition: 0.1s;
  }

  &[data-placeholder] {
    color: ${props => props.theme.colors.gray[600]};
  }

  svg {
    color: ${props => props.theme.colors.gray[700]};
  }

  &:focus-visible {
    border: 1px solid ${props => props.theme.colors.blue[400]};
    box-shadow: 0 0 0 1px ${props => props.theme.colors.blue[850]};
  }
`;

export const SelectContent = styled(Select.Content)`
  background-color: #fff;
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: 2px 0 16px rgba(0, 0, 0, 0.1);
  max-height: 11.25rem;
  overflow: hidden;

  width: var(--radix-select-trigger-width);
`;

export const SelectItemContainer = styled(Select.Item)`
  padding: 0.5rem;
  line-height: 150%;
  color: ${props => props.theme.colors.gray[700]};
  transition: 0.3s;
  cursor: pointer;
  width: max-content;
  margin: 0 auto;
  border-radius: 0.25rem;
  outline: none;

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.gray[250]};
  }
`;

export const ScrollAreaViewport = styled(ScrollArea.Viewport)`
  max-height: 11.25rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`;

export const ScrollAreaBar = styled(ScrollArea.Scrollbar)`
  width: 0.25rem;
`;

export const ScrollAreaThumb = styled(ScrollArea.Thumb)`
  border-radius: 0.25rem;
  background: ${props => props.theme.colors.gray[250]};
`;
