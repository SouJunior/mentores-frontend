import { ErrorMessage, Field } from "formik";
import Label from "./label";
import { ContainerDiv, ContainerError, ContainerInput } from "./style";

export default function InputForm({ name, type, placeholder, label, ...rest }) {
  return (
    <ContainerDiv>
      <Label name={label} />
      <span className="asteristico">*</span>
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
