'use client';
import userWithoutImage from '@/assets/userDefault.png';
import { Button } from '@/components/button';
import { Modal } from '@/components/modal';
import { Tag } from '@/components/tag';
import ModalSchedMentor from '@/features/account/modal-sched-mentor';
import { IMentors } from '@/services/interfaces/IUseMentorsService';
import { ICalendlyUserInfo } from '@/services/interfaces/IUseUserCalendlyInfoService';
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
    <div className="h-68 w-full bg-white rounded-2xl p-6 px-4 flex flex-col justify-between hover:shadow-[4px_4px_4px_0px_rgba(0,0,0,0.2)] hover:rounded-3xl">
      <div className="flex items-center gap-4 [&_img]:bg-[#D9D9D9]">
        <Image
          width={80}
          height={80}
          src={mentor.profile ?? userWithoutImage}
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
