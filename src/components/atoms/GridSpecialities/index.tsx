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
<<<<<<< HEAD
import axios from "axios";
import useUser from "@/context/Auth/useUser";

export default function GridSpecialities() {
  const { user } = useUser()
=======
import userUpdateService from "@/services/user/userUpdateService";

interface GridSpecialitiesProps {
  onRequestSuccess: (success: boolean) => void;
  stepNumber:(step:number) => void
}
export default function GridSpecialities({
  onRequestSuccess, stepNumber
}: GridSpecialitiesProps) {
  const { handle } = userUpdateService();
>>>>>>> 87595df8976b886b66285ada693cb30a28bdc6d1
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
  const [isComplete, setComplete] = useState(false);

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
    selectedCount === 6 ? setComplete(true) : setComplete(false);
  }, [selectedCount, isComplete]);

  const handleUpdate = async () => {
<<<<<<< HEAD
    const token = user?.token;
    const id = user?.id
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }; 
    
    try {
      const response = await axios.put(`https://mentores-backend.onrender.com/mentor/${id}`, selectedSpecialities, config)
      console.log(response)
=======
    const data = {
      specialties: selectedSpecialities,
    };
    try {
      const apiRequest = await handle(data);
      onRequestSuccess(true);
      stepNumber(2)
>>>>>>> 87595df8976b886b66285ada693cb30a28bdc6d1
    } catch (error) {
      console.error("Erro ao atualizar:", error);
    }
  };

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
      <NextButton onClick={handleUpdate} disabled={!isComplete}>
        Continuar
      </NextButton>
    </>
  );
}
