'use client';

import onBoardImage from '@/assets/onBoarding/Ilustrações.svg';
import GridSpecialities from '@/features/account/grid-specialities';
import { Spinner } from '@/components/spinner';
import PerfilTab from '@/features/account/perfil-tab';
import { EditPhotoProvider } from '@/context/EditPhotoContext';
import { OnBoardingProvider, StepNumber } from '@/context/OnBoardingContext';
import { useProtectPage } from '@/hooks/useProtectPage';
import Image from 'next/image';
import { useState } from 'react';

export default function OnBoardingPage() {
  const [step, setStep] = useState<StepNumber>(1);
  const loading = useProtectPage();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full [--spinner-color:#003986]">
        <Spinner className="!w-20 !h-20" />
      </div>
    );
  }

  return (
    <main className="w-full h-screen bg-[#175CB7] relative">
      <Image
        src={onBoardImage}
        alt="Background"
        fill
        className="object-contain"
      />
      <div className="flex justify-center items-center h-full relative">
        <div className="flex flex-col items-center max-w-[596px] w-full rounded-2xl p-6 bg-white z-10">
          <div className="flex items-center justify-around mx-5 w-full">
            <div className="first:mr-[5px] last:ml-[5px]">
              <div className="relative flex flex-col items-center w-[100px]">
                <span
                  className={`mb-[5px] font-medium leading-[1.2rem] ${step === 1 ? 'text-[#003986]' : 'text-[#ACACAC]'}`}
                >
                  ESPECIALIDADES
                </span>
                <div
                  className={`w-[258px] h-0.5 transition-all duration-300 ${step === 1 ? 'bg-[#003986]' : 'bg-transparent'}`}
                />
              </div>
            </div>
            <div className="first:mr-[5px] last:ml-[5px]">
              <div className="relative flex flex-col items-center w-[100px]">
                <span
                  className={`mb-[5px] font-medium leading-[1.2rem] ${step === 2 ? 'text-[#003986]' : 'text-[#ACACAC]'}`}
                >
                  PERFIL
                </span>
                <div
                  className={`w-[258px] h-0.5 transition-all duration-300 ${step === 2 ? 'bg-[#003986]' : 'bg-transparent'}`}
                />
              </div>
            </div>
          </div>

          <OnBoardingProvider>
            <EditPhotoProvider>
              {step === 1 && <GridSpecialities onStep={setStep} />}
              {step === 2 && <PerfilTab onStep={setStep} />}
            </EditPhotoProvider>
          </OnBoardingProvider>
        </div>
      </div>
    </main>
  );
}
