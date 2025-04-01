import InputSearch from '@/components/atoms/InputSearch';
import SelectFilter from '@/components/atoms/SelectFilter';
import { Footer } from '@/components/organisms/Footer';
import { MentorsGrid } from '@/components/organisms/MentorsGrid';
import { genders, specialties } from '@/data/static-info';
import { IMentors } from '@/services/interfaces/IUseMentorsService';
import { useMentorsCalendlyInfoService } from '@/services/user/useMentorsCalendlyInfoService';
import { useMentorsService } from '@/services/user/useMentorsService';
import {
  Container,
  ContainerControls,
  ContainerSelects,
  Content,
  CTAMain,
  CTASub,
  Divider,
  MainContent,
  RemoveFiltersBtn,
  Stack,
  StacksContainer,
  SubHeaderContainer,
  SubTitleContainer,
  TitleContainer,
} from '@/styles/pages/mentors';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function MentorPage() {
  const router = useRouter();

  const [genderFilter, setGenderFilter] = useState<string[]>([]);
  const [specialtyFilter, setSpecialtyFilter] = useState<string[]>([]);
  const [queryMentor, setQueryMentor] = useState('');

  const { data: mentors, isLoading } = useMentorsService();
  const { data: mentorCalendlyInfo } = useMentorsCalendlyInfoService();

  const mentorsFiltered = mentors?.filter((mentor: IMentors) => {
    const nameFilter = queryMentor.toLowerCase();

    const hasSelectedSpecialty =
      specialtyFilter.length === 0 ||
      specialtyFilter.some(selectedSpecialty =>
        mentor.specialties.includes(selectedSpecialty)
      );

    const hasSelectedGenders =
      genderFilter.length === 0 ||
      genderFilter
        .map(gender => gender.toLowerCase())
        .includes(mentor.gender.toLowerCase());

    return (
      hasSelectedGenders &&
      hasSelectedSpecialty &&
      (!queryMentor || mentor.fullName.toLowerCase().includes(nameFilter)) &&
      mentor.registerComplete === true
    );
  });

  function handleClearFilters() {
    setSpecialtyFilter([]);
    setGenderFilter([]);
  }

  useEffect(() => {
    if (queryMentor) {
      router.replace('/mentores', {
        query: {
          q: queryMentor,
        },
      });
    }
  }, [queryMentor]);

  useEffect(() => {
    if (router.query.q) {
      setQueryMentor(String(router.query.q));
    }
  }, [router.query.q]);

  return (
    <>
      <Container id="__next">
        <MainContent>
          <SubHeaderContainer>
            <TitleContainer>
              <Link href={'/'}>Início</Link>
              <div aria-hidden />
              <SubTitleContainer>Encontre seu mentor</SubTitleContainer>
            </TitleContainer>
            <CTAMain>
              Conheça nossos mentores
              <CTASub>
                Mentorias individuais e personalizadas à um toque de você
              </CTASub>
            </CTAMain>
          </SubHeaderContainer>

          <ContainerControls>
            <Content>
              <InputSearch
                value={queryMentor ?? ''}
                onChange={e => setQueryMentor(e.target.value)}
              />
              <ContainerSelects>
                <SelectFilter
                  options={specialties}
                  selectName="Especialidades"
                  onChange={option => setSpecialtyFilter(option)}
                  selectedOptions={specialtyFilter}
                />
                <SelectFilter
                  options={genders}
                  selectName="Gênero"
                  onChange={option => setGenderFilter(option)}
                  selectedOptions={genderFilter}
                />
              </ContainerSelects>
            </Content>
          </ContainerControls>

          {(specialtyFilter.length > 0 || genderFilter.length > 0) && (
            <StacksContainer>
              {specialtyFilter.map(selectedSpecialty => (
                <Stack key={selectedSpecialty}>{selectedSpecialty}</Stack>
              ))}
              {genderFilter.map(selectedGender => (
                <Stack key={selectedGender}>{selectedGender}</Stack>
              ))}
              <Divider aria-hidden />
              <RemoveFiltersBtn type="button" onClick={handleClearFilters}>
                Remover filtros
              </RemoveFiltersBtn>
            </StacksContainer>
          )}

          <MentorsGrid
            loading={isLoading}
            mentors={mentorsFiltered ?? []}
            mentorCalendlyInfo={mentorCalendlyInfo}
          />
        </MainContent>
      </Container>
      <Footer />
    </>
  );
}