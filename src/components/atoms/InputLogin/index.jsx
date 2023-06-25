import {
  ContainerInput,
  Label,
  LabelError,
  ContainerInputError,
  InputError,
} from "./style";
import EyeComponent from "../EyeComponent";
import { User2Icon, Lock } from "lucide-react";
import { useState } from "react";

export default function Input({
  type,
  value,
  error,
  setValue,
  placeholder,
  label,
  id,
}) {
  const [eye, setEye] = useState(true);
  const [show, setShow] = useState(true);

  function toggleShow(e) {
    e.preventDefault();
    setEye(!eye);
    setShow(!show);
  }

  if (error !== "") {
    return (
      <>
        <LabelError htmlFor={id}>{label}</LabelError>
        <ContainerInputError>
          {type === "email" ? (
            <User2Icon className="icon" />
          ) : (
            <Lock className="icon" />
          )}
          <InputError
            id={id}
            type={show === false ? "text" : type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {type === "password" && (
            <EyeComponent
              left="380px"
              eye={eye}
              onClick={(e) => toggleShow(e)}
              size={20}
              marginTop="10px"
            />
          )}
        </ContainerInputError>
      </>
    );
  } else {
    return (
      <>
        <Label htmlFor={id}>{label}</Label>
        <ContainerInput>
          {type === "email" ? (
            <User2Icon className="icon" />
          ) : (
            <Lock className="icon" />
          )}

          <input
            id={id}
            type={show === false ? "text" : type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {type === "password" && (
            <EyeComponent
              left="380px"
              eye={eye}
              onClick={(e) => toggleShow(e)}
              size={20}
              marginTop="10px"
              color={'#046AD0'}
            />
          )}
        </ContainerInput>
      </>
    );
  }
}
