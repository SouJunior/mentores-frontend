import { CheckboxContainer } from './style'

interface CheckboxProps {
  id?: string
  text?: string
  isChecked: boolean
  setValue: (e: boolean) => void
}

export function Checkbox({ id, text, isChecked, setValue }: CheckboxProps) {
  return (
    <CheckboxContainer>
      <input
        type="checkbox"
        {...(id && { id })}
        onChange={(e) => setValue(e.target.checked)}
        checked={isChecked}
      />
      {text && <label htmlFor={id}>{text}</label>}
    </CheckboxContainer>
  )
}
