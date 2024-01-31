'use client'
import {
  CardContainer,
  StacksContainer,
  StyledName,
  TitleContainer,
  ButtonsContainer,
  InfoButton,
} from './styled'
import Image from 'next/image'
import ModalSchedMentor from '../ModalSchedMentor'
import { useState } from 'react'
import { IMentors } from '@/services/interfaces/IUseMentorsService'
import userWithoutImage from '@/assets/userDefault.png'
import { Tag } from '../Tag'
import { Button } from '../Button'

interface MentorsProps {
  mentor: IMentors
}

export default function CardScheduling({ mentor }: MentorsProps) {
  const [open, setOpen] = useState(false)
  const calendlyUrl = new URL(
    `${mentor.calendlyName}/${mentor.agendaName}`,
    'https://calendly.com',
  ).toString()

  const hasValidCalendly = mentor.calendlyName && mentor.agendaName

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
            return <Tag key={specialty}>{specialty}</Tag>
          })}
        </>
      </StacksContainer>
      <ButtonsContainer>
        {hasValidCalendly ? (
          <Button as="a" target="_blank" href={calendlyUrl}>
            Agendar Mentoria
          </Button>
        ) : (
          <Button disabled>Agendar Mentoria</Button>
        )}
        <InfoButton onClick={handleModal}>Saiba mais</InfoButton>
      </ButtonsContainer>
    </CardContainer>
  )
}
