import { PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import styled from 'styled-components';

export const SelectTrigger = styled(PopoverTrigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 12.25rem;

  background-color: #fff;
  color: #323232;
  padding: 0.75rem 1.5rem;
  border: 1px solid #666;
  border-radius: 0.5rem;
  cursor: pointer;
  outline: 0;

  font-size: 1rem;
  font-weight: 400;

  transition:
    border-radius 0.3s,
    color 0.1s,
    border-color 0.1s;

  &:hover,
  &[data-open] {
    border-radius: 8px 8px 0px 0px;
    color: #003986;
    border-color: #003986;
  }

  &[data-open] svg {
    rotate: 180deg;
    transition: all 0.3s;
  }
`;

export const SelectContent = styled(PopoverContent)`
  width: 12.25rem;
  max-height: 16rem;
  overflow-y: auto;
  background-color: #fff;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  z-index: 9999;
  padding: 0;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1.4rem;
  color: #323232;
  cursor: pointer;
`;
