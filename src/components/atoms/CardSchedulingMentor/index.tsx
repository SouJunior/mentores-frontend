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

interface MentorsProps {
  mentor: IMentors
}

export default function CardScheduling({ mentor }: MentorsProps) {
  const [open, setOpen] = useState(false)

  function handleModal() {
    setOpen(!open)
  }
  return (
    <CardContainer>
      <ModalSchedMentor onClose={handleModal} mentor={mentor} open={open} />
      <TitleContainer>
        {mentor.profile && (
          <Image
            width={80}
            height={80}
            src={mentor.profile}
            alt={mentor.fullName}
            style={{ borderRadius: '80px', objectFit: 'cover' }}
          />
        )}
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
        <a
          target="_blank"
          href={`https://calendly.com/${mentor.calendlyName}/${mentor.agendaName}?embed_domain=mentora.webflow.io&embed_type=Inline`}
        >
          <SchedButton>Agendar Mentoria</SchedButton>
        </a>
        <InfoButton onClick={handleModal}>Saiba mais</InfoButton>
      </ButtonsContainer>
    </CardContainer>
  )
}
