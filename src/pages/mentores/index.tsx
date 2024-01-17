import { useState, useEffect } from 'react'

import {
  Container,
  SubHeaderContainer,
  TitleContainer,
  SubTitleContainer,
  CTAMain,
  CTASub,
  StacksContainer,
  Stack,
  MainContent,
  Divider,
  RemoveFiltersBtn,
  ContainerControls,
  ContainerSelects,
  Content,
} from '@/styles/pages/mentors'
import Link from 'next/link'
import { Footer } from '@/components/molecules/Footer'
import { useMentorsService } from '@/services/user/useMentorsService'
import { IMentors } from '@/services/interfaces/IUseMentorsService'
import InputSearch from '@/components/atoms/InputSearch'
import SelectFilter from '@/components/atoms/SelectFilter'
import { genders, specialties } from '@/data/static-info'
import { MentorsGrid } from '@/components/organisms/MentorsGrid'
import { useRouter } from 'next/router'

export default function MentorPage() {
  const router = useRouter()

  const [genderFilter, setGenderFilter] = useState<string[]>([])
  const [specialtyFilter, setSpecialtyFilter] = useState<string[]>([])
  const [queryMentor, setQueryMentor] = useState('')

  const { fetchMentors, loading, mentors } = useMentorsService()

  const mentorsFiltered = mentors.filter((mentor: IMentors) => {
    const nameFilter = queryMentor.toLowerCase()

    const hasSelectedSpecialty =
      specialtyFilter.length === 0 ||
      specialtyFilter.some((selectedSpecialty) =>
        mentor.specialties.includes(selectedSpecialty),
      )

    const hasSelectedGenders =
      genderFilter.length === 0 ||
      genderFilter
        .map((gender) => gender.toLowerCase())
        .includes(mentor.gender.toLowerCase())

    return (
      hasSelectedGenders &&
      hasSelectedSpecialty &&
      (!queryMentor || mentor.fullName.toLowerCase().includes(nameFilter)) &&
      mentor.registerComplete === true
    )
  })

  function handleClearFilters() {
    setSpecialtyFilter([])
    setGenderFilter([])
  }

  useEffect(() => {
    const handleLoadFetchMentors = async () => {
      await fetchMentors()
    }
    handleLoadFetchMentors()
  }, [])

  useEffect(() => {
    if (queryMentor) {
      router.replace('/mentores', {
        query: {
          q: queryMentor,
        },
      })
    }
  }, [queryMentor])

  useEffect(() => {
    if (router.query.q) {
      setQueryMentor(String(router.query.q))
    }
  }, [router.query.q])

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
                onChange={(e) => setQueryMentor(e.target.value)}
              />
              <ContainerSelects>
                <SelectFilter
                  options={specialties}
                  selectName="Especialidades"
                  onChange={(option) => setSpecialtyFilter(option)}
                  selectedOptions={specialtyFilter}
                />
                <SelectFilter
                  options={genders}
                  selectName="Gênero"
                  onChange={(option) => setGenderFilter(option)}
                  selectedOptions={genderFilter}
                />
              </ContainerSelects>
            </Content>
          </ContainerControls>

          {(specialtyFilter.length > 0 || genderFilter.length > 0) && (
            <StacksContainer>
              {specialtyFilter.map((selectedSpecialty) => (
                <Stack key={selectedSpecialty}>{selectedSpecialty}</Stack>
              ))}
              {genderFilter.map((selectedGender) => (
                <Stack key={selectedGender}>{selectedGender}</Stack>
              ))}
              <Divider aria-hidden />
              <RemoveFiltersBtn type="button" onClick={handleClearFilters}>
                Remover filtros
              </RemoveFiltersBtn>
            </StacksContainer>
          )}

          <MentorsGrid loading={loading} mentors={mentorsFiltered} />
        </MainContent>
      </Container>
      <Footer />
    </>
  )
}
