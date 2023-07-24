import { ContainerTitle } from "./style";

interface PersonTitleProps {
  text: string;
}

export function PersonTitle({ text }: PersonTitleProps) {
  return (
    <ContainerTitle>
      <h2>{text}</h2>
    </ContainerTitle>
  );
}
