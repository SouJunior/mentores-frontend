import Image from 'next/image'
import {
  AboutContainer,
  MentorName,
  ModalContainer,
  PhotoContainer,
  SchedButton,
  SpecialityContainer,
  Specialitytitle,
  Stack,
  StacksContainer,
  TitleContainer,
  MainContainer,
  ButtonClose,
  ModalOverlay,
} from './styled'
import { IMentors } from '@/services/interfaces/IUseMentorsService'
import UserDefault from '@/assets/userDefault.png'
import Link from 'next/link'

interface ModalSchedProps {
  open: boolean
  mentor: IMentors
  onClose: () => void
}

export default function ModalSchedMentor({
  open,
  mentor,
  onClose,
}: ModalSchedProps) {
  return (
    <ModalOverlay open={open}>
      <ModalContainer open={open}>
        <MainContainer>
          <TitleContainer>
            <PhotoContainer>
              <Image
                width={88}
                height={88}
                src={mentor.profile || UserDefault}
                alt="Mentor Photo"
                style={{ borderRadius: '80px', objectFit: 'cover' }}
              />
              <MentorName> {mentor.fullName}</MentorName>
            </PhotoContainer>
            <ButtonClose onClick={onClose}>X</ButtonClose>
          </TitleContainer>
          <SpecialityContainer>
            <Specialitytitle>Especialidades</Specialitytitle>
            <StacksContainer>
              <>
                {mentor.specialties.map((stack) => {
                  return <Stack key={stack}>{stack}</Stack>
                })}
              </>
            </StacksContainer>
          </SpecialityContainer>
          <AboutContainer>{mentor.aboutMe}</AboutContainer>
        </MainContainer>
        <Link href={`https://calendly.com/${mentor.calendlyName}`}>
          <SchedButton disabled={!mentor.calendlyName}>
            Agendar mentoria
          </SchedButton>
        </Link>
      </ModalContainer>
    </ModalOverlay>
  )
}
