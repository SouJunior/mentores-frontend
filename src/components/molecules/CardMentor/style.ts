import styled from 'styled-components'

export const CardImage = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  overflow: hidden;
  align-self: center;
  background-color: ${(props) => props.theme.colors.gray[250]};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CardTitle = styled.p`
  display: flex;
  flex-direction: column;

  font-weight: 500;
  font-size: 1.25rem;
  line-height: 120%;
  color: ${(props) => props.theme.colors.black[200]};
`

export const CardSubtitle = styled.p`
  font-family: 'Radio Canada';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  color: ${(props) => props.theme.colors.gray[700]};

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 3rem;
`

export const CardStacks = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;

  // Button
  & ~ a,
  & ~ button {
    justify-content: center;
    margin-top: auto;
  }
`

export const CardButton = styled.a`
  display: block;
  width: 100%;

  button {
    padding: 0.75rem 1rem;
    width: 100%;
    gap: 8px;
    border-color: ${(props) => props.theme.colors.blue[400]};

    background: ${(props) => props.theme.colors.blue[400]};
    border-radius: 8px;

    font-family: 'Radio Canada';
    font-size: 1rem;
    color: ${(props) => props.theme.colors.white};

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme.colors.white};
      color: #046ad0;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: ${(props) => props.theme.colors.gray[700]};
      border-color: ${(props) => props.theme.colors.gray[700]};
    }
  }
`
