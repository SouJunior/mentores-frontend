import { useState } from 'react'
import InputSearch from '@/components/atoms/InputSearch'
import { ContainerControls, ContainerSelects, Content } from './styled'
import SelectFilter from '@/components/atoms/SelectFilter'

interface SubHeaderProps {
  onGenderChange: (selectedOptions: string[]) => void
  onSpecialtyChange: (selectedOptions: string[]) => void
  onMentorSearch: (query: string) => void
}

const genderOptions = [
  'Homem Cis',
  'Mulher cis',
  'Homem trans',
  'Mulher trans',
  'Bigenero',
  'Genero fluido',
  'Nao Binario',
  'Agenero',
  'Prefiro não dizer',
  'Outros',
]
const specialtyOptions = [
  'Carreira',
  'Liderança',
  'Produto',
  'Agilidade',
  'UX Design',
  'UI Design',
  'Front-End',
  'Back-End',
  'Mobile',
  'QA',
  'Dev Ops',
  'Dados',
]

export default function MentorSubHeader({
  onGenderChange,
  onSpecialtyChange,
  onMentorSearch,
}: SubHeaderProps) {
  const [_, setMentorSearchQuery] = useState('')

  const handleMentorSearch = (query: string) => {
    setMentorSearchQuery(query)
    onMentorSearch(query)
  }

  return (
    <ContainerControls>
      <Content>
        <InputSearch onSearch={handleMentorSearch} />
        <ContainerSelects>
          <SelectFilter
            options={specialtyOptions}
            selectName="Especialidades"
            onChange={onSpecialtyChange}
          />
          <SelectFilter
            options={genderOptions}
            selectName="Gênero"
            onChange={onGenderChange}
          />
        </ContainerSelects>
      </Content>
    </ContainerControls>
  )
}
