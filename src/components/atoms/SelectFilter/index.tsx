import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import * as Select from '@radix-ui/react-select';
import * as Checkbox from '@radix-ui/react-checkbox';

import {
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxRoot,
  SelectContent,
  SelectTrigger,
} from './styled';

interface SelectFilterProps extends Select.SelectProps {
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
  ...props
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
    <Select.Root {...props}>
      <SelectTrigger>
        <Select.Value placeholder={selectName} />
        <Select.Icon asChild>
          <ExpandMoreIcon />
        </Select.Icon>
      </SelectTrigger>

      <Select.Portal>
        <SelectContent
          side="bottom"
          position="popper"
          sideOffset={8}
          avoidCollisions={false}
        >
          <Select.Viewport>
            {options.map(option => (
              <CheckboxLabel key={option}>
                <CheckboxRoot
                  checked={selectedOptions.includes(option)}
                  onCheckedChange={() => handleOptionChange(option)}
                >
                  <Checkbox.Indicator>
                    <CheckboxIndicator />
                  </Checkbox.Indicator>
                </CheckboxRoot>
                {option}
              </CheckboxLabel>
            ))}
          </Select.Viewport>
        </SelectContent>
      </Select.Portal>
    </Select.Root>
  );
}
