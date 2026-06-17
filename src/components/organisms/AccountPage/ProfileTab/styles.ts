import { Modal } from '@/components/atoms/Modal';
import { Form } from 'formik';
import styled from 'styled-components';

export const ProfileContentForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 100%;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 12rem minmax(0, 1fr);
  align-items: center;
  row-gap: 2rem;
  column-gap: 3rem;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
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
  grid-template-columns: repeat(3, minmax(9.5rem, 1fr));
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
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

export const SharedProfileModal = styled(Modal.Content)`
  width: min(32rem, calc(100vw - 2rem));
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;
  padding: 2rem;
  border-radius: 1rem;
  background: ${props => props.theme.colors.white};
`;

export const SharedProfileModalTitle = styled(Modal.Title)`
  color: ${props => props.theme.colors.blue[800]};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
`;

export const SharedProfileModalDescription = styled(Modal.Description)`
  color: ${props => props.theme.colors.gray[700]};
  font-size: 1rem;
  line-height: 1.6;
`;

export const SharedProfileModalActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;
