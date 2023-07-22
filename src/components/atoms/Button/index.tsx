import { ReactNode } from "react";
import {
  ButtonDefault,
  ButtonForm,
  ButtonFormVariant,
  ButtonModal,
  ButtonModalSecondary,
  ButtonUnstyled,
  ButtonVariant,
} from "./style";

import Link from "next/link";

interface ButtonProps {
  content: ReactNode;
  btnRole?:
    | "primary"
    | "secondary"
    | "unstyled"
    | "modal-secondary"
    | "modal-default"
    | "form"
    | "form-secondary";
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  content,
  btnRole = "primary",
  disabled = false,
  onClick,
}: ButtonProps) {
  if (btnRole === "primary") return <ButtonDefault>{content}</ButtonDefault>;

  if (btnRole === "secondary")
    return <ButtonVariant type="button">{content}</ButtonVariant>;

  if (btnRole === "unstyled")
    return (
      <ButtonUnstyled onClick={onClick} type="button">
        {content}
      </ButtonUnstyled>
    );

  if (btnRole === "modal-secondary")
    return (
      <ButtonModalSecondary onClick={onClick} type="button">
        {content}
      </ButtonModalSecondary>
    );

  if (btnRole === "modal-default")
    return (
      <Link href={"/"}>
        <ButtonModal type="button">{content}</ButtonModal>
      </Link>
    );

  if (btnRole === "form-secondary")
    return (
      <ButtonFormVariant onClick={onClick} type="button">
        {content}
      </ButtonFormVariant>
    );

  if (btnRole === "form")
    return (
      <ButtonForm type="submit" disabled={disabled}>
        {content}
      </ButtonForm>
    );

  return <></>;
}
