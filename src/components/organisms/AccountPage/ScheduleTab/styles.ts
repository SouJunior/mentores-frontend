import styled from 'styled-components';
import * as Tabs from '@radix-ui/react-tabs';

export const ScheduleTabContainer = styled(Tabs.Content)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &[data-state='active'] {
    height: 100%;
  }
`;

export const ScheduleContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  justify-items: center;
  align-items: center;
  margin: auto 0;
`;

export const ScheduleDescription = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-align: center;
  max-width: 14.75rem;
`;
