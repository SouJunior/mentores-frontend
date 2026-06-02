import { device } from '@/styles/theme';
import styled from 'styled-components';

const BaseItemStyles = styled.div`
  height: 5.5rem;
  width: 5.5rem;
  border-radius: 24px;

  @media ${device.mobileL} {
    width: 3rem;
    height: 3rem;
    border-radius: 12px;
  }
`;

export const ItemInvisible = styled(BaseItemStyles)`
  display: none;
`;

export const ItemPrimary = styled(BaseItemStyles)`
  background-color: ${props => props.theme.colors.blue[800]};
  border: 4px solid ${props => props.theme.colors.blue[800]};
`;

export const ItemSecondary = styled(BaseItemStyles)`
  border: 4px solid ${props => props.theme.colors.blue[800]};
  background-color: transparent;
`;

export const ItemImage = styled(BaseItemStyles)`
  border: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
