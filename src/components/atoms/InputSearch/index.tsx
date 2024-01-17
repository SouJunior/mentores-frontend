import React, { useState } from 'react'
import {
  ContainerInput,
  PlaceholderInput,
  StyledInputSearch,
  StyledSearchIcon,
} from './styled'

interface InputSearchProps {
  onSearch: (query: string) => void
}

export default function InputSearch({ onSearch }: InputSearchProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setSearchQuery(inputValue)

    if (inputValue.length) {
      onSearch(inputValue)
    } else {
      onSearch('')
    }
  }

  return (
    <ContainerInput>
      <StyledInputSearch
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        hasValue={Boolean(searchQuery)}
        id="input-search-mentors"
      />
      <PlaceholderInput htmlFor="input-search-mentors">
        Pesquise por nome
      </PlaceholderInput>
      <StyledSearchIcon aria-hidden />
    </ContainerInput>
  )
}
