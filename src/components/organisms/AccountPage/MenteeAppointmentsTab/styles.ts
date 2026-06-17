import styled, { css } from 'styled-components';

export const AppointmentSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 43rem;
`;

export const AppointmentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const AppointmentSectionTitle = styled.h3`
  color: ${props => props.theme.colors.black[200]};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: 600;
  line-height: 1rem;
`;

export const MentorSummary = styled.span`
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: 0.25rem;
`;

export const MentorTopic = styled.span`
  color: ${props => props.theme.colors.gray[700]};
  font-size: 0.75rem;
  line-height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface AppointmentStatusProps {
  $variant: 'pending' | 'scheduled' | 'completed';
}

export const AppointmentStatus = styled.span<AppointmentStatusProps>`
  width: fit-content;
  border-radius: 999px;
  padding: 0.25rem 0.5rem;
  font-size: 0.6875rem;
  font-weight: 700;
  line-height: 1;

  ${props =>
    props.$variant === 'pending'
      ? css`
          background: #fff7e6;
          color: #a15c00;
        `
      : props.$variant === 'scheduled'
      ? css`
          background: ${props.theme.colors.blue[25]};
          color: ${props.theme.colors.blue[800]};
        `
      : css`
          background: ${props.theme.colors.gray[200]};
          color: ${props.theme.colors.black[200]};
        `}
`;
