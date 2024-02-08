import GridSpecialities from '@/components/atoms/GridSpecialities'
import {
  ModalContainer,
  TabsContainer,
  Tab,
  TabLabel,
  TabWrapper,
  TabLine,
} from './styled'
import { useState } from 'react'
import PerfilTab from '../PerfilTab'

export default function OnBoardModal() {
  const [step, setStep] = useState<1 | 2>(1)

  const changeSteps = () => {
    setStep(2)
  }

  return (
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
      {step === 1 && <GridSpecialities stepNumber={changeSteps} />}
      {step === 2 && <PerfilTab onStep={setStep} />}
    </ModalContainer>
  )
}
