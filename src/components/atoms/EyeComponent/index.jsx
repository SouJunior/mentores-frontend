import { Eye, EyeOff } from "lucide-react";
import { EyeContainer } from "./style";

export default function EyeComponent({ eye, size, onClick, left, marginTop, color }) {
  return (
    <EyeContainer type="button"  onClick={onClick} left={left} marginTop={marginTop}>
      {" "}
      {eye === false ? <EyeOff color={color} size={size} /> : <Eye color={color} size={size} />}
    </EyeContainer>
  );
}
