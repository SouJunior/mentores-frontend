'use client'
import {
  CardContainer,
  StacksContainer,
  StyledName,
  TitleContainer,
  Stack,
  ButtonsContainer,
  InfoButton,
  SchedButton,
} from './styled'
import Image from 'next/image'
import ModalSchedMentor from '../ModalSchedMentor'
import { useState } from 'react'
import { IMentors } from '@/services/interfaces/IUseMentorsService'
import userWithoutImage from '@/assets/userDefault.png'

interface MentorsProps {
  mentor: IMentors
}

export default function CardScheduling({ mentor }: MentorsProps) {
  const [open, setOpen] = useState(false)
  const calendlyUrl = new URL(
    `${mentor.calendlyName}/${mentor.agendaName}`,
    'https://calendly.com',
  ).toString()

  function handleModal() {
    setOpen(!open)
  }
  return (
    <CardContainer>
      <ModalSchedMentor onClose={handleModal} mentor={mentor} open={open} />
      <TitleContainer>
        <Image
          width={80}
          height={80}
          src={mentor.profile ?? userWithoutImage}
          alt={mentor.fullName}
          style={{ borderRadius: '9999px', objectFit: 'cover' }}
        />
        <StyledName>{mentor.fullName}</StyledName>
      </TitleContainer>
      <StacksContainer>
        <>
          {mentor.specialties.map((specialty) => {
            return <Stack key={specialty}>{specialty}</Stack>
          })}
        </>
      </StacksContainer>
      <ButtonsContainer>
        <a target="_blank" href={calendlyUrl}>
          <SchedButton disabled={!mentor.calendlyName}>
            Agendar Mentoria
          </SchedButton>
        </a>
        <InfoButton onClick={handleModal}>Saiba mais</InfoButton>
      </ButtonsContainer>
    </CardContainer>
  )
}
