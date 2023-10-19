import React, { useState } from "react";
import { StyledSelect } from "./styled";

interface SelecProps {
  options: string[];
  selectName?:string;
 onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectFilter({ options, onChange, selectName }: SelecProps) {
  const [espec, setEspec] = useState('')

  const handle = () => {
    
  }
  return (
    <>
    <StyledSelect onChange={onChange}>
      <option value="">{selectName}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
    </>
  );
}
