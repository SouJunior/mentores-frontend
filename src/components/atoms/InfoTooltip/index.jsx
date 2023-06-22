import { InfoIcon } from "lucide-react";
import {
  InfoContainer,
  Tooltip,
  TooltipContainer,
  CriteriaList,
  Criterion,
  Title,
  Line
} from "./style";
import { useState } from "react";

export default function InfoTooltip() {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
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
          <Line/>
          <CriteriaList>
            <Criterion>1. Critério 1</Criterion>
            <Criterion>2. Critério 2</Criterion>
            <Criterion>3. Critério 3</Criterion>
            <Criterion>4. Critério 4</Criterion>
          </CriteriaList>
        </TooltipContainer>
      </Tooltip>
    </InfoContainer>
  );
}
