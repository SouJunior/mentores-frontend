import React, { useEffect, useState } from "react";
import {
  GridContainer,
  SpecialityItem,
  StyledCount,
  StyledSpan,
  StyledTitle,
  StyledImportant,
  StyledHR,
  NextButton,
} from "./styled";
import { Check } from "lucide-react";
import axios from "axios";

export default function GridSpecialities() {
  const specialities: string[] = [
    "Carreira",
    "Liderança",
    "Produto",
    "Agilidade",
    "UX Design",
    "UI Design",
    "Front-End",
    "Back-End",
    "Mobile",
    "QA",
    "Dev Ops",
    "Dados",
  ];

  const [selectedSpecialities, setSelectedSpecialities] = useState<string[]>(
    []
  );
  const [selectedCount, setSelectedCount] = useState<number>(0);
  const [isComplete, setComplete] =  useState(false)

  const toggleSpeciality = (speciality: string): void => {
    if (selectedSpecialities.includes(speciality)) {
      setSelectedSpecialities(
        selectedSpecialities.filter((item) => item !== speciality)
      );
      setSelectedCount(selectedCount - 1);
    } else if (selectedCount < 6) {
      setSelectedSpecialities([...selectedSpecialities, speciality]);
      setSelectedCount(selectedCount + 1);
    }
  };

  useEffect(() => {
   selectedCount === 6 ? setComplete(true) : setComplete(false)
  }, [selectedCount, isComplete])


  const handleUpdate = async () => {
    try {
      const response = await axios.put('https://mentores-backend.onrender.com/mentor/df54ca54-60dc-40ee-9e10-2f5b66e66857', selectedSpecialities)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <StyledSpan>Olá, Fulano!</StyledSpan>
      <StyledTitle>
        Em quais áreas você deseja mentorar?<span className="last">*</span>
      </StyledTitle>
      <StyledImportant> 
        <>*</> Indica um campo obrigatório
      </StyledImportant>
      <GridContainer>
        {specialities.map((speciality, index) => (
          <SpecialityItem
            key={index}
            onClick={() => toggleSpeciality(speciality)}
            selected={selectedSpecialities.includes(speciality)}
          >
            {selectedSpecialities.includes(speciality) && <Check />}
            {speciality}
          </SpecialityItem>
        ))}
      </GridContainer>
      <StyledCount>{`${selectedCount}/6 especialidades `}</StyledCount>
      <StyledHR />
      <NextButton onClick={handleUpdate} disabled={!isComplete}>Continuar</NextButton>
    </>
  );
}
