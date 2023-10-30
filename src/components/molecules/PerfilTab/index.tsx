import FormOnboard2 from '@/components/molecules/FormOnboard2'
import { PerfilContainer, StyledImportant } from './styled'
import { Dispatch, SetStateAction } from 'react'

interface PerfilTabProps {
  onStep?: Dispatch<SetStateAction<1 | 2>>
}

export default function PerfilTab({ onStep }: PerfilTabProps) {
  return (
    <PerfilContainer>
      <StyledImportant>
        <>*</> Indica um campo obrigatório
      </StyledImportant>{' '}
      <FormOnboard2 onStep={onStep} />
    </PerfilContainer>
  )
}
