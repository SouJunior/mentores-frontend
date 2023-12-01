import { StyledLabel, StyledLabelError } from './style'

interface LabelProps {
  name: string
  isError?: boolean
}

export const Label = ({ name, isError = false }: LabelProps) => {
  const LabelComponent = isError ? StyledLabelError : StyledLabel
  return <LabelComponent>{name}</LabelComponent>
}
