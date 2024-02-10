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
} from '@/styles/pages/onBoarding'
import onBoardImage from '@/assets/onBoarding/Ilustrações.svg'
import GridSpecialities from '@/components/atoms/GridSpecialities'
import PerfilTab from '@/components/molecules/PerfilTab'
import { useState } from 'react'
import { OnBoardingProvider } from '@/context/OnBoardingContext'
import { EditPhotoProvider } from '@/context/EditPhotoContext'

export default function OnBoarding() {
  const [step, setStep] = useState<1 | 2>(1)

  const changeSteps = () => {
    setStep(2)
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
              {step === 1 && <GridSpecialities stepNumber={changeSteps} />}
              {step === 2 && <PerfilTab onStep={setStep} />}
            </EditPhotoProvider>
          </OnBoardingProvider>
        </ModalContainer>
      </ContainerBoardModal>
    </ContainerOnBoarding>
  )
}
