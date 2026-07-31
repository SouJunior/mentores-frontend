'use client';

import { Eye } from '@/shared/components/eye';
import { InputForm } from '@/shared/components/input-form';
import { useState } from 'react';

interface InputPasswordProps {
  name: string;
  label?: string;
  invalid?: boolean;
  isRequired?: boolean;
  disabled?: boolean;
}

export function InputPassword({
  name,
  label = 'Senha',
  invalid = false,
  isRequired,
  disabled,
}: InputPasswordProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative [&_.eye-visibility]:right-4 [&_.eye-visibility]:top-1/2 [&_.eye-visibility]:-translate-y-1/2 [&_.eye-visibility_svg]:text-black-200 [&_input]:pr-8">
      <InputForm
        type="input"
        name={name}
        label={label}
        inputType={isVisible ? 'text' : 'password'}
        invalid={invalid}
        isRequired={isRequired}
        disabled={disabled}
      />
      {!invalid && (
        <Eye
          aria-label={isVisible ? 'Ocultar senha' : 'Mostrar senha'}
          pressed={isVisible}
          onPressedChange={setIsVisible}
          className="eye-visibility"
        />
      )}
    </div>
  );
}
