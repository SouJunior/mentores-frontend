import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const EventWrapper = styled.div`
  border: 1px solid #cbcbcb;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
`;

export const EventHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
`;

export const EventTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
  }
`;

export const EventTime = styled.span`
  font-size: 1.25rem;
  line-height: 1.5rem;
`;

export const EventName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25rem;
`;

export const DetailsBtn = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.colors.blue[800]};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
`;

export const EventDetail = styled.div<{
  open: boolean;
}>`
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
  padding: 0 1rem 1rem 1rem;
  display: ${({ open }) => (open ? 'flex' : 'none')};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const InfoTitle = styled.p`
  color: ${theme.colors.gray[700]};
  font-size: 0.875rem;
`;

export const InfoContent = styled.p`
  font-size: 1rem;
  line-height: 1.375rem;
`;

export const ManageBtn = styled.a`
  background: transparent;
  color: ${theme.colors.blue[800]};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  border: 2px solid ${theme.colors.blue[800]};
  border-radius: 0.5rem;
  padding: 0.625rem 1.5rem;
  cursor: pointer;

  &:hover {
    border: 2px solid ${theme.colors.blue[850]};
  }
`;
