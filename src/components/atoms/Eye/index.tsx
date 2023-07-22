import { Eye as EyeIcon, EyeOff } from "lucide-react";
import { MouseEvent } from "react";
import { EyeContainer } from "./style";

interface EyeProps {
  eye: boolean;
  size: number;
  onClick: (e: MouseEvent<HTMLElement>) => void;
  left: number;
  marginTop: number;
  color?: string;
}

export function Eye({ eye, size, onClick, left, marginTop, color }: EyeProps) {
  return (
    <EyeContainer
      type="button"
      onClick={onClick}
      left={left}
      marginTop={marginTop}
    >
      {" "}
      {eye === false ? (
        <EyeOff {...(color && { color: color })} size={size} />
      ) : (
        <EyeIcon {...(color && { color: color })} size={size} />
      )}
    </EyeContainer>
  );
}
