import { Card } from '@/components/atoms/Card'
import { CardImage, CardStacks, CardTitle } from './style'
import { IMentors } from '@/services/interfaces/IUseMentorsService'
import { Tag } from '@/components/atoms/Tag'
import { useTheme } from 'styled-components'
import { Button } from '@/components/atoms/Button'
import Image from 'next/image'

interface CardMentorProps {
  mentor: IMentors
}

export function CardMentor({ mentor }: CardMentorProps) {
  const { colors } = useTheme()

  const splitMentorName = mentor.fullName.split(' ')
  const hasValidCalendly = mentor.calendlyName && mentor.agendaName

  return (
    <Card
      gap={'1rem'}
      alignItems={'stretch'}
      padding={'1.5rem 1rem'}
      bgcolor={colors.white}
      border={0}
      margin={0}
      boxShadow={'none'}
      minHeight={'23.5rem'}
    >
      <CardImage>
        {mentor.profile && (
          <Image
            src={mentor.profile}
            width={150}
            height={150}
            alt={mentor.fullName}
            quality={100}
          />
        )}
      </CardImage>

      <CardTitle>
        <span>{splitMentorName[0]}</span>
        <span>{splitMentorName[splitMentorName.length - 1]}</span>
      </CardTitle>

      <CardStacks>
        {mentor.specialties.map((specialty: string) => (
          <Tag key={specialty}>{specialty}</Tag>
        ))}
      </CardStacks>

      {hasValidCalendly ? (
        <Button
          as="a"
          target="_blank"
          href={`https://calendly.com/${mentor.calendlyName}/${mentor.agendaName}`}
        >
          Agendar um horário
        </Button>
      ) : (
        <Button disabled={!hasValidCalendly}>Agendar um horário</Button>
      )}
    </Card>
  )
}
