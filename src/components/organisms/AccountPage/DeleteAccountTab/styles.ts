import { Eye } from '@/components/atoms/Eye';
import { Select } from '@/components/atoms/Select';
import { SelectItem } from '@/components/atoms/Select/SelectItem';
import { ModalCancelKeepRoute } from '@/components/molecules/ModalCancelKeepRoute';
import { Form } from 'formik';
import styled from 'styled-components';

export const Disclaimer = styled.p`
  color: ${props => props.theme.colors.gray[700]};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4rem;
  padding: 0.5rem 0;
`;

export const DeleteAccountContentForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 36rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 36rem;
`;

export const FieldLabel = styled.label`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4rem;

  span {
    color: ${props => props.theme.colors.blue[700]};
  }
`;

export const DropdownWrapper = styled.label`
  display: flex;

  .select-trigger {
    color: ${props => props.theme.colors.black[200]};
    font-size: 1rem;
    line-height: 1.4rem;
    padding: 0.625rem 1rem;
  }
`;

export const DropdownStyled = styled(Select)`
  padding: 0.625rem 1rem;
`;

export const DropdownItemStyled = styled(SelectItem)`
  margin: 0;
`;

export const InputWrapper = styled.div<{
  $flexDirection?: string;
  $justifyContent?: string;
  $alignItems?: string;
  $gap?: number;
  $relative?: boolean;
}>`
  display: ${props => (props.className?.includes('hidden') ? 'none' : 'flex')};
  align-items: ${props => props.$alignItems || 'start'};
  flex-direction: ${props => props.$flexDirection || 'row'};
  gap: ${props => props.$gap || 0}rem;
  justify-content: ${props => props.$justifyContent || 'center'};
  position: ${props => (props.$relative ? 'relative' : '')};
`;

export const RadioButtonWrapper = styled.div<{
  $flexDirection?: string;
  $alignItems?: string;
  $gap?: number;
}>`
  display: flex;
  align-items: ${props => props.$alignItems || 'start'};
  flex-direction: ${props => props.$flexDirection || 'row'};
  gap: ${props => props.$gap || 0.5}rem;
`;

export const RadioButtonLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.05rem;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
`;

export const CharactersLegend = styled.p`
  color: ${props =>
    props.className?.includes('error')
      ? props.theme.colors.red[400]
      : props.theme.colors.black[200]};
  font-size: 0.875rem;
  line-height: 1.05rem;
  margin-top: 0.25rem;
`;

export const EyeStyled = styled(Eye)`
  position: absolute;
  right: 10px;
  top: 19px;

  svg {
    height: 24px;
    width: 24px;
  }
`;

export const PasswordLabel = styled.span`
  font-size: 0.75rem;
  margin-top: 0.5rem;
`;

export const ModalCancelStyled = styled(ModalCancelKeepRoute)`
  h2 {
    color: ${props => props.theme.colors.black[200]};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  p {
    color: ${props => props.theme.colors.black[200]};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.05rem;
    margin-bottom: 1rem;
  }
`;

export const ErrorLegend = styled.p`
  color: ${props =>
    props.className?.includes('error')
      ? props.theme.colors.red[400]
      : props.theme.colors.black[200]};
  font-size: 0.75rem;
  line-height: 1.05rem;
  margin-top: 0.25rem;
  font-weight: bold;
`;
