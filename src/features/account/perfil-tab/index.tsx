import FormOnboard2 from '@/features/home/form-onboard2';
import { PerfilContainer, StyledImportant } from './styled';
import { Dispatch, SetStateAction } from 'react';
import { StepNumber } from '@/context/OnBoardingContext';

interface PerfilTabProps {
  onStep: Dispatch<SetStateAction<StepNumber>>;
}

export default function PerfilTab({ onStep }: PerfilTabProps) {
  return (
    <PerfilContainer>
      <StyledImportant>
        <span>*</span> Indica um campo obrigatório
      </StyledImportant>{' '}
      <FormOnboard2 onStep={onStep} />
    </PerfilContainer>
  );
}
