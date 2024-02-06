import styled, { css } from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'

export const ContainerInput = styled.div`
  border-radius: 0.5rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.gray[600]};
  max-width: 389px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${(props) => props.theme.colors.black[200]};

  &:focus-within {
    border-color: ${(props) => props.theme.colors.blue[800]};
  }
`

export const StyledInputSearch = styled.input`
  border: 0;
  flex: 1;
  padding: 0.68rem;
  padding-right: 2.2rem;
  border-radius: 0.5rem;

  font-size: 1rem;
  line-height: 1.4rem;
  outline: 0;

  &:focus ~ label {
    transform: translateY(-1.5rem);
    padding: 0 0.25rem;
    font-size: 0.75rem;
  }

  & ~ label {
    ${(props) =>
      Boolean(props.value) &&
      css`
        transform: translateY(-1.5rem);
        padding: 0 0.25rem;
        font-size: 0.75rem;
      `}
  }
`
export const PlaceholderInput = styled.label`
  position: absolute;
  left: 0.5rem;
  line-height: 1.4rem;
  font-weight: 400;
  background-color: #fff;
  transition: all 0.3s;
  pointer-events: none;
`

export const StyledSearchIcon = styled(SearchIcon)`
  width: 1.5rem;
  height: 1.5rem;

  position: absolute;
  right: 0.5rem;
`
