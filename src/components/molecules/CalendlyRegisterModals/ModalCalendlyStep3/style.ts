import { Button } from '@/components/atoms/Button';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import styled, { css } from 'styled-components';

export const ContainerInput = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputCalendlyStyled = styled.input`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  border: 1px solid
    ${props =>
      props.className?.includes('error')
        ? props.theme.colors.red[500]
        : props.theme.colors.gray[600]};
  border-radius: 8px;
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black[200]};

  &:focus {
    border: 1px solid
      ${props =>
        props.className?.includes('error')
          ? props.theme.colors.red[500]
          : props.theme.colors.blue[850]};

    box-shadow: 0 0 0 1px
      ${props =>
        props.className?.includes('error')
          ? props.theme.colors.red[500]
          : props.theme.colors.blue[850]};
  }

  flex: 1;
  outline: none;
  resize: none;

  height: 100%;
  width: 100%;

  padding: 0.875rem 0.875rem 0.875rem
    ${props => (props.className?.includes('error') ? `2.3rem` : `0.875rem`)};

  font-size: 1rem;
  line-height: 150%;

  &::placeholder {
    color: ${props => props.theme.colors.gray[250]};
  }

  &:focus ~ label {
    transform: translateY(-1.5rem);
    padding: 0 0.25rem;
    font-size: 0.75rem;
  }

  & ~ label {
    ${props =>
      Boolean(props.value) &&
      css`
        transform: translateY(-1.5rem);
        padding: 0 0.25rem;
        font-size: 0.75rem;
      `}
  }
`;
export const PlaceholderInput = styled.label`
  position: absolute;
  left: 0.5rem;
  line-height: 1.4rem;
  font-weight: 400;
  background-color: #fff;
  transition: all 0.3s;
  pointer-events: none;
  padding-left: 12px;
`;

export const ContainerErrorInputCalendly = styled.span`
  display: block;
  color: ${props => props.theme.colors.red[500]};
  font-weight: bold;
  font-size: 0.75rem;
  text-align: center;
  padding: 1rem 0;
`;

export const StyledErrorOutlineIcon = styled(ErrorOutlineIcon)`
  width: 1.5rem;
  height: 1.5rem;

  position: absolute;
  left: 0.5rem;
`;
export const ButtonLoading = styled(Button)`
  height: 45px;
  padding: 0;
  width: 7rem;

  &:disabled {
    cursor: wait;
    background-color: ${props => props.theme.colors.blue[800]};
    border-color: ${props => props.theme.colors.blue[800]};
  }
`;
