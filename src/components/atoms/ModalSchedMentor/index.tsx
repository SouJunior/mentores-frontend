import Image from 'next/image'
import {
  AboutContainer,
  MentorName,
  ModalContainer,
  PhotoContainer,
  SpecialityContainer,
  Specialitytitle,
  Stack,
  StacksContainer,
  TitleContainer,
  ButtonClose,
} from './styled'
import { IMentors } from '@/services/interfaces/IUseMentorsService'
import UserDefault from '@/assets/userDefault.png'
import Close from '@mui/icons-material/Close'
import { Button } from '../Button'
import { Modal } from '../Modal'
import { DialogContentProps } from '@radix-ui/react-dialog'

interface ModalSchedProps extends DialogContentProps {
  mentor: IMentors
}

export default function ModalSchedMentor({
  mentor,
  ...props
}: ModalSchedProps) {
  const calendlyUrl = new URL(
    `${mentor.calendlyName}/${mentor.agendaName}`,
    'https://calendly.com',
  ).toString()

  const hasValidCalendly = mentor.calendlyName && mentor.agendaName

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
          {mentor.specialties.map((stack) => {
            return <Stack key={stack}>{stack}</Stack>
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
  )
}
