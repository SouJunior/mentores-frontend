import { ContainerError, ContainerInput } from "./style";
import { ContainerDiv } from "./style";
import { Field, ErrorMessage } from "formik";

export default function InputForm({
  name,
  type,
  placeholder,
}) {
  return (
    <ContainerDiv>
      <ContainerInput>
        <Field as="input" name={name} type={type} placeholder={placeholder} />
      </ContainerInput>
      <ContainerError>
        <ErrorMessage name={name} component="div" className="error-message" />
      </ContainerError>
    </ContainerDiv>
  );
}
