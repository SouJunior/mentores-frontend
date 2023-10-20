import { useState, useEffect } from "react";
import axios from "axios";
import MentorSubHeader from "@/components/molecules/MentorSubHeader";
import CardScheduling from "@/components/atoms/CardSchedulingMentor";
import { MentorCardProp } from "@/utils/globals";
import NoResult from "@/assets/noresult.svg";
import Loading from '@/assets/loading.gif'
import {
  MainContainer,
  MentorsContainer,
  SubHeaderContainer,
  TitleContainer,
  SubTitleContainer,
  CTAMain,
  CTASub,
  NoResultContainer,
  NoResultMain,
  StacksContainer,
  Stack,
} from "@/styles/pages/mentors";
import Image from "next/image";
import Link from "next/link";

export default function MentorPage() {
  const [loading, setLoading] = useState(false);
  const [mentors, setMentors] = useState([]);
  const [filteredMentors, setFilteredMentors] = useState([]);
  const [genderFilter, setGenderFilter] = useState<string[]>([]);
  const [specialtyFilter, setSpecialtyFilter] = useState<string[]>([]);
  const [mentorNameFilter, setMentorNameFilter] = useState("");

  const fetchMentors = async () => {
    setLoading(true); 
    try {
      const response = await axios.get(
        "https://mentores-backend.onrender.com/mentor"
      );
      setMentors(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMentors();
  }, []);

  const filterMentors = (mentor: MentorCardProp) => {
    const nameFilter = mentorNameFilter.toLowerCase();

    const hasSelectedSpecialty =
      specialtyFilter.length === 0 ||
      specialtyFilter.some((selectedSpecialty) =>
        mentor.specialties.includes(selectedSpecialty)
      );

    const hasSelectedGenders =
      genderFilter.length === 0 ||
      genderFilter.some((selectedGender) =>
        mentor.gender.includes(selectedGender)
      );

    if (
      hasSelectedGenders &&
      hasSelectedSpecialty &&
      (!mentorNameFilter ||
        mentor.fullName.toLowerCase().includes(nameFilter)) &&
      mentor.registerComplete === true
    ) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    const filtered = mentors.filter(filterMentors);
    setFilteredMentors(filtered);
  }, [mentors, genderFilter, specialtyFilter, mentorNameFilter]);

  return (
    <MainContainer>
      <SubHeaderContainer>
        <TitleContainer>
          <Link href={"/"}>
            Início <b>°</b>
          </Link>

          <SubTitleContainer>Encontre seu mentor</SubTitleContainer>
        </TitleContainer>
        <CTAMain>
          Conheça nossos mentores
          <CTASub>
            Mentorias individuais e personalizadas à um toque de você
          </CTASub>
        </CTAMain>
      </SubHeaderContainer>
      <MentorSubHeader
        onGenderChange={(selectedOptions) => setGenderFilter(selectedOptions)}
        onSpecialtyChange={(selectedOptions) =>
          setSpecialtyFilter(selectedOptions)
        }
        onMentorSearch={(query) => setMentorNameFilter(query)}
      />
      {specialtyFilter.length > 0 && (
        <StacksContainer>
          {specialtyFilter.map((selectedSpecialty) => (
            <Stack key={selectedSpecialty}>{selectedSpecialty}</Stack>
          ))}
        </StacksContainer>
      )}
      <MentorsContainer>
        {loading ? (
          <>
          <Image style={{position:"absolute",top:"10%", left:"45%"}} src={Loading} alt="Loading" />
          </>
        ) : filteredMentors.length > 0 ? (
          filteredMentors.map((mentor: MentorCardProp) => (
            <CardScheduling key={mentor.fullName} mentor={mentor} />
          ))
        ) : (
          <NoResultContainer>
            <Image src={NoResult} alt="Sem resultado" />
            <NoResultMain>Nada por aqui!</NoResultMain>
            <CTASub>Não conseguimos encontrar resultados pra sua busca.</CTASub>
            <CTASub>Tente alterar os filtros de pesquisa.</CTASub>
          </NoResultContainer>
        )}
      </MentorsContainer>
    </MainContainer>
  );
}
