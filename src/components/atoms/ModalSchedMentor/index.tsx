import UserDefault from '@/assets/userDefault.png';
import { IMentors } from '@/services/interfaces/IUseMentorsService';
import { ICalendlyUserInfo } from '@/services/interfaces/IUseUserCalendlyInfoService';
import Close from '@mui/icons-material/Close';
import { DialogContentProps } from '@radix-ui/react-dialog';
import Image from 'next/image';
import { Button } from '../Button';
import { Modal } from '../Modal';
import {
  AboutContainer,
  ButtonClose,
  MentorName,
  ModalContainer,
  PhotoContainer,
  SpecialityContainer,
  Specialitytitle,
  Stack,
  StacksContainer,
  TitleContainer,
} from './styled';

interface ModalSchedProps extends DialogContentProps {
  mentor: IMentors;
  mentorCalendlyInfo?: ICalendlyUserInfo
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

  const hasValidCalendly = mentorCalendlyInfo?.calendlyName && mentorCalendlyInfo?.agendaName;

  return (
    <ModalContainer {...props}>
      <TitleContainer>
        <PhotoContainer>
          <Image
            width={88}
            height={88}
            src={mentor.profile || UserDefault}
            alt="Mentor Photo"
            style={{ borderRadius: '80px', objectFit: 'cover' }}
          />
          <MentorName>{mentor.fullName}</MentorName>
        </PhotoContainer>

        <Modal.Close asChild>
          <ButtonClose>
            <Close />
          </ButtonClose>
        </Modal.Close>
      </TitleContainer>
      <SpecialityContainer>
        <Specialitytitle>Especialidades</Specialitytitle>
        <StacksContainer>
          {mentor.specialties && Array.isArray(mentor.specialties) && mentor.specialties.map(stack => {
            return <Stack key={stack}>{stack}</Stack>;
          })}
        </StacksContainer>
      </SpecialityContainer>
      <AboutContainer>{mentor.aboutMe}</AboutContainer>

      {hasValidCalendly ? (
        <Button as="a" target="_blank" href={calendlyUrl}>
          Agendar Mentoria
        </Button>
      ) : (
        <Button disabled>Agendar Mentoria</Button>
      )}
    </ModalContainer>
  );
}
