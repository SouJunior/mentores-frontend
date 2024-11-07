import { Modal } from '@/components/atoms/Modal';
import { Form } from 'formik';
import styled from 'styled-components';

export const ProfileContentForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 42.75rem;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 8rem 1fr;
  align-items: center;
  row-gap: 3rem;
  column-gap: 4rem;
`;

export const ButtonEditPhoto = styled(Modal.Control)`
  border-radius: 50%;
  border: 0;
  background-color: transparent;
  position: relative;
  overflow: hidden;

  &:hover::after {
    content: '';
    background-color: ${props => props.theme.colors.white};
    opacity: 0.7;

    position: absolute;
    inset: 0;
  }

  svg.camera-icon {
    display: none;
    color: ${props => props.theme.colors.gray[700]};
    width: 2.5rem;
    height: 2.5rem;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  &:hover svg.camera-icon {
    display: block;
  }
`;

export const SectionLegend = styled.p`
  font-size: 0.875rem;
  line-height: 1rem;

  span {
    color: ${props => props.theme.colors.blue[700]};
  }
`;
export const CharacterSectionLegend = styled.p`
  font-size: 0.875rem;
  line-height: 1rem;

  color: ${props =>
    props.className?.includes('error')
      ? props.theme.colors.red[500]
      : props.theme.colors.black[200]};
`;

export const GridSpecialties = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 9.5rem);
  gap: 1rem;
  margin-top: 1rem;
`;

interface SpecialtyItemProps {
  selected?: boolean;
}

export const SpecialtyItem = styled.div<SpecialtyItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;

  padding: 0.5rem 0.75rem;
  height: 2.2rem;
  border-radius: 50px;

  background-color: ${props =>
    props.selected ? props.theme.colors.blue[600] : '#CBCBCB'};
  color: ${props =>
    props.selected ? props.theme.colors.white : props.theme.colors.gray[700]};

  text-align: center;
  cursor: pointer;

  svg {
    display: ${props => (props.selected ? 'block' : 'none')};
  }
`;

export const SelectedSpecialtyCount = styled.span`
  color: ${props => props.theme.colors.black[200]};
  line-height: 1.2rem;

  strong {
    font-weight: 600;
  }
`;
export const DescriptionContainer = styled.section`
  label {
    & span:first-child {
      color: ${props => props.theme.colors.black[200]};

      .asterisk {
        color: ${props => props.theme.colors.blue[700]};
      }
    }
  }

  p {
    text-align: right;
    margin-top: 0.5rem;
  }
`;
