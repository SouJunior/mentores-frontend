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
    <ScheduleTabContainer value="schedule">
      <TitleTab>Agenda</TitleTab>

      <ScheduleContentContainer>
        <ScheduleDescription>
          Sua agenda de mentorias é ajustada pelo Calendly.
        </ScheduleDescription>

        <Button
          as={Link}
          href="https://auth.calendly.com/oauth/authorize?client_id=utqBbxrK1b8sXSkJqYFi718WdYkDeL-wts84O-n_nzs&response_type=code&redirect_uri=https://localhost:3001/me"
          target="_blank"
        >
          Ir para o Calendly
        </Button>
      </ScheduleContentContainer>
    </ScheduleTabContainer>
  )
}
