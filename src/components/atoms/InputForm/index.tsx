import { ErrorMessage } from "formik";
import { Label } from "./label";
import { ContainerDiv, ContainerError, ContainerInput, Field } from "./style";

interface InputFormProps {
  name: string;
  type: string;
  placeholder: string;
  label: string;
  showAsterisk?: boolean;
}

export function InputForm({
  name,
  type,
  placeholder,
  label,
  showAsterisk = true,
  ...rest
}: InputFormProps) {
  return (
    <ContainerDiv>
      <Label name={label} />
      {showAsterisk && <span className="asterisk">*</span>}
      <ContainerInput>
        <Field
          as="input"
          name={name}
          type={type}
          placeholder={placeholder}
          {...rest}
        />
      </ContainerInput>
      <ContainerError>
        <ErrorMessage name={name} component="div" className="error-message" />
      </ContainerError>
    </ContainerDiv>
  );
}
