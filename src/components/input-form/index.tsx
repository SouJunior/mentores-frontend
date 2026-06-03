import { ErrorMessage, Field, FieldAttributes, useFormikContext } from 'formik';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface InputFormProps extends FieldAttributes<any> {
  name: string;
  type: string;
  placeholder?: string;
  label?: string;
  inputType?: string;
  isRequired?: boolean;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
}

export function InputForm({
  name,
  type,
  placeholder,
  label,
  inputType,
  isRequired = true,
  children,
  disabled = false,
  ...rest
}: InputFormProps) {
  const { errors, touched } = useFormikContext<any>();
  const hasError = !!(errors[name] && touched[name]);

  return (
    <label className="flex flex-col gap-2 w-full">
      <span
        className={cn(
          'text-[0.875rem] leading-[150%] text-[#666666]',
          disabled && 'text-[#ACACAC]'
        )}
      >
        {label}{' '}
        {isRequired && (
          <span className={cn('text-[#338AFF]', disabled && 'text-[#ACACAC]')}>
            *
          </span>
        )}
      </span>
      <div
        className={cn(
          'flex items-center gap-2 border rounded-lg bg-white text-[#323232] px-4 transition-all duration-300',
          'hover:border-[#002C66] focus-within:border-[#002C66] focus-within:shadow-[0_0_0_1px_#002C66]',
          '[&_svg]:w-6 [&_svg]:h-6 [&_svg]:text-[#666666]',
          '[&_input]:flex-1 [&_input]:outline-none [&_input]:h-full [&_input]:w-full [&_input]:py-[0.875rem] [&_input]:text-[0.875rem] [&_input]:leading-[150%] [&_input]:border-0 [&_input]:rounded-lg',
          '[&_textarea]:flex-1 [&_textarea]:outline-none [&_textarea]:w-full [&_textarea]:py-[0.875rem] [&_textarea]:text-[0.875rem] [&_textarea]:leading-[150%] [&_textarea]:border-0 [&_textarea]:rounded-lg [&_textarea]:resize-none [&_textarea]:h-[168px]',
          '[&_input::placeholder]:text-[#D9D9D9] [&_textarea::placeholder]:text-[#D9D9D9]',
          hasError ? 'border-[#E94242]' : 'border-[#ACACAC]',
          disabled &&
            'text-[#ACACAC] border-[#DEDEDE] bg-[#DEDEDE] cursor-not-allowed hover:border-[#DEDEDE] focus-within:border-[#DEDEDE] focus-within:shadow-none'
        )}
      >
        {children}
        <Field
          as={type}
          name={name}
          type={inputType}
          placeholder={placeholder}
          disabled={disabled}
          {...rest}
        />
      </div>
      {hasError && (
        <span className="text-[#E94242] font-bold text-xs">
          <ErrorMessage name={name} />
        </span>
      )}
    </label>
  );
}
