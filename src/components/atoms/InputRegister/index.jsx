import { ContainerError, ContainerInput } from "./style";
import { ContainerDiv } from "./style";

export default function InputForm({
    name,
  type,
  value,
  placeholder,
  onChange,
  error,
}) {
  return (
    <ContainerDiv>
      <ContainerInput>
        <input
        name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        ></input>
      </ContainerInput>
      <ContainerError>
        {error && <p className="error-message">{error}</p>}
      </ContainerError>
    </ContainerDiv>
  );
}
