import { Eye, EyeOff } from "lucide-react";
import { EyeContainer } from "./style";

export default function EyeComponent({ eye, size, onClick }) {
  return (
    <EyeContainer type="button" onClick={onClick}>
      {eye === false ? <EyeOff size={size} /> : <Eye size={size} />}
    </EyeContainer>
   );
}
