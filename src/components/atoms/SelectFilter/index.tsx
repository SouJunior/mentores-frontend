import { useState } from "react";
import {
  CheckboxLabel,
  DropdownButton,
  DropdownContainer,
  DropdownMenu,
} from "./styled";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
interface SelectFilterProps {
  options: string[];
  selectName?: string;
  onChange: (selectedOptions: string[]) => void;
}

export default function SelectFilter({
  options,
  onChange,
  selectName,
}: SelectFilterProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const handleOptionChange = (option: string) => {
    const newSelectedOptions = [...selectedOptions];
    if (newSelectedOptions.includes(option)) {
      newSelectedOptions.splice(newSelectedOptions.indexOf(option), 1);
    } else {
      newSelectedOptions.push(option);
    }
    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
  };
  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setOpen(!open)}>
        {selectName} {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </DropdownButton>
      <DropdownMenu open={open}>
        {options.map((option) => (
          <CheckboxLabel key={option}>
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleOptionChange(option)}
            />
            {option}
          </CheckboxLabel>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
}
