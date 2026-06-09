import FormOnboard2 from '@/features/home/components/form-onboard2';
import { StepNumber } from '@/shared/context/OnBoardingContext';
import { Dispatch, SetStateAction } from 'react';

interface PerfilTabProps {
  onStep: Dispatch<SetStateAction<StepNumber>>;
}

export default function PerfilTab({ onStep }: PerfilTabProps) {
  return (
    <div className="flex flex-col w-full items-center gap-5">
      <span className="text-[0.875rem] font-normal leading-4 text-left w-full mt-4 text-[#323232] [&_span]:text-[#175CB7]">
        <span>*</span> Indica um campo obrigatório
      </span>{' '}
      <FormOnboard2 onStep={onStep} />
    </div>
  );
}
