import { InputForm } from '@/components/atoms/InputForm'
import { Eye } from '@/components/atoms/Eye'
import { InfoTooltip } from '@/components/atoms/InfoTooltip'
import { WrapperInput } from './styles'
import { useState } from 'react'

export function FormFields() {
  const [isPassword, setIsPassword] = useState({
    current: false,
    new: false,
    confirmNew: false,
  })

  function handlePasswordVisible(pressed: boolean, name: string) {
    setIsPassword((state) => ({ ...state, [name]: pressed }))
  }

  return (
    <>
      <WrapperInput className="new-password-field">
        <InfoTooltip right={0} />

        <InputForm
          type="input"
          inputType={isPassword.current ? 'text' : 'password'}
          name="password"
          placeholder="*******"
          isRequired
          label="Senha atual:"
        />

        <Eye
          aria-label="Mostrar senha"
          pressed={isPassword.current}
          onPressedChange={(pressed) =>
            handlePasswordVisible(pressed, 'current')
          }
        />
      </WrapperInput>

      <WrapperInput>
        <InputForm
          type="input"
          inputType={isPassword.new ? 'text' : 'password'}
          name="newPassword"
          placeholder="*******"
          isRequired
          label="Nova senha:"
        />

        <Eye
          aria-label="Mostrar senha"
          pressed={isPassword.new}
          onPressedChange={(pressed) => handlePasswordVisible(pressed, 'new')}
        />
      </WrapperInput>

      <WrapperInput>
        <InputForm
          type="input"
          inputType={isPassword.confirmNew ? 'text' : 'password'}
          name="confirmNewPassword"
          placeholder="*******"
          isRequired
          label="Confirmar nova senha:"
        />

        <Eye
          aria-label="Mostrar confirmação da senha"
          pressed={isPassword.confirmNew}
          onPressedChange={(pressed) =>
            handlePasswordVisible(pressed, 'confirmNew')
          }
        />
      </WrapperInput>
    </>
  )
}
