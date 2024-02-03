import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  max-width: 19.5rem;
  height: 18.5rem;
  padding: 1.5rem 1rem;

  border-radius: 0.5rem;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 348px) {
    max-width: 17.5rem;
  }
`

export const HeaderCardDepo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-self: flex-start;
  gap: 1rem;
`

export const TestimonyInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .testimony-name {
    color: ${(props) => props.theme.colors.gray[700]};
    font-weight: 600;
    line-height: 1.4rem;
  }

  .testimony-role {
    color: ${(props) => props.theme.colors.gray[600]};
    line-height: 1.4rem;

    display: block;
    max-width: 10rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`

export const TestimonyImageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.gray[250]};
  border-radius: 50%;
  overflow: hidden;

  width: 4rem;
  height: 4rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const TestimonyDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: ${(props) => props.theme.fontSizes.xs};
  line-height: 1.5rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.gray[750]};
`
