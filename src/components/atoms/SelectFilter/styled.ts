import styled from 'styled-components';
import * as Select from '@radix-ui/react-select';
import * as Checkbox from '@radix-ui/react-checkbox';

export const SelectTrigger = styled(Select.Trigger)`
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
  &[data-state='open'] {
    border-radius: 8px 8px 0px 0px;
    color: #003986;
    border-color: #003986;
  }

  &[data-state='open'] svg {
    rotate: 180deg;
    transition: all 0.3s;
  }
`;

export const SelectContent = styled(Select.Content)`
  width: var(--radix-select-trigger-width);
  max-height: var(--radix-select-content-available-height);
  background-color: #fff;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  z-index: 9999;
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

  label {
    font-size: 1rem;
    line-height: 1.4rem;
  }
`;

export const CheckboxRoot = styled(Checkbox.Root)`
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #323232;
  background-color: #fff;
  padding: 1px;
`;

export const CheckboxIndicator = styled.div`
  width: 100%;
  height: 100%;
  background-color: #003986;
  border-radius: 0.25rem;
`;
