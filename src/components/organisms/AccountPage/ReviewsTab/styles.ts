import * as Tabs from '@radix-ui/react-tabs';
import Link from 'next/link';
import styled from 'styled-components';

export const ReviewsTabsRoot = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ReviewsTabsList = styled(Tabs.List)`
  display: flex;
  gap: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.gray[250]};
  flex-wrap: wrap;
`;

export const ReviewsTabsTrigger = styled(Tabs.Trigger)`
  all: unset;
  cursor: pointer;
  color: ${props => props.theme.colors.gray[700]};
  font-weight: 600;
  padding: 0.75rem 0;
  border-bottom: 3px solid transparent;

  &[data-state='active'] {
    color: ${props => props.theme.colors.blue[800]};
    border-bottom-color: ${props => props.theme.colors.blue[800]};
  }
`;

export const PrivacyNotice = styled.p`
  border-left: 4px solid ${props => props.theme.colors.blue[800]};
  border-radius: 0.4rem;
  background: ${props => props.theme.colors.blue[25]};
  color: ${props => props.theme.colors.black[200]};
  padding: 0.85rem 1rem;
  font-size: 0.9rem;
  line-height: 1.4;
`;

export const ReviewsTabsContent = styled.div`
  min-height: 16rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EmptyReviewsMessage = styled.p`
  color: ${props => props.theme.colors.gray[700]};
  font-size: 1rem;
  line-height: 1.5;
`;

export const ReviewCard = styled.article`
  max-width: 42rem;
  border: 1px solid ${props => props.theme.colors.gray[200]};
  border-radius: 0.75rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: ${props => props.theme.colors.white};
`;

export const ReviewCardHeader = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const ReviewTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ReviewTitle = styled.h3`
  color: ${props => props.theme.colors.black[200]};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
`;

export const ReviewMeta = styled.p`
  color: ${props => props.theme.colors.gray[700]};
  font-size: 0.875rem;
  line-height: 1.4;
`;

export const ReviewActionLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  background: ${props => props.theme.colors.blue[800]};
  color: ${props => props.theme.colors.white};
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.7rem 1rem;
  text-decoration: none;
`;

export const RatingSummary = styled.div`
  width: fit-content;
  border-radius: 999px;
  background: ${props => props.theme.colors.blue[25]};
  color: ${props => props.theme.colors.blue[800]};
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.35rem 0.65rem;
`;

export const ReviewComment = styled.p`
  color: ${props => props.theme.colors.black[200]};
  font-size: 0.95rem;
  line-height: 1.5;
  white-space: pre-line;
`;

export const ReviewMentorOnlyNotice = styled.div`
  max-width: 40rem;
  border: 1px dashed ${props => props.theme.colors.gray[250]};
  border-radius: 0.75rem;
  padding: 1rem;
  color: ${props => props.theme.colors.gray[700]};
  line-height: 1.5;
`;
