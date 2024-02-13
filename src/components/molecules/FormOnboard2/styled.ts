import { Button } from '@/components/atoms/Button'
import { SelectItem } from '@/components/atoms/Select/SelectItem'
import styled from 'styled-components'

export const Dotted = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  border-radius: 8px;
  border: 2px dashed ${(props) => props.theme.colors.gray[700]};
  background-color: transparent;
  text-align: center;

  section {
    width: 5rem;
    height: 5rem;

    .icon-without-img {
      width: 2rem;
      height: 2rem;
    }
  }
`

export const StyledImportant = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: 400;
  line-height: 1rem;
  color: ${(props) => props.theme.colors.black[200]};
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  max-width: 9.5rem;

  .last {
    color: ${(props) => props.theme.colors.blue[600]};
  }
`

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const StyledInfo = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
  color: ${(props) => props.theme.colors.black[200]};
  max-width: 9.5rem;
`

export const CharactersWarnInput = styled(StyledInfo)`
  max-width: none;
  text-align: right;
`

export const FormContainer = styled.div`
  width: 100%;

  .asterisk {
    color: ${(props) => props.theme.colors.blue[600]};
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .select-trigger {
    padding: 0.75rem 1rem;
  }
`

export const StyledHR = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.gray[700]};
  margin-top: 2.25rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`

export const NextButton = styled(Button)`
  align-self: flex-end;
`

export const BackButton = styled(Button)`
  color: ${(props) => props.theme.colors.gray[700]};
  border-color: ${(props) => props.theme.colors.gray[700]};

  align-self: flex-end;
`

export const SelectInputContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;

  span {
    color: ${(props) => props.theme.colors.black[200]};
    font-size: ${(props) => props.theme.fontSizes.xs};
    line-height: 120%;

    span {
      color: ${(props) => props.theme.colors.blue[700]};
    }
  }
`

export const SelectItemStyled = styled(SelectItem)`
  margin: 0 !important;
`
