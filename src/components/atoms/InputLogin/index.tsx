import { Lock, User2Icon } from "lucide-react";
import { MouseEvent, useState } from "react";
import { Eye } from "../Eye";
import {
  ContainerInput,
  ContainerInputError,
  InputError,
  Label,
  LabelError,
} from "./style";

interface InputProps {
  type: string;
  value: string;
  error: string;
  setValue: (e: string) => void;
  placeholder: string;
  label: string;
  id: string;
}

export function InputLogin({
  type,
  value,
  error,
  setValue,
  placeholder,
  label,
  id,
}: InputProps) {
  const [eye, setEye] = useState(true);
  const [show, setShow] = useState(true);

  function toggleShow(e: MouseEvent<HTMLElement>) {
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
            <Eye
              left={380}
              eye={eye}
              onClick={(e) => toggleShow(e)}
              size={20}
              marginTop={10}
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
            <Eye
              left={380}
              eye={eye}
              onClick={(e) => toggleShow(e)}
              size={20}
              marginTop={10}
              color="#046AD0"
            />
          )}
        </ContainerInput>
      </>
    );
  }
}
