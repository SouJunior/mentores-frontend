import { InputRadio } from "./style";

export default function RadioAgree({ onChange, checked }) {
  return (
    <>
      <InputRadio checked={checked} onChange={onChange} type="radio" />
    </>
  );
}
