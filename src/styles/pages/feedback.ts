import { Button } from '@/components/atoms/Button';
import Link from 'next/link';
import styled, { css } from 'styled-components';

interface StarButtonProps {
  $isActive: boolean;
}

export const FeedbackPageContainer = styled.div`
  max-width: 52rem;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FeedbackCard = styled.section`
  border: 1px solid ${props => props.theme.colors.gray[200]};
  border-radius: 1rem;
  background: ${props => props.theme.colors.white};
  box-shadow: 0 10px 30px rgba(15, 74, 161, 0.08);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FeedbackHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FeedbackEyebrow = styled.span`
  color: ${props => props.theme.colors.blue[800]};
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const FeedbackTitle = styled.h1`
  color: ${props => props.theme.colors.black[200]};
  font-size: 2rem;
  line-height: 1.2;
`;

export const FeedbackSubtitle = styled.p`
  color: ${props => props.theme.colors.gray[700]};
  font-size: 1rem;
  line-height: 1.6;
`;

export const FeedbackInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const FeedbackInfoCard = styled.div`
  border-radius: 0.75rem;
  background: ${props => props.theme.colors.blue[25]};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const FeedbackInfoLabel = styled.span`
  color: ${props => props.theme.colors.gray[700]};
  font-size: 0.8rem;
  line-height: 1.2;
`;

export const FeedbackInfoValue = styled.span`
  color: ${props => props.theme.colors.black[200]};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
`;

export const FeedbackForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FeedbackQuestionBlock = styled.fieldset`
  border: 0;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const FeedbackQuestionLabel = styled.legend`
  color: ${props => props.theme.colors.black[200]};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
`;

export const FeedbackStarsRow = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const FeedbackStarButton = styled.button<StarButtonProps>`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.75rem;
  border: 1px solid ${props => props.theme.colors.gray[250]};
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.gray[700]};
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    border-color: ${props => props.theme.colors.blue[800]};
    color: ${props => props.theme.colors.blue[800]};
  }

  ${props =>
    props.$isActive &&
    css`
      border-color: ${props.theme.colors.blue[800]};
      background: ${props.theme.colors.blue[800]};
      color: ${props.theme.colors.white};
    `}
`;

export const FeedbackError = styled.span`
  color: ${props => props.theme.colors.red[500]};
  font-size: 0.875rem;
  line-height: 1.4;
`;

export const FeedbackHint = styled.p`
  color: ${props => props.theme.colors.gray[700]};
  font-size: 0.875rem;
  line-height: 1.5;
`;

export const FeedbackTextarea = styled.textarea`
  min-height: 10rem;
  border: 1px solid ${props => props.theme.colors.gray[250]};
  border-radius: 0.75rem;
  padding: 1rem;
  color: ${props => props.theme.colors.black[200]};
  font-size: 1rem;
  line-height: 1.5;
  resize: vertical;
  outline: none;

  &:focus {
    border-color: ${props => props.theme.colors.blue[800]};
    box-shadow: 0 0 0 1px ${props => props.theme.colors.blue[800]};
  }
`;

export const FeedbackFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const FeedbackBackLink = styled(Link)`
  color: ${props => props.theme.colors.blue[800]};
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
`;

export const FeedbackSubmitButton = styled(Button)`
  min-width: 12rem;
`;

export const FeedbackReadOnlyBlock = styled.div`
  border-top: 1px solid ${props => props.theme.colors.gray[200]};
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FeedbackSubmittedBadge = styled.span`
  width: fit-content;
  border-radius: 999px;
  background: #d8f0df;
  color: #1b6b34;
  padding: 0.4rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 700;
`;

export const FeedbackComment = styled.p`
  color: ${props => props.theme.colors.black[200]};
  font-size: 0.95rem;
  line-height: 1.6;
  white-space: pre-line;
`;
