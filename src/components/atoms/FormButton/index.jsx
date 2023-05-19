import { ContainerButton, SecondaryBtn } from "./style";

export default function FormButton({ type, value, role }) {
  if (role === "primary")
    return (
      <ContainerButton>
        <button type={type}>{value}</button>
      </ContainerButton>
    );

  if (role === "secondary")
    return (
      <SecondaryBtn>
        <button type={type}>{value}</button>
      </SecondaryBtn>
    );
}
