import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { EyeContainer } from './style'
import { ToggleProps } from '@radix-ui/react-toggle'

type EyeProps = ToggleProps

export function Eye({ pressed, ...props }: EyeProps) {
  return (
    <EyeContainer {...props} pressed={pressed} type="button">
      {pressed ? (
        <VisibilityOffIcon fontSize={'small'} />
      ) : (
        <VisibilityIcon fontSize={'small'} />
      )}
    </EyeContainer>
  )
}
