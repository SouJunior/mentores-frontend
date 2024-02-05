import { ErrorMessage, Field, FieldAttributes, useFormikContext } from 'formik'
import {
  ContainerInputLabel,
  ContainerError,
  ContainerInput,
  StyledLabel,
} from './style'
import { ReactNode } from 'react'

interface InputFormProps extends FieldAttributes<any> {
  name: string
  type: string
  placeholder?: string
  label: string
  inputType?: string
  isRequired?: boolean
  children?: ReactNode
  className?: string
}

export function InputForm({
  name,
  type,
  placeholder,
  label,
  inputType,
  isRequired = true,
  children,
  ...rest
}: InputFormProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { errors, touched } = useFormikContext<any>()

  return (
    <ContainerInputLabel>
      <StyledLabel>
        {label} {isRequired && <span className="asterisk">*</span>}
      </StyledLabel>
      <ContainerInput className={errors[name] && touched[name] ? 'error' : ''}>
        {children}
        <Field
          as={type}
          name={name}
          type={inputType}
          placeholder={placeholder}
          {...rest}
        />
      </ContainerInput>
      {errors[name] && touched[name] && (
        <ContainerError>
          <ErrorMessage name={name} className="error-message" />
        </ContainerError>
      )}
    </ContainerInputLabel>
  )
}
