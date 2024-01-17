import React, { ComponentProps } from 'react'
import {
  ContainerInput,
  PlaceholderInput,
  StyledInputSearch,
  StyledSearchIcon,
} from './styled'

type InputSearchProps = ComponentProps<'input'>

export default function InputSearch(props: InputSearchProps) {
  return (
    <ContainerInput>
      <StyledInputSearch type="text" {...props} id="input-search-mentors" />
      <PlaceholderInput htmlFor="input-search-mentors">
        Pesquise por nome
      </PlaceholderInput>
      <StyledSearchIcon aria-hidden />
    </ContainerInput>
  )
}
