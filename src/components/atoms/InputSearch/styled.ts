import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'

export const StyledInputSearch = styled.input`
  width: 389px;
  height: 44px;
  border-radius: 8px;
  padding: 8px;
  border: 1px solid #acacac;
  position: relative;
  &:focus,
  &:active {
    border: 2px solid #002c66;
  }
`
export const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  margin-left: 350px;
  color: #acacac;
`
