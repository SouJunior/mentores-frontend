import { cn } from '@/shared/lib/utils';
import { ErrorMessage, Field, FieldAttributes, useFormikContext } from 'formik';
import { CircleAlert } from 'lucide-react';
import { ReactNode } from 'react';

interface InputFormProps extends FieldAttributes<any> {
  name: string;
  type: string;
  placeholder?: string;
  label?: string;
  inputType?: string;
  isRequired?: boolean;
  children?: ReactNode;
  /** Força o estado de erro (ex.: erro vindo do servidor, sem validação local). */
  invalid?: boolean;
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
  invalid = false,
  disabled = false,
  ...rest
}: InputFormProps) {
  const { errors, touched } = useFormikContext<any>();
  // erro de validação do Formik (mostra a mensagem abaixo do campo)
  const fieldError = !!(errors[name] && touched[name]);
  // estado visual de erro: validação local OU erro externo (servidor)
  const hasError = fieldError || invalid;

  return (
    <label className="flex flex-col gap-1 w-full">
      <div
        className={cn(
          'relative flex items-center gap-2 border rounded-lg bg-white text-black-200 px-4 transition-all duration-300',
          'hover:border-blue-850 focus-within:border-blue-850 focus-within:shadow-focus-blue',
          '[&_svg]:w-6 [&_svg]:h-6',
          '[&>svg]:text-gray-700 focus-within:[&>svg]:text-blue-850',
          '[&_input]:flex-1 [&_input]:outline-none [&_input]:h-full [&_input]:w-full [&_input]:py-[0.875rem] [&_input]:text-[0.875rem] [&_input]:leading-[150%] [&_input]:border-0 [&_input]:rounded-lg [&_input]:bg-transparent',
          '[&_textarea]:flex-1 [&_textarea]:outline-none [&_textarea]:w-full [&_textarea]:py-[0.875rem] [&_textarea]:text-[0.875rem] [&_textarea]:leading-[150%] [&_textarea]:border-0 [&_textarea]:rounded-lg [&_textarea]:resize-none [&_textarea]:h-[168px] [&_textarea]:bg-transparent',
          // o placeholder real fica transparente: quem faz o papel dele é o
          // label flutuante (o espaço " " garante o estado :placeholder-shown)
          '[&_input::placeholder]:text-transparent [&_textarea::placeholder]:text-transparent',
          hasError
            ? 'border-red-400 [&>svg]:text-red-400 focus-within:[&>svg]:text-red-400'
            : 'border-gray-600',
          disabled &&
            'text-gray-600 border-gray-200 bg-gray-200 cursor-not-allowed hover:border-gray-200 focus-within:border-gray-200 focus-within:shadow-none'
        )}
      >
        {children}

        <Field
          as={type}
          name={name}
          type={inputType}
          disabled={disabled}
          placeholder={placeholder ?? ' '}
          {...rest}
          className={cn('peer', rest.className)}
        />

        {/* ícone de alerta apenas no erro externo (servidor); na validação
            local mantém-se o texto abaixo do campo e o olho da senha */}
        {invalid && <CircleAlert className="shrink-0" aria-hidden />}

        {label && (
          <span
            className={cn(
              // repouso: dentro do input, sobre o texto
              'pointer-events-none absolute top-1/2 -translate-y-1/2 bg-white px-1 text-[0.875rem] leading-[150%] text-gray-700 transition-all duration-200',
              // sem ícone o texto começa no padding (left-4); com ícone, depois dele (left-12)
              children ? 'left-12' : 'left-4',
              // foco OU preenchido: sobe e ancora na borda superior (inset)
              'peer-focus:left-3 peer-focus:top-0 peer-focus:text-xs',
              'peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs',
              hasError && 'text-red-400',
              disabled && 'text-gray-600 bg-gray-200'
            )}
          >
            {label}
            {/* o asterisco herda a cor do label (cinza / vermelho no erro) */}
            {isRequired && ' *'}
          </span>
        )}
      </div>

      {fieldError && (
        <span className="text-red-400 font-bold text-xs">
          <ErrorMessage name={name} />
        </span>
      )}
    </label>
  );
}
