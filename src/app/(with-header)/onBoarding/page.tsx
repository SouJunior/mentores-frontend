'use client';

import onBoardImage from '@/assets/onBoarding/Ilustrações.svg';
import GridSpecialities from '@/components/atoms/GridSpecialities';
import { Spinner } from '@/components/atoms/Spinner';
import PerfilTab from '@/components/molecules/PerfilTab';
import { EditPhotoProvider } from '@/context/EditPhotoContext';
import { OnBoardingProvider, StepNumber } from '@/context/OnBoardingContext';
import { useProtectPage } from '@/hooks/useProtectPage';
import {
  ContainerBoardModal,
  ContainerOnBoarding,
  ContainerSpinnerLoading,
  ModalContainer,
  OnBoardImage,
  Tab,
  TabLabel,
  TabLine,
  TabsContainer,
  TabWrapper,
} from '@/styles/pages/onBoarding';
import { useState } from 'react';

export default function OnBoardingPage() {
  const [step, setStep] = useState<StepNumber>(1);
  const loading = useProtectPage();

  if (loading) {
    return (
      <ContainerSpinnerLoading>
        <Spinner className="spinner" />
      </ContainerSpinnerLoading>
    );
  }

  return (
    <ContainerOnBoarding>
      <OnBoardImage src={onBoardImage} alt="Background" />
      <ContainerBoardModal>
        <ModalContainer>
          <TabsContainer>
            <TabWrapper>
              <Tab>
                <TabLabel data-active={step === 1 ? 'true' : 'false'}>
                  ESPECIALIDADES
                </TabLabel>
                <TabLine data-active={step === 1 ? 'true' : 'false'} />
              </Tab>
            </TabWrapper>
            <TabWrapper>
              <Tab>
                <TabLabel data-active={step === 2 ? 'true' : 'false'}>
                  PERFIL
                </TabLabel>
                <TabLine data-active={step === 2 ? 'true' : 'false'} />
              </Tab>
            </TabWrapper>
          </TabsContainer>

          <OnBoardingProvider>
            <EditPhotoProvider>
              {step === 1 && <GridSpecialities onStep={setStep} />}
              {step === 2 && <PerfilTab onStep={setStep} />}
            </EditPhotoProvider>
          </OnBoardingProvider>
        </ModalContainer>
      </ContainerBoardModal>
    </ContainerOnBoarding>
  );
}
