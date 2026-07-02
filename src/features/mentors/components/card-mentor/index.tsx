import { Button } from '@/shared/components/button';
import { Card } from '@/shared/components/card';
import { Tag } from '@/shared/components/tag';
import { IMentors } from '@/shared/types/IUseMentorsService';
import { ICalendlyUserInfo } from '@/shared/types/IUseUserCalendlyInfoService';
import Image from 'next/image';

interface CardMentorProps {
  mentor?: IMentors;
  mentorCalendlyInfo?: ICalendlyUserInfo;
}

export function CardMentor({ mentor, mentorCalendlyInfo }: CardMentorProps) {
  if (!mentor) {
    return <p>No mentor information available</p>;
  }

  const splitMentorName = mentor.fullName.split(' ');
  const hasValidCalendly =
    mentorCalendlyInfo?.calendlyName && mentorCalendlyInfo.agendaName;

  return (
    <Card
      style={{
        gap: '1rem',
        alignItems: 'stretch',
        padding: '1.5rem 1rem',
        backgroundColor: 'var(--color-white)',
        border: 'none',
        margin: 0,
        boxShadow: 'none',
        minHeight: '23.5rem',
      }}
    >
      <div className="relative w-30 h-30 rounded-full overflow-hidden self-center bg-gray-250">
        {mentor?.profile && (
          <Image
            src={mentor?.profile}
            fill
            sizes="7.5rem"
            className="object-cover"
            alt={mentor?.fullName}
          />
        )}
      </div>

      <p className="flex flex-col font-medium text-xl leading-[120%] text-black-200">
        <span>{splitMentorName[0]}</span>
        <span>{splitMentorName[splitMentorName.length - 1]}</span>
      </p>

      <div className="flex items-center flex-wrap gap-2 w-full [&~a]:justify-center [&~a]:mt-auto [&~button]:justify-center [&~button]:mt-auto">
        {mentor.specialties &&
          Array.isArray(mentor.specialties) &&
          mentor.specialties.map((specialty: string) => (
            <Tag key={specialty}>{specialty}</Tag>
          ))}
      </div>

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
