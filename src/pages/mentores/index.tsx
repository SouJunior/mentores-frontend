import { useState, useEffect } from 'react'
import MentorSubHeader from '@/components/molecules/MentorSubHeader'
import NoResult from '@/assets/noresult.svg'
import Loading from '@/assets/loading.gif'
import {
  Container,
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
  MainContent,
  Divider,
  RemoveFiltersBtn,
} from '@/styles/pages/mentors'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/molecules/Footer'
import { useMentorsService } from '@/services/user/useMentorsService'
import { IMentors } from '@/services/interfaces/IUseMentorsService'
import dynamic from 'next/dynamic'
const CardScheduling = dynamic(
  () => import('@/components/atoms/CardSchedulingMentor'),
  {
    ssr: false,
  },
)

export default function MentorPage() {
  const [genderFilter, setGenderFilter] = useState<string[]>([])
  const [specialtyFilter, setSpecialtyFilter] = useState<string[]>([])
  const [mentorNameFilter, setMentorNameFilter] = useState('')

  const { fetchMentors, loading, mentors } = useMentorsService()

  useEffect(() => {
    const handleLoadFetchMentors = async () => {
      await fetchMentors()
    }
    handleLoadFetchMentors()
  }, [])

  const mentorsFiltered = mentors.filter((mentor: IMentors) => {
    const nameFilter = mentorNameFilter.toLowerCase()

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
      (!mentorNameFilter ||
        mentor.fullName.toLowerCase().includes(nameFilter)) &&
      mentor.registerComplete === true
    )
  })

  function handleClearFilters() {
    setSpecialtyFilter([])
    setGenderFilter([])
  }

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
          <MentorSubHeader
            onGenderChange={(selectedOptions) =>
              setGenderFilter(selectedOptions)
            }
            onSpecialtyChange={(selectedOptions) =>
              setSpecialtyFilter(selectedOptions)
            }
            onMentorSearch={(query) => setMentorNameFilter(query)}
          />
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
          <MentorsContainer>
            {loading ? (
              <>
                <Image
                  style={{ position: 'absolute', top: '10%', left: '45%' }}
                  src={Loading}
                  alt="Loading"
                />
              </>
            ) : mentorsFiltered.length > 0 ? (
              mentorsFiltered.map((mentor: IMentors) => (
                <CardScheduling key={mentor.id} mentor={mentor} />
              ))
            ) : (
              <NoResultContainer>
                <Image src={NoResult} alt="Sem resultado" />
                <NoResultMain>Nada por aqui!</NoResultMain>
                <CTASub>
                  Não conseguimos encontrar resultados pra sua busca.
                </CTASub>
                <CTASub>Tente alterar os filtros de pesquisa.</CTASub>
              </NoResultContainer>
            )}
          </MentorsContainer>
        </MainContent>
      </Container>
      <Footer />
    </>
  )
}
