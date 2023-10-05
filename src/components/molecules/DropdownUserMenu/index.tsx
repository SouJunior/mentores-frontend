import React, { useState } from "react";
import MenuDropDown from "@/components/atoms/MenuDropDown";
import  ExpandLessIcon from "@mui/icons-material/ExpandLess"
import  ExpandMoreIcon from "@mui/icons-material/ExpandMore"

import { DropDownContainer } from "./styled";

export default function DropDownUserMenu() {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  return (
    <DropDownContainer>
      <div onClick={toggleDropDown}>
        {isDropDownVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </div>
      {isDropDownVisible && <MenuDropDown isvisible={isDropDownVisible} />}
    </DropDownContainer>
  );
}
