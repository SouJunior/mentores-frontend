import { Eye, EyeOff } from "lucide-react";
import { EyeContainer } from "./style";

export default function EyeComponent({ eye, size, onClick, left, marginTop }) {
  return (
    <EyeContainer type="button" onClick={onClick} left={left} marginTop={marginTop}>
      {" "}
      {eye === false ? <EyeOff size={size} /> : <Eye size={size} />}
    </EyeContainer>
  );
}
