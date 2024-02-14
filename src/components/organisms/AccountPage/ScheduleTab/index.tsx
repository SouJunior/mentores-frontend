import { Button } from '@/components/atoms/Button'
import { TitleTab } from '../styles'

import {
  ScheduleDescription,
  ScheduleContentContainer,
  ScheduleTabContainer,
} from './styles'
import Link from 'next/link'

export function ScheduleTab() {
  return (
    <ScheduleTabContainer value="tab-schedule">
      <TitleTab>Agenda</TitleTab>

      <ScheduleContentContainer>
        <ScheduleDescription>
          Sua agenda de mentorias é ajustada pelo Calendly.
        </ScheduleDescription>

        <Button as={Link} href="https://calendly.com" target="_blank">
          Ir para o Calendly
        </Button>
      </ScheduleContentContainer>
    </ScheduleTabContainer>
  )
}
