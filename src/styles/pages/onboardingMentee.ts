import { Button } from '@/components/atoms/Button';
import { Modal } from '@/components/atoms/Modal';
import { SelectItem } from '@/components/atoms/Select/SelectItem';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const Greeting = styled.span`
  display: block;
  margin-top: 1.25rem;
  font-size: 1rem;
  line-height: 1.2rem;
`;

export const StepTitle = styled.h1`
  margin: 1.25rem 0 0;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.9rem;
  text-align: center;
  color: ${props => props.theme.colors.black[200]};
`;

export const StepDescription = styled.p`
  margin: 0.75rem 0 0;
  font-size: 0.95rem;
  line-height: 1.4rem;
  text-align: center;
  color: ${props => props.theme.colors.gray[700]};
`;

export const RequiredLegend = styled.span`
  display: block;
  width: 100%;
  margin-top: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: ${props => props.theme.colors.black[200]};

  span {
    color: ${props => props.theme.colors.blue[600]};
  }
`;

export const SpecialtyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  width: 100%;
  margin-top: 1.5rem;
`;

export const SpecialtyButton = styled.button<{ $selected: boolean }>`
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  min-height: 2.5rem;
  padding: 0.6rem 1rem;
  font-size: 0.95rem;
  line-height: 1.1rem;
  background: ${props =>
    props.$selected
      ? props.theme.colors.blue[600]
      : props.theme.colors.gray[250]};
  color: ${props =>
    props.$selected ? props.theme.colors.white : props.theme.colors.gray[700]};
`;

export const SpecialtyCounter = styled.span`
  display: block;
  width: 100%;
  margin-top: 1rem;
  text-align: right;
  color: ${props => props.theme.colors.blue[800]};
`;

export const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 2rem;
  background: ${props => props.theme.colors.gray[700]};
`;

export const FooterActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
`;

export const SecondaryButton = styled(Button)`
  color: ${props => props.theme.colors.gray[700]};
  border-color: ${props => props.theme.colors.gray[700]};
`;

export const PhotoTrigger = styled.button<{ $error: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 2px dashed
    ${props =>
      props.$error
        ? props.theme.colors.red[600]
        : props.theme.colors.gray[700]};
  background: transparent;
  cursor: pointer;
`;

export const PhotoLegend = styled.span`
  max-width: 12rem;
  padding-top: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: center;
  color: ${props => props.theme.colors.black[200]};

  span {
    color: ${props => props.theme.colors.blue[600]};
  }
`;

export const HelpText = styled.span`
  display: block;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: ${props => props.theme.colors.black[200]};
  text-align: center;
`;

export const ErrorText = styled.span`
  display: block;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: ${props => props.theme.colors.red[600]};
`;

export const InlineActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1rem 0;
`;

export const GhostAction = styled.button`
  border: 1px solid ${props => props.theme.colors.blue[800]};
  border-radius: 999px;
  background: transparent;
  color: ${props => props.theme.colors.blue[800]};
  cursor: pointer;
  padding: 0.55rem 0.9rem;
  font-size: 0.875rem;
  line-height: 1rem;
  font-weight: 600;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-top: 1.5rem;
`;

export const CharacterCounter = styled.span<{ $error: boolean }>`
  display: block;
  margin-top: -0.25rem;
  text-align: right;
  font-size: 0.75rem;
  line-height: 1rem;
  color: ${props =>
    props.$error ? props.theme.colors.red[600] : props.theme.colors.black[200]};
`;

export const ReadonlyField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-size: 0.75rem;
    line-height: 1rem;
    color: ${props => props.theme.colors.black[200]};
  }

  strong {
    min-height: 3rem;
    border: 1px solid ${props => props.theme.colors.gray[500]};
    border-radius: 0.5rem;
    padding: 0.85rem 1rem;
    font-size: 1rem;
    font-weight: 400;
    color: ${props => props.theme.colors.black[200]};
    background: ${props => props.theme.colors.gray[200]};
  }
`;

export const SelectInputContainer = styled.label<{ $error: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-size: 0.75rem;
    line-height: 1rem;
    color: ${props => props.theme.colors.black[200]};
  }

  .select-trigger {
    border-color: ${props =>
      props.$error
        ? props.theme.colors.red[600]
        : props.theme.colors.gray[500]};
  }
`;

export const SelectItemStyled = styled(SelectItem)`
  margin: 0 !important;
`;

export const ExitModalContent = styled(Modal.Content)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 32rem;
  padding: 2rem;
  text-align: center;
`;

export const ExitModalTitle = styled(Modal.Title)`
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: ${props => props.theme.colors.black[200]};
`;

export const ExitModalDescription = styled(Modal.Description)`
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${props => props.theme.colors.gray[700]};
`;

export const ExitModalActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;
