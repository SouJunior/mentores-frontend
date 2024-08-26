import { Button } from '@/components/atoms/Button';
import { TitleTab } from '../styles';

import {
  AlertContainer,
  ErrorOutlineRoundedIconStyled,
  ScheduleContent,
  ScheduleTabContainer,
  ButtonContainer,
} from './styles';

export function ScheduleTab() {
  return (
    <ScheduleTabContainer value="schedule">
      <TitleTab>Agenda</TitleTab>

      <ScheduleContent>
        <AlertContainer>
          <ErrorOutlineRoundedIconStyled />
          <p>
            Caso altere o link da sua agenda no Calendly, é necessário
            atualizá-lo também nessa página.
          </p>
        </AlertContainer>

        <ButtonContainer>
          <Button
            as="a"
            href="https://calendly.com/"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            Ir para o Calendly
          </Button>
        </ButtonContainer>
      </ScheduleContent>
    </ScheduleTabContainer>
  );
}
