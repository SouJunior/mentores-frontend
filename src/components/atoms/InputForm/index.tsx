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
  const { errors, touched } = useFormikContext<any>()

  return (
    <ContainerInputLabel>
      <StyledLabel>
        {label} {isRequired && <span className="asterisk">*</span>}
      </StyledLabel>
      <ContainerInput className={errors[name] && touched[name] ? 'error' : ''}>
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
