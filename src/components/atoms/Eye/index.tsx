import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { MouseEvent } from 'react'
import { EyeContainer } from './style'

interface EyeProps {
  eye: boolean
  size: number
  onClick: (e: MouseEvent<HTMLElement>) => void
  marginTop?: number
  color?: string
  left?: string
  right?: string
  top?: string
  bottom?: string
}

export function Eye({
  eye,
  size,
  onClick,
  marginTop,
  color,
  right = '1rem',
  top = 'auto',
  left = 'auto',
  bottom = 'auto',
}: EyeProps) {
  return (
    <EyeContainer
      type="button"
      onClick={onClick}
      marginTop={marginTop}
      position={{
        bottom,
        right,
        top,
        left,
      }}
    >
      {' '}
      {eye === false ? (
        <VisibilityOffIcon style={{ color: color }} fontSize={'small'} />
      ) : (
        <VisibilityIcon style={{ color: color }} fontSize={'small'} />
      )}
    </EyeContainer>
  )
}
