import { Button } from '@/components/atoms/Button'
import { TitleTab } from '../styles'

import { useAuthContext } from '@/context/Auth/AuthContext'
import {
  ScheduleDescription,
  ScheduleContentContainer,
  ScheduleTabContainer,
} from './styles'
import Link from 'next/link'

export function ScheduleTab() {
  const { mentor } = useAuthContext()

  const calendlyUrl =
    mentor.data?.calendlyName && mentor.data.agendaName
      ? new URL(
          `${mentor.data?.calendlyName}/${mentor.data?.agendaName}`,
          'https://calendly.com',
        )
      : 'https://calendly.com'

  return (
    <ScheduleTabContainer value="tab-schedule">
      <TitleTab>Agenda</TitleTab>

      <ScheduleContentContainer>
        <ScheduleDescription>
          Sua agenda de mentorias é ajustada pelo Calendly.
        </ScheduleDescription>

        <Button as={Link} href={calendlyUrl} target="_blank">
          Ir para o Calendly
        </Button>
      </ScheduleContentContainer>
    </ScheduleTabContainer>
  )
}
