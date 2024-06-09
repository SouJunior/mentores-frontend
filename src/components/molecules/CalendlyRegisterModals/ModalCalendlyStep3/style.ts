import styled from 'styled-components'

export const InputCalendlyStyled = styled.input`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  border: 1px solid
    ${(props) =>
      props.className?.includes('error')
        ? props.theme.colors.red[500]
        : props.theme.colors.gray[600]};
  border-radius: 8px;
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black[200]};
  padding: 0 1rem;

  transition: 0.3s ease;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.blue[850]};
  }

  &:focus-within {
    border: 1px solid ${(props) => props.theme.colors.blue[850]};
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.blue[850]};
  }

  textarea {
    height: 168px;
  }
`

export const ContainerErrorInputCalendly = styled.span`
  color: ${(props) => props.theme.colors.red[500]};
  font-weight: bold;
  font-size: 0.75rem;
`
