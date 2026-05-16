import { device } from '@/styles/theme';
import schedulingHeader from '@/assets/scheduling-header.svg';
import styled, { css } from 'styled-components';

export const PageContainer = styled.main`
  background-color: ${props => props.theme.colors.white};
`;

export const HeaderBand = styled.section`
  background-color: ${props => props.theme.colors.blue[25]};
  background-image: url(${schedulingHeader.src});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  max-width: 1280px;
  height: clamp(8rem, 15.625vw, 12.5rem);
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

export const Content = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem 3rem;

  @media ${device.mobileL} {
    padding: 0 1rem 2.5rem;
  }
`;

export const MentorPhoto = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  overflow: hidden;
  margin-top: -3.5rem;
  background-color: ${props => props.theme.colors.gray[200]};
  border: 0.25rem solid ${props => props.theme.colors.white};
  position: relative;
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 24rem;
  gap: 3rem;
  margin-top: 1.5rem;

  @media ${device.desktopXS} {
    grid-template-columns: 1fr;
  }
`;

export const MentorName = styled.h1`
  color: ${props => props.theme.colors.black[200]};
  font-size: ${props => props.theme.fontSizes.xxl};
  line-height: 1.1;
  font-weight: 600;
  margin-bottom: 1rem;

  @media ${device.mobileL} {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

export const MentorBio = styled.p`
  color: ${props => props.theme.colors.gray[700]};
  font-size: ${props => props.theme.fontSizes.sm};
  line-height: 1.5rem;
  max-width: 45rem;
`;

export const Sidebar = styled.aside`
  border-left: 1px solid ${props => props.theme.colors.gray[200]};
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media ${device.desktopXS} {
    border-left: 0;
    padding-left: 0;
    border-top: 1px solid ${props => props.theme.colors.gray[200]};
    padding-top: 2rem;
  }
`;

export const SidebarSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SidebarTitle = styled.h2`
  color: ${props => props.theme.colors.gray[700]};
  font-size: ${props => props.theme.fontSizes.lg};
  line-height: 1.2;
  font-weight: 600;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const SchedulingSection = styled.section`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: 18rem minmax(16rem, 1fr);
  gap: 2rem;
  align-items: start;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const CalendarTitle = styled.h2`
  color: ${props => props.theme.colors.blue[800]};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: 600;
  text-transform: capitalize;
`;

export const MonthButton = styled.button`
  all: unset;
  width: 2rem;
  height: 2rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: ${props => props.theme.colors.blue[800]};
  cursor: pointer;

  &:hover,
  &:focus-visible {
    background-color: ${props => props.theme.colors.blue[25]};
  }
`;

export const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.35rem;
  margin-bottom: 0.75rem;
`;

export const WeekDay = styled.span`
  color: ${props => props.theme.colors.blue[950]};
  font-size: 0.75rem;
  font-weight: 700;
  text-align: center;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.35rem;
`;

interface DayButtonProps {
  $isSelected?: boolean;
  $isOutsideMonth?: boolean;
}

export const DayButton = styled.button<DayButtonProps>`
  all: unset;
  height: 2.25rem;
  min-width: 2.25rem;
  border-radius: 0.5rem;
  display: grid;
  place-items: center;
  color: ${props => props.theme.colors.gray[700]};
  font-size: ${props => props.theme.fontSizes.xs};
  cursor: pointer;

  ${props =>
    props.$isOutsideMonth &&
    css`
      visibility: hidden;
    `}

  ${props =>
    props.$isSelected &&
    css`
      background-color: ${props.theme.colors.blue[800]};
      color: ${props.theme.colors.white};
      font-weight: 700;
    `}

  &:disabled {
    color: ${props => props.theme.colors.gray[500]};
    cursor: not-allowed;
  }

  &:not(:disabled):not([aria-pressed='true']):hover,
  &:focus-visible {
    background-color: ${props => props.theme.colors.blue[25]};
  }
`;

export const TimesPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 36rem;
`;

export const TimesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  min-height: 2.75rem;
`;

interface TimeButtonProps {
  $isSelected?: boolean;
}

export const TimeButton = styled.button<TimeButtonProps>`
  all: unset;
  min-width: 5.25rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: 1px solid
    ${props =>
      props.$isSelected
        ? props.theme.colors.blue[800]
        : props.theme.colors.gray[600]};
  background-color: ${props =>
    props.$isSelected ? props.theme.colors.blue[800] : props.theme.colors.white};
  color: ${props =>
    props.$isSelected ? props.theme.colors.white : props.theme.colors.black[200]};
  display: grid;
  place-items: center;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    border-color: ${props => props.theme.colors.blue[800]};
  }
`;

export const NotesLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: ${props => props.theme.colors.black[200]};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: 500;
`;

export const NotesInput = styled.textarea`
  resize: vertical;
  min-height: 6rem;
  max-width: 34rem;
  border-radius: 0.5rem;
  border: 1px solid ${props => props.theme.colors.gray[600]};
  padding: 0.75rem;
  color: ${props => props.theme.colors.black[200]};
  line-height: 1.4rem;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.blue[800]};
    box-shadow: 0 0 0 1px ${props => props.theme.colors.blue[800]};
  }
`;

export const EmptyMessage = styled.p`
  color: ${props => props.theme.colors.gray[700]};
  line-height: 1.5rem;
`;
