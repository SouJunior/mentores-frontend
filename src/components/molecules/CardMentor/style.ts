import styled from 'styled-components'
import Image from 'next/image'

export const CardImage = styled(Image)`
  width: 9.75rem;
  height: 9.75rem;
  border-radius: 50%;
  box-shadow:
    0px 2px 4px 0px rgba(0, 0, 0, 0.15),
    0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  object-fit: cover;
  align-self: center;
`

export const CardTitle = styled.h1`
  font-family: 'Radio Canada';
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 150%;
  color: ${(props) => props.theme.colors.gray[700]};
  margin-bottom: 0.25rem;
`

export const CardSubtitle = styled.h2`
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
  gap: 10px;
  width: 100%;
`

export const CardStack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  background: #5d5f5d;
  border-radius: 4px;
  font-family: 'Radio Canada';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: #fdfdfd;
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

    &:disabled {
      background-color: 'gray';
      color: 'grey';
      cursor: 'not-allowed';
    }

    &:hover {
      background-color: ${(props) => props.theme.colors.white};
      color: #046ad0;
    }
  }
`
