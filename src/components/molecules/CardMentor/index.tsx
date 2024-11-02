import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';
import { Tag } from '@/components/atoms/Tag';
import { IMentors } from '@/services/interfaces/IUseMentorsService';
import { ICalendlyUserInfo } from '@/services/interfaces/IUseUserCalendlyInfoService';
import Image from 'next/image';
import { useTheme } from 'styled-components';
import { CardImage, CardStacks, CardTitle } from './style';

interface CardMentorProps {
  mentor?: IMentors;
  mentorCalendlyInfo?: ICalendlyUserInfo
}

export function CardMentor({ mentor, mentorCalendlyInfo }: CardMentorProps) {
  const { colors } = useTheme();

  if (!mentor) {
    return <p>No mentor information available</p>;
  }

  const splitMentorName = mentor.fullName.split(' ');
  const hasValidCalendly = mentorCalendlyInfo?.calendlyName && mentorCalendlyInfo.agendaName;

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
        {mentor?.profile && (
          <Image
            src={mentor?.profile}
            width={150}
            height={150}
            alt={mentor?.fullName}
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
          href={`https://calendly.com/${mentorCalendlyInfo.calendlyName}/${mentorCalendlyInfo.agendaName}`}
        >
          Agendar um horário
        </Button>
      ) : (
        <Button disabled={!hasValidCalendly}>Agendar um horário</Button>
      )}
    </Card>
  );
}
