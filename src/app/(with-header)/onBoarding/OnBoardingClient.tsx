'use client';

import GridSpecialities from '@/features/account/components/grid-specialities';
import PerfilTab from '@/features/account/components/perfil-tab';
import { EditPhotoProvider } from '@/shared/context/EditPhotoContext';
import {
  OnBoardingProvider,
  StepNumber,
} from '@/shared/context/OnBoardingContext';
import Image from 'next/image';
import { useState } from 'react';

interface OnBoardingClientProps {
  fullName?: string;
}

export default function OnBoardingClient({ fullName }: OnBoardingClientProps) {
  const [step, setStep] = useState<StepNumber>(1);

  return (
    <main className="w-full h-screen bg-blue-600 relative">
      <Image
        src={'/onBoarding/Ilustrações.svg'}
        alt="Background"
        fill
        className="object-contain"
      />
      <div className="flex justify-center items-center h-full relative">
        <div className="flex flex-col items-center max-w-149 w-full rounded-2xl p-6 bg-white z-10">
          <div className="flex items-center justify-around mx-5 w-full">
            <div className="first:mr-1.25 last:ml-1.25">
              <div className="relative flex flex-col items-center w-25">
                <span
                  className={`mb-1.25 font-medium leading-[1.2rem] ${step === 1 ? 'text-blue-800' : 'text-gray-600'}`}
                >
                  ESPECIALIDADES
                </span>
                <div
                  className={`w-[258px] h-0.5 transition-all duration-300 ${step === 1 ? 'bg-blue-800' : 'bg-transparent'}`}
                />
              </div>
            </div>
            <div className="first:mr-[5px] last:ml-[5px]">
              <div className="relative flex flex-col items-center w-[100px]">
                <span
                  className={`mb-[5px] font-medium leading-[1.2rem] ${step === 2 ? 'text-blue-800' : 'text-gray-600'}`}
                >
                  PERFIL
                </span>
                <div
                  className={`w-[258px] h-0.5 transition-all duration-300 ${step === 2 ? 'bg-blue-800' : 'bg-transparent'}`}
                />
              </div>
            </div>
          </div>

          <OnBoardingProvider>
            <EditPhotoProvider>
              {step === 1 && (
                <GridSpecialities onStep={setStep} fullName={fullName} />
              )}
              {step === 2 && <PerfilTab onStep={setStep} />}
            </EditPhotoProvider>
          </OnBoardingProvider>
        </div>
      </div>
    </main>
  );
}
