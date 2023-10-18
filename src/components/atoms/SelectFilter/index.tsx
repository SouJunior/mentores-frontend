import React from "react";
import { StyledSelect } from "./styled";

interface SelecProps {
  options: string[];
  selectName?:string;
 onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectFilter({ options, onChange, selectName }: SelecProps) {
  return (
    <StyledSelect onChange={onChange}>
      <option value="">{selectName}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
}
