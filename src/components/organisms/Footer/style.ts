import { device } from '@/styles/theme';
import Link from 'next/link';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.gray[700]};
  color: ${props => props.theme.colors.white};
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  padding: 4rem 2rem;

  @media ${device.desktopS} {
    padding: 4rem 1rem;
  }

  @media ${device.mobileL} {
    padding: 2rem 1rem;
  }
`;

export const FooterMainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const FooterSitemap = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  column-gap: 5rem;
  row-gap: 2rem;

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

export const FooterTitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FooterLink = styled(Link)`
  font-size: 1rem;
  line-height: 1.4rem;
  font-weight: 400;
`;

export const FooterBtn = styled.button`
  all: unset;
  font-size: 1rem;
  line-height: 1.4rem;
  cursor: pointer;
`;

export const FooterTitle = styled.h6`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
`;

export const FooterSocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media ${device.mobileL} {
    gap: 0.5rem;
    justify-content: center;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const FooterCopyright = styled.p`
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors.gray[200]};

  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 1.25rem;
  text-align: right;

  @media ${device.mobileL} {
    text-align: left;
  }
`;
