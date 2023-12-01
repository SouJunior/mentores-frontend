import React, { useState } from 'react'
import { StyledInputSearch, StyledSearchIcon } from './styled'

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
    <>
      <StyledInputSearch
        type="text"
        placeholder="Pesquisar por nome"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <StyledSearchIcon />
    </>
  )
}
