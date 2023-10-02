import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { MouseEvent } from "react";
import { EyeContainer } from "./style";

interface EyeProps {
  eye: boolean;
  size: number;
  onClick: (e: MouseEvent<HTMLElement>) => void;
  left: number;
  marginTop?: number;
  color?: string;
  paddingTop?: number;
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
      {" "}
      {eye === false ? (
        <VisibilityOffIcon style={{ color: color }} fontSize={'small'} />
      ) : (
        <VisibilityIcon style={{ color: color }} fontSize={'small'} />
      )}
    </EyeContainer>
  );
}
