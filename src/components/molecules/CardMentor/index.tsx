import { Card } from '@/components/atoms/Card'
import {
  CardButton,
  CardImage,
  CardStack,
  CardStacks,
  CardSubtitle,
  CardTitle,
} from './style'
import { IMentors } from '@/services/interfaces/IUseMentorsService'
import { useEffect, useState } from 'react'
import userWithoutImage from '@/assets/userDefault.png'

interface CardMentorProps {
  mentor: IMentors
}

const MAX_SPECIALTIES_NUMBER = 3

export function CardMentor({ mentor }: CardMentorProps) {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false)
  const specialties = mentor.specialties.slice(0, MAX_SPECIALTIES_NUMBER)
  const allSpecialtiesString = mentor.specialties.join(', ')

  useEffect(() => {
    if (!mentor.calendlyName || !mentor.agendaName) {
      setButtonDisabled(true)
    } else {
      setButtonDisabled(false)
    }
  }, [])

  return (
    <Card gap={'1rem'} alignItems={'flex-start'} padding={'1rem'}>
      <CardImage
        src={mentor.profile ?? userWithoutImage}
        width={150}
        height={150}
        alt={mentor.fullName}
        quality={100}
      />
      <section>
        <CardTitle>{mentor.fullName}</CardTitle>
        <CardSubtitle>{mentor.aboutMe}</CardSubtitle>
      </section>
      <CardStacks title={allSpecialtiesString}>
        {specialties.map((specialty: string) => (
          <CardStack key={specialty}>{specialty}</CardStack>
        ))}
      </CardStacks>
      <CardButton
        target="_blank"
        href={`https://calendly.com/${mentor.calendlyName}/${mentor.agendaName}`}
      >
        <button disabled={buttonDisabled}> Agendar um horário </button>
      </CardButton>
    </Card>
  )
}
