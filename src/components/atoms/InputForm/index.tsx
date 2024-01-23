import { ErrorMessage, useFormikContext } from 'formik'
import {
  ContainerInputLabel,
  ContainerError,
  ContainerInput,
  Field,
  StyledLabel,
} from './style'

interface InputFormProps {
  name: string
  type: string
  placeholder: string
  label: string
  inputType?: string
  isRequired?: boolean
}

export function InputForm({
  name,
  type,
  placeholder,
  label,
  inputType,
  isRequired = true,
  ...rest
}: InputFormProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { errors } = useFormikContext<any>()

  return (
    <ContainerInputLabel>
      <StyledLabel>
        {label} {isRequired && <span className="asterisk">*</span>}
      </StyledLabel>
      <ContainerInput className={errors[name] && 'error'}>
        <Field
          as={type}
          name={name}
          type={inputType}
          placeholder={placeholder}
          {...rest}
        />
      </ContainerInput>
      {errors[name] && (
        <ContainerError>
          <ErrorMessage name={name} className="error-message" />
        </ContainerError>
      )}
    </ContainerInputLabel>
  )
}
