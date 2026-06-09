'use client';

import { Checkbox } from '@/shared/components/ui/checkbox';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/shared/components/ui/popover';
import { ChevronDown as ExpandMoreIcon } from 'lucide-react';

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
    const next = selectedOptions.includes(option)
      ? selectedOptions.filter(o => o !== option)
      : [...selectedOptions, option];
    onChange(next);
  };

  return (
    <Popover>
      <PopoverTrigger className="flex items-center justify-between w-[12.25rem] bg-white text-[#323232] px-6 py-3 border border-[#666666] rounded-lg cursor-pointer outline-none text-base font-normal transition-all data-[state=open]:rounded-b-none data-[state=open]:text-[#003986] data-[state=open]:border-[#003986] hover:text-[#003986] hover:border-[#003986] [&[data-state=open]_svg]:rotate-180 [&_svg]:transition-transform [&_svg]:duration-300">
        {selectName}
        <ExpandMoreIcon size={16} />
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        sideOffset={0}
        align="start"
        className="w-[12.25rem] max-h-[16rem] overflow-y-auto bg-white rounded-b-lg rounded-t-none shadow-md p-0 z-[9999]"
      >
        {options.map(option => (
          <label
            key={option}
            className="flex items-center gap-2 px-2 py-2 text-base leading-[1.4rem] text-[#323232] cursor-pointer"
          >
            <Checkbox
              checked={selectedOptions.includes(option)}
              onCheckedChange={() => handleOptionChange(option)}
            />
            {option}
          </label>
        ))}
      </PopoverContent>
    </Popover>
  );
}
