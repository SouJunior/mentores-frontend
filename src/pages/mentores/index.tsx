import  { useState, useEffect } from "react";
import axios from "axios";
import MentorSubHeader from "@/components/molecules/MentorSubHeader";
import CardScheduling from "@/components/atoms/CardSchedulingMentor";
import { MentorCardProp } from "@/utils/globals";
import {
  MainContainer,
  MentorsContainer,
  SubHeaderContainer,
  TitleContainer,
  SubTitleContainer,
  CTAMain,
  CTASub,
} from "@/styles/pages/mentors";

export default function MentorPage() {
  const [mentors, setMentors] = useState([]);
  const [filteredMentors, setFilteredMentors] = useState([]);
  const [genderFilter, setGenderFilter] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const [mentorNameFilter, setMentorNameFilter] = useState("");

  const fetchMentors = async () => {
    try {
      const response = await axios.get(
        "https://mentores-backend.onrender.com/mentor"
      );
      setMentors(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMentors();
  }, []);

  const filterMentors = (mentor: MentorCardProp) => {
    const nameFilter = mentorNameFilter.toLowerCase();
    if (
      (!genderFilter || mentor.gender === genderFilter) &&
      (!specialtyFilter || mentor.specialties.includes(specialtyFilter)) &&
      (!mentorNameFilter || mentor.fullName.toLowerCase().includes(nameFilter))
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
          Início <b>°</b>{" "}
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
        onGenderChange={(e) => setGenderFilter(e.target.value)}
        onSpecialtyChange={(e) => setSpecialtyFilter(e.target.value)}
        onMentorSearch={(query) => setMentorNameFilter(query)}
      />
      <MentorsContainer>
        {filteredMentors.map((mentor: MentorCardProp) => (
          <CardScheduling key={mentor.fullName} mentor={mentor} />
        ))}
      </MentorsContainer>
    </MainContainer>
  );
}
