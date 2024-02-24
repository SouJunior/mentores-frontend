import { SpinnerStyles } from './styles'
import { ComponentProps } from 'react'

interface SpinnerProps extends ComponentProps<'span'> {
  as?: string
}

export function Spinner(props: SpinnerProps) {
  return <SpinnerStyles {...props} />
}
