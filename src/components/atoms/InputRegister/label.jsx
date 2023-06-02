import { StyledLabelError, StyledLabel } from "./style";

const Label = ({ name, error }) => {
  const LabelComponent = error ? StyledLabelError : StyledLabel;
  return <LabelComponent>{name}</LabelComponent>;
};

export default Label;
