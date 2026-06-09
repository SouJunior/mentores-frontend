import { Button } from '@/components/button';
import { Modal } from '@/components/modal';
import { IMentors } from '@/services/interfaces/IUseMentorsService';
import { ICalendlyUserInfo } from '@/services/interfaces/IUseUserCalendlyInfoService';
import { X as Close } from 'lucide-react';
import Image from 'next/image';

interface ModalSchedProps extends React.HTMLAttributes<HTMLDivElement> {
  mentor: IMentors;
  mentorCalendlyInfo?: ICalendlyUserInfo;
}

export default function ModalSchedMentor({
  mentor,
  mentorCalendlyInfo,
  ...props
}: ModalSchedProps) {
  const calendlyUrl = new URL(
    `${mentorCalendlyInfo?.calendlyName}/${mentorCalendlyInfo?.agendaName}`,
    'https://calendly.com'
  ).toString();

  const hasValidCalendly =
    mentorCalendlyInfo?.calendlyName && mentorCalendlyInfo?.agendaName;

  return (
    <Modal.Content
      className="flex flex-col gap-6 max-w-[50.125rem] w-full rounded-2xl p-8 [&_button]:w-max [&_a]:w-max"
      {...props}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-6">
          <Image
            width={88}
            height={88}
            src={mentor.profile || 'userDefault.png'}
            alt="Mentor Photo"
            style={{ borderRadius: '80px', objectFit: 'cover' }}
          />
          <Modal.Title className="text-[2.5rem] leading-[3rem] max-w-[15rem] font-semibold text-[#323232]">
            {mentor.fullName}
          </Modal.Title>
        </div>

        <Modal.Close asChild>
          <button className="all-unset text-[#cbcbcb] w-8 h-8 cursor-pointer [&_svg]:w-full [&_svg]:h-full bg-transparent border-none p-0">
            <Close />
          </button>
        </Modal.Close>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm text-[#666666] leading-[16.8px]">
          Especialidades
        </span>
        <span className="flex gap-1 w-full flex-wrap">
          {mentor.specialties &&
            Array.isArray(mentor.specialties) &&
            mentor.specialties.map(stack => (
              <span
                key={stack}
                className="bg-[#f5f1f3] text-xs leading-[0.9rem] text-[#001633] px-2 py-2 rounded-[2.5rem] text-center"
              >
                {stack}
              </span>
            ))}
        </span>
      </div>

      <Modal.Description className="text-base leading-6 text-[#666666]">
        {mentor.aboutMe}
      </Modal.Description>

      {hasValidCalendly ? (
        <Button as="a" target="_blank" href={calendlyUrl}>
          Agendar Mentoria
        </Button>
      ) : (
        <Button disabled>Agendar Mentoria</Button>
      )}
    </Modal.Content>
  );
}
