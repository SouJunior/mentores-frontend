import { Modal } from '@/components/atoms/Modal';
import styled from 'styled-components';

export const ContainerModal = styled(Modal.Content)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100%;
  max-width: 25rem;

  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  gap: 1.5rem;

  padding: 0 3.5rem;
  padding-top: 1.75rem;
`;

export const HeaderModal = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 17.8125rem;
    height: 17.375rem;

    margin-top: -0.5rem;
    margin-bottom: -1.3rem;
  }
`;

export const TitleModal = styled(Modal.Title)`
  color: ${props => props.theme.colors.blue[500]};
  font-size: ${props => props.theme.fontSizes.lg};
`;

export const Message = styled(Modal.Description)`
  color: ${props => props.theme.colors.gray[700]};
  font-size: 1rem;
  text-align: center;
  line-height: 150%;
  max-width: 15.5rem;
`;

export const Hash = styled.span`
  color: ${props => props.theme.colors.blue[500]};
  font-size: 0.875rem;
  line-height: 150%;
`;

export const FooterModal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.3rem;
  padding-bottom: 1.2rem;

  img {
    width: 6.75rem;
    height: 1rem;
  }
`;
