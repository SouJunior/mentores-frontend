import { Eye } from '@/shared/components/eye';
import { InfoTooltip } from '@/shared/components/info-tooltip';
import { InputForm } from '@/shared/components/input-form';
import { useState } from 'react';

export function FormFields() {
  const [isPassword, setIsPassword] = useState({
    current: false,
    new: false,
    confirmNew: false,
  });

  function handlePasswordVisible(pressed: boolean, name: string) {
    setIsPassword(state => ({ ...state, [name]: pressed }));
  }

  return (
    <>
      <div className="relative [&_label_span:first-child]:text-[#323232] [&_label_span:first-child_.asterisk]:text-[#338AFF] [&_label_input]:text-base [&_label_input]:pr-8 [&_button]:right-4 [&_button]:top-10 [&_button_svg]:w-6 [&_button_svg]:h-6">
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
          onPressedChange={pressed => handlePasswordVisible(pressed, 'current')}
        />
      </div>

      <div className="relative [&_label_span:first-child]:text-[#323232] [&_label_span:first-child_.asterisk]:text-[#338AFF] [&_label_input]:text-base [&_label_input]:pr-8 [&_button]:right-4 [&_button]:top-10 [&_button_svg]:w-6 [&_button_svg]:h-6">
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
          onPressedChange={pressed => handlePasswordVisible(pressed, 'new')}
        />
      </div>

      <div className="relative [&_label_span:first-child]:text-[#323232] [&_label_span:first-child_.asterisk]:text-[#338AFF] [&_label_input]:text-base [&_label_input]:pr-8 [&_button]:right-4 [&_button]:top-10 [&_button_svg]:w-6 [&_button_svg]:h-6">
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
          onPressedChange={pressed =>
            handlePasswordVisible(pressed, 'confirmNew')
          }
        />
      </div>
    </>
  );
}
