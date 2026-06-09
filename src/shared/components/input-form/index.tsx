import { cn } from '@/shared/lib/utils';
import { ErrorMessage, Field, FieldAttributes, useFormikContext } from 'formik';
import { ReactNode } from 'react';

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
          'text-[0.875rem] leading-[150%] text-gray-700',
          disabled && 'text-gray-600'
        )}
      >
        {label}{' '}
        {isRequired && (
          <span className={cn('text-blue-700', disabled && 'text-gray-600')}>
            *
          </span>
        )}
      </span>
      <div
        className={cn(
          'flex items-center gap-2 border rounded-lg bg-white text-black-200 px-4 transition-all duration-300',
          'hover:border-blue-850 focus-within:border-blue-850 focus-within:shadow-focus-blue',
          '[&_svg]:w-6 [&_svg]:h-6 [&_svg]:text-gray-700',
          '[&_input]:flex-1 [&_input]:outline-none [&_input]:h-full [&_input]:w-full [&_input]:py-[0.875rem] [&_input]:text-[0.875rem] [&_input]:leading-[150%] [&_input]:border-0 [&_input]:rounded-lg',
          '[&_textarea]:flex-1 [&_textarea]:outline-none [&_textarea]:w-full [&_textarea]:py-[0.875rem] [&_textarea]:text-[0.875rem] [&_textarea]:leading-[150%] [&_textarea]:border-0 [&_textarea]:rounded-lg [&_textarea]:resize-none [&_textarea]:h-[168px]',
          '[&_input::placeholder]:text-gray-250 [&_textarea::placeholder]:text-gray-250',
          hasError ? 'border-red-400' : 'border-gray-600',
          disabled &&
            'text-gray-600 border-gray-200 bg-gray-200 cursor-not-allowed hover:border-gray-200 focus-within:border-gray-200 focus-within:shadow-none'
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
        <span className="text-red-400 font-bold text-xs">
          <ErrorMessage name={name} />
        </span>
      )}
    </label>
  );
}
