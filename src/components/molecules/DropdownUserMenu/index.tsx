import React, { useState } from "react";
import MenuDropDown from "@/components/atoms/MenuDropDown";
// import { ChevronUp, ChevronDown } from "lucide-react";
import { DropDownContainer } from "./styled";

export default function DropDownUserMenu() {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  return (
    <DropDownContainer>
      <div onClick={toggleDropDown}>
        {/* {isDropDownVisible ? <ChevronDown /> : <ChevronUp />} */}
      </div>
      {isDropDownVisible && <MenuDropDown isvisible={isDropDownVisible} />}
    </DropDownContainer>
  );
}
