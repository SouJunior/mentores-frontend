'use client';

import ModalSchedMentor from '@/features/account/components/modal-sched-mentor';
import { Button } from '@/shared/components/button';
import { Modal } from '@/shared/components/modal';
import { Tag } from '@/shared/components/tag';
import { IMentors } from '@/shared/types/IUseMentorsService';
import { ICalendlyUserInfo } from '@/shared/types/IUseUserCalendlyInfoService';
import Image from 'next/image';
import { useState } from 'react';

interface CalendlyAndMentorProps {
  mentorCalendlyInfo?: ICalendlyUserInfo;
  mentor: IMentors;
}

export default function CardScheduling({
  mentorCalendlyInfo,
  mentor,
}: CalendlyAndMentorProps) {
  const [open, setOpen] = useState(false);

  const hasValidCalendly =
    mentorCalendlyInfo?.calendlyName && mentorCalendlyInfo?.agendaName;

  const calendlyUrl = hasValidCalendly
    ? new URL(
        `${mentorCalendlyInfo.calendlyName}/${mentorCalendlyInfo.agendaName}`,
        'https://calendly.com'
      ).toString()
    : '';

  function handleModal() {
    setOpen(!open);
  }

  return (
    <div className="h-68 w-full bg-white rounded-2xl p-6 px-4 flex flex-col justify-between hover:shadow-hover hover:rounded-3xl">
      <div className="flex items-center gap-4 [&_img]:bg-gray-250">
        <Image
          width={80}
          height={80}
          src={mentor.profile ?? '/userDefault.png'}
          alt={mentor.fullName}
          style={{ borderRadius: '9999px', objectFit: 'cover' }}
        />
        <div className="text-2xl leading-[1.8rem] font-medium max-w-40">
          {mentor.fullName}
        </div>
      </div>
      <span className="flex gap-2 w-full flex-wrap">
        {mentor.specialties &&
          Array.isArray(mentor.specialties) &&
          mentor.specialties.map(specialty => (
            <Tag key={specialty}>{specialty}</Tag>
          ))}
      </span>
      <span className="flex gap-2">
        {hasValidCalendly ? (
          <Button as="a" target="_blank" href={calendlyUrl}>
            Agendar Mentoria
          </Button>
        ) : (
          <Button disabled>Agendar Mentoria</Button>
        )}

        <Modal.Root open={open} onOpenChange={handleModal}>
          <Modal.Control asChild>
            <Button variant="tertiary">Saiba mais</Button>
          </Modal.Control>

          <ModalSchedMentor
            mentorCalendlyInfo={mentorCalendlyInfo}
            mentor={mentor}
          />
        </Modal.Root>
      </span>
    </div>
  );
}
