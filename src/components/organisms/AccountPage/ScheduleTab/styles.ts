import { Button } from '@/components/atoms/Button';
import { theme } from '@/styles/theme';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import * as Tabs from '@radix-ui/react-tabs';
import styled, { css } from 'styled-components';

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
  align-items: center;
  gap: 0.5rem;
  p {
    color: ${theme.colors.black[200]};
    font-size: 0.875rem;
    line-height: 1rem;
  }
`;

export const ErrorOutlineRoundedIconStyled = styled(ErrorOutlineRoundedIcon)`
  color: ${theme.colors.red[300]};
`;

export const Navegation = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const NavBtn = styled.button<{
  select: boolean;
}>`
  background-color: transparent;
  line-height: 1rem;
  border: none;
  padding-bottom: 0.5rem;
  color: ${({ select, theme }) =>
    select ? theme.colors.blue[800] : theme.colors.black[200]};
  border-bottom: ${({ select, theme }) =>
    select ? `2px solid ${theme.colors.blue[800]}` : ''};
  font-weight: ${({ select }) => (select ? '500' : '')};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;
  max-width: 28rem;
`;

export const ContainerInput = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputCalendlyStyled = styled.input`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  border: 1px solid
    ${props =>
      props.className?.includes('error')
        ? props.theme.colors.red[500]
        : props.theme.colors.gray[600]};
  border-radius: 8px;
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black[200]};

  &:focus {
    border: 1px solid
      ${props =>
        props.className?.includes('error')
          ? props.theme.colors.red[500]
          : props.theme.colors.blue[850]};

    box-shadow: 0 0 0 1px
      ${props =>
        props.className?.includes('error')
          ? props.theme.colors.red[500]
          : props.theme.colors.blue[850]};
  }

  flex: 1;
  outline: none;
  resize: none;

  height: 100%;
  width: 100%;

  padding: 0.875rem 0.875rem 0.875rem
    ${props => (props.className?.includes('error') ? `2.3rem` : `0.875rem`)};

  font-size: 1rem;
  line-height: 150%;

  &::placeholder {
    color: ${props => props.theme.colors.gray[250]};
  }

  &:focus ~ label {
    transform: translateY(-1.5rem);
    padding: 0 0.25rem;
    font-size: 0.75rem;
  }

  & ~ label {
    ${props =>
      Boolean(props.value) &&
      css`
        transform: translateY(-1.5rem);
        padding: 0 0.25rem;
        font-size: 0.75rem;
      `}
  }
`;

export const PlaceholderInput = styled.label`
  position: absolute;
  left: 0.5rem;
  line-height: 1.4rem;
  font-weight: 400;
  background-color: #fff;
  transition: all 0.3s;
  pointer-events: none;
  padding-left: 12px;
`;

export const StyledErrorOutlineRoundedIcon = styled(ErrorOutlineRoundedIcon)`
  width: 1.5rem;
  height: 1.5rem;

  position: absolute;
  left: 0.5rem;
`;

export const ContainerErrorInputCalendly = styled.span`
  display: block;
  color: ${props => props.theme.colors.red[500]};
  font-weight: bold;
  font-size: 0.75rem;
  padding: 1rem 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
`;

export const ButtonLoading = styled(Button)`
  height: 43px;
  padding: 0;
  width: 5.9rem;

  &:disabled {
    cursor: wait;
    background-color: ${props => props.theme.colors.blue[800]};
    border-color: ${props => props.theme.colors.blue[800]};
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${props => props.theme.colors.gray[700]};
  margin: 1.5rem 0;
`;

export const EventList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const DailyEvents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DailyEventsTitle = styled.p`
  font-size: 0.875rem;
  line-height: 1rem;
  padding: 1rem 0;
`;

export const ListEnd = styled.p`
  border-top: 1px solid ${theme.colors.gray[200]};
  padding-top: 1rem;
  color: ${theme.colors.gray[700]};
  font-size: 1rem;
  text-align: center;
`;
