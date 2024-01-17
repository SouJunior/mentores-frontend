import { useState } from 'react'
import InputSearch from '@/components/atoms/InputSearch'
import { ContainerControls, ContainerSelects, Content } from './styled'
import SelectFilter from '@/components/atoms/SelectFilter'
import { genders, specialties } from '@/data/static-info'

interface SubHeaderProps {
  onGenderChange: (selectedOptions: string[]) => void
  onSpecialtyChange: (selectedOptions: string[]) => void
  onMentorSearch: (query: string) => void
}

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
            options={specialties}
            selectName="Especialidades"
            onChange={onSpecialtyChange}
          />
          <SelectFilter
            options={genders}
            selectName="Gênero"
            onChange={onGenderChange}
          />
        </ContainerSelects>
      </Content>
    </ContainerControls>
  )
}
