import { TitleTab } from '../styles';

import {
  ScheduleContent,
  AlertContainer,
  ErrorOutlineRoundedIconStyled,
  ScheduleTabContainer,
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
      </ScheduleContent>
    </ScheduleTabContainer>
  );
}
