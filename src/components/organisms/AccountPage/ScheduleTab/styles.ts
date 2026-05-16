import { Button } from '@/components/atoms/Button';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
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

export const ScheduleSubTabsRoot = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ScheduleSubTabsList = styled(Tabs.List)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const ScheduleSubTabsTrigger = styled(Tabs.Trigger)`
  all: unset;
  color: ${props => props.theme.colors.black[200]};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 1rem;
  padding-bottom: 0.25rem;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  &[data-state='active'] {
    color: ${props => props.theme.colors.blue[800]};
    border-bottom-color: ${props => props.theme.colors.blue[800]};
    font-weight: 600;
  }
`;

export const ScheduleSubTabsContent = styled(Tabs.Content)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SchedulesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 43rem;
`;

export const ScheduleDateGroup = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ScheduleDateTitle = styled.h3`
  color: ${props => props.theme.colors.black[200]};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: 500;
  line-height: 1rem;
`;

interface ScheduleCardProps {
  $isExpanded?: boolean;
}

export const ScheduleCard = styled.article<ScheduleCardProps>`
  border: 1px solid ${props => props.theme.colors.gray[200]};
  border-radius: 0.75rem;
  max-width: 33rem;
  overflow: hidden;

  ${props =>
    props.$isExpanded &&
    css`
      border-color: ${props.theme.colors.gray[250]};
    `}
`;

export const ScheduleSummaryButton = styled.button`
  all: unset;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 7rem minmax(0, 1fr) auto;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  cursor: pointer;

  @media (max-width: 560px) {
    grid-template-columns: 1fr auto;
    gap: 0.5rem;
  }
`;

export const ScheduleTimeRange = styled.span`
  color: ${props => props.theme.colors.black[200]};
  font-size: ${props => props.theme.fontSizes.sm};
  line-height: 1.25rem;

  @media (max-width: 560px) {
    grid-column: 1 / -1;
  }
`;

export const ParticipantSummary = styled.span`
  display: flex;
  align-items: center;
  min-width: 0;
  gap: 0.5rem;
  color: ${props => props.theme.colors.black[200]};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: 600;
  line-height: 1rem;
`;

export const ParticipantAvatar = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  background-color: ${props => props.theme.colors.blue[25]};
  color: ${props => props.theme.colors.blue[800]};
  font-size: 0.625rem;
  font-weight: 700;
`;

export const ParticipantName = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface ScheduleDetailsToggleProps {
  $isExpanded?: boolean;
}

export const ScheduleDetailsToggle = styled.span<ScheduleDetailsToggleProps>`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: ${props => props.theme.colors.blue[800]};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: 600;

  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.2s ease;
    transform: rotate(${props => (props.$isExpanded ? '180deg' : '0deg')});
  }
`;

export const ScheduleDetailsIcon = styled(KeyboardArrowDownRoundedIcon)``;

export const ScheduleDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem 1rem 8.5rem;

  @media (max-width: 560px) {
    padding-left: 1rem;
  }
`;

export const ScheduleDetailBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ScheduleDetailLabel = styled.span`
  color: ${props => props.theme.colors.gray[700]};
  font-size: 0.75rem;
  line-height: 1rem;
`;

export const ScheduleDetailText = styled.p`
  color: ${props => props.theme.colors.black[200]};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 1.25rem;
  word-break: break-word;
`;

export const ScheduleDetailLink = styled.a`
  color: ${props => props.theme.colors.blue[800]};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 1.25rem;
  text-decoration: underline;
  word-break: break-word;
`;

export const ManageScheduleLink = styled.a`
  width: fit-content;
  border: 1px solid ${props => props.theme.colors.blue[800]};
  border-radius: 0.25rem;
  color: ${props => props.theme.colors.blue[800]};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: 600;
  line-height: 1rem;
  padding: 0.5rem 0.75rem;
`;

export const ScheduleEmptyState = styled.p`
  color: ${props => props.theme.colors.gray[700]};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 1.25rem;
`;

export const ScheduleEndMessage = styled.p`
  max-width: 33rem;
  border-top: 1px solid ${props => props.theme.colors.gray[200]};
  color: ${props => props.theme.colors.gray[700]};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 1.25rem;
  padding-top: 1rem;
  text-align: center;
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
  display: flex;
  justify-content: space-between;
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
  text-align: center;
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
