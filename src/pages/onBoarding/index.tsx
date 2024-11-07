import {
  ContainerBoardModal,
  ContainerOnBoarding,
  OnBoardImage,
  ModalContainer,
  TabsContainer,
  Tab,
  TabLabel,
  TabWrapper,
  TabLine,
  ContainerSpinnerLoading,
} from '@/styles/pages/onBoarding';
import onBoardImage from '@/assets/onBoarding/Ilustrações.svg';
import GridSpecialities from '@/components/atoms/GridSpecialities';
import PerfilTab from '@/components/molecules/PerfilTab';
import { useState } from 'react';
import { OnBoardingProvider, StepNumber } from '@/context/OnBoardingContext';
import { EditPhotoProvider } from '@/context/EditPhotoContext';
import { useProtectPage } from '@/hooks/useProtectPage';
import { Spinner } from '@/components/atoms/Spinner';

export default function OnBoarding() {
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
            </TabWrapper>{' '}
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
