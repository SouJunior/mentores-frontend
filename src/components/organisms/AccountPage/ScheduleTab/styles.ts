import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import * as Tabs from '@radix-ui/react-tabs';
import styled from 'styled-components';

export const ScheduleTabContainer = styled(Tabs.Content)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &[data-state='active'] {
    height: 100%;
  }
`;

export const ScheduleContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 43rem;
`;

export const AlertContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  padding-left: 1rem;
  padding-right: 0.8rem;

  padding-top: 1rem;
  padding-bottom: 1rem;

  background-color: ${props => props.theme.colors.yellow};

  border-radius: 0.5rem;

  p {
    color: ${props => props.theme.colors.brown[300]};
    font-size: 0.9rem;
  }
`;

export const ErrorOutlineRoundedIconStyled = styled(ErrorOutlineRoundedIcon)`
  color: ${props => props.theme.colors.brown[700]};
`;

export const ButtonContainer = styled.div`
  max-width: 12rem;
`;
