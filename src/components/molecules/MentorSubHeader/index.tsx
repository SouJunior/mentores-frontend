import  { useState } from "react";
import InputSearch from "@/components/atoms/InputSearch";
import { ContainerControls, ContainerSelects } from "./styled";
import SelectFilter from "@/components/atoms/SelectFilter";

interface SubHeaderProps {
  onGenderChange: (selectedOptions: string[]) => void;
  onSpecialtyChange: (selectedOptions: string[]) => void;
  onMentorSearch: (query: string) => void;
}

export default function MentorSubHeader({
  onGenderChange,
  onSpecialtyChange,
  onMentorSearch,
}: SubHeaderProps) {
  const [mentorSearchQuery, setMentorSearchQuery] = useState("");
  const genderOptions = [
    "Homem cis",
    "Mulher cis",
    "Homem trans",
    "Mulher trans",
    "Bigenero",
    "Genero fluido",
    "Nao Binario",
    "Agenero",
    "Prefiro não dizer",
    "Outros",
  ];
  const specialtyOptions = [
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

  const handleMentorSearch = (query: string) => {
    setMentorSearchQuery(query);
    onMentorSearch(query);
  };

  return (
    <ContainerControls>
      <InputSearch onSearch={handleMentorSearch} />{" "}
      <ContainerSelects>
        <SelectFilter
          options={specialtyOptions}
          selectName="Especialidades"
          onChange={onSpecialtyChange}
        />
        <SelectFilter
          options={genderOptions}
          selectName="Gênero"
          onChange={onGenderChange}
        />
      </ContainerSelects>
    </ContainerControls>
  );
}
