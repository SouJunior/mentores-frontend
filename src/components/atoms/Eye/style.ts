import * as Toggle from '@radix-ui/react-toggle';
import styled from 'styled-components';

export const EyeContainer = styled(Toggle.Root)`
  all: unset;
  position: absolute;
  outline: none;
  padding: 0;
  z-index: 1;
  line-height: 0;
  cursor: pointer;
  color: ${props => props.theme.colors.gray[700]};

  &:focus-visible {
    box-shadow: 0 0 0 2px ${props => props.theme.colors.blue[400]};
  }
`;
