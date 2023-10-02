// import { Eye as EyeIcon, EyeOff } from "lucide-react";
import { MouseEvent } from "react";
import { EyeContainer } from "./style";

interface EyeProps {
  eye: boolean;
  size: number;
  onClick: (e: MouseEvent<HTMLElement>) => void;
  left: number;
  marginTop?: number;
  color?: string;
  paddingTop?:number;
}

export function Eye({ eye, size, onClick, left, marginTop, color, paddingTop }: EyeProps) {
  return (
    <EyeContainer
      type="button"
      onClick={onClick}
      left={left}
      marginTop={marginTop}
      paddingTop={paddingTop}
    >
      {/* {" "}
      {eye === false ? (
        <EyeOff {...(color && { color: color })} size={size} />
      ) : (
        <EyeIcon {...(color && { color: color })} size={size} />
      )} */}
    </EyeContainer>
  );
}
