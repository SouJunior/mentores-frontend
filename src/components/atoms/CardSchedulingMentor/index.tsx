'use client';
import userWithoutImage from '@/assets/userDefault.png';
import { IMentors } from '@/services/interfaces/IUseMentorsService';
import { ICalendlyUserInfo } from '@/services/interfaces/IUseUserCalendlyInfoService';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../Button';
import { Modal } from '../Modal';
import ModalSchedMentor from '../ModalSchedMentor';
import { Tag } from '../Tag';
import {
  ButtonsContainer,
  CardContainer,
  StacksContainer,
  StyledName,
  TitleContainer,
} from './styled';

interface CalendlyAndMentorProps {
  mentorCalendlyInfo?: ICalendlyUserInfo;
  mentor: IMentors;
}

export default function CardScheduling({ mentorCalendlyInfo, mentor }: CalendlyAndMentorProps) {
  const [open, setOpen] = useState(false);

  console.log('mentorCalendlyInfo:', mentorCalendlyInfo);


  const hasValidCalendly = mentorCalendlyInfo?.calendlyName && mentorCalendlyInfo?.agendaName;

  const calendlyUrl = hasValidCalendly
    ? new URL(
        `${mentorCalendlyInfo.calendlyName}/${mentorCalendlyInfo.agendaName}`,
        'https://calendly.com'
      ).toString()
    : '';

  function handleModal() {
    setOpen(!open);
  }

  console.log('hasValidCalendly:', hasValidCalendly);

  return (
    <CardContainer>
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
        {mentor.specialties.map((specialty) => (
          <Tag key={specialty}>{specialty}</Tag>
        ))}
      </StacksContainer>
      <ButtonsContainer>
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

          <ModalSchedMentor mentorCalendlyInfo={mentorCalendlyInfo} mentor={mentor} />
        </Modal.Root>
      </ButtonsContainer>
    </CardContainer>
  );
}
