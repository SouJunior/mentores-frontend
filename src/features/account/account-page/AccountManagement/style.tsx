import styled from 'styled-components';

export const DisclaimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 36rem;
  padding: 0.5rem 0;
`;

export const Disclaimer = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  line-height: 1.4rem;
`;

export const Divider = styled.div`
  max-width: 36rem;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray[700]};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 36rem;
`;

export interface ButtonStyleProps {
  variant?: 'primary' | 'danger';
}

export const Button = styled.button<ButtonStyleProps>`
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  text-align: left;
  border: 2px solid ${({ theme }) => theme.colors.gray[600]};
  border-radius: 0.5rem;
  background-color: transparent;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ variant }) => {
    if (variant === 'danger') return '#D10324';
    if (variant === 'primary') return '#323232';
  }};
`;
