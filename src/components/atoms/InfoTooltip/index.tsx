import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useState } from 'react';
import {
  CriteriaList,
  Criterion,
  InfoContainer,
  Line,
  Title,
  Tooltip,
} from './style';

interface ToolTipProps {
  right?: number;
}

export function InfoTooltip({ right }: ToolTipProps) {
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
    <InfoContainer right={right}>
      <InfoOutlinedIcon
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <Tooltip isVisible={tooltipVisible}>
        <Title>Sua senha deve conter:</Title>
        <CriteriaList>
          <Line aria-hidden />
          <Criterion>Mínimo 8 caracteres.</Criterion>
          <Criterion>Pelo menos uma letra maiúscula.</Criterion>
          <Criterion>Pelo menos um número.</Criterion>
          <Criterion>Pelo menos um caractere especial (ex: @#$)</Criterion>
        </CriteriaList>
      </Tooltip>
    </InfoContainer>
  );
}
