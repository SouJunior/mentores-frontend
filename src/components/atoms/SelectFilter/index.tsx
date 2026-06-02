'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Popover } from '@/components/ui/popover';
import { ChevronDown as ExpandMoreIcon } from 'lucide-react';
import { CheckboxLabel, SelectContent, SelectTrigger } from './styled';

interface SelectFilterProps {
  options: string[];
  selectName?: string;
  onChange: (selectedOptions: string[]) => void;
  selectedOptions: string[];
}

export default function SelectFilter({
  options,
  selectName,
  onChange,
  selectedOptions,
}: SelectFilterProps) {
  const handleOptionChange = (option: string) => {
    const newSelectedOptions = [...selectedOptions];
    if (newSelectedOptions.includes(option)) {
      newSelectedOptions.splice(newSelectedOptions.indexOf(option), 1);
    } else {
      newSelectedOptions.push(option);
    }
    onChange(newSelectedOptions);
  };

  return (
    <Popover>
      <SelectTrigger>
        {selectName}
        <ExpandMoreIcon size={16} />
      </SelectTrigger>

      <SelectContent side="bottom" sideOffset={0} align="start">
        {options.map(option => (
          <CheckboxLabel key={option}>
            <Checkbox
              checked={selectedOptions.includes(option)}
              onCheckedChange={() => handleOptionChange(option)}
            />
            {option}
          </CheckboxLabel>
        ))}
      </SelectContent>
    </Popover>
  );
}
