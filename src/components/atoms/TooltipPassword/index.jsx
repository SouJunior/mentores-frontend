import { InfoIcon } from "lucide-react";
import {
  InfoContainer,
  Tooltip,
  TooltipContainer,
  CriteriaList,
  Criterion,
  Title,
  Line,
} from "./style";
import { useState } from "react";

export default function InfoTooltip() {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setTooltipVisible(false);
    }, 2000);
  };
  return (
    <InfoContainer>
      <InfoIcon
        size={16}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <Tooltip visible={tooltipVisible}>
        <TooltipContainer>
          <Title>Regras do Password</Title>
          <Line />
          <CriteriaList>
            <Criterion>Máximo 8 caracteres.</Criterion>
            <Criterion>Pelo menos uma letra maiúsculo.</Criterion>
            <Criterion>Pelo menos um número.</Criterion>
            <Criterion>Pelo menos um caractere especial (ex: @#$)</Criterion>
          </CriteriaList>
        </TooltipContainer>
      </Tooltip>
    </InfoContainer>
  );
}
