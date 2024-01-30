import styled from 'styled-components'

export const ItemInvisible = styled.div`
  height: 5.5rem;
  width: 5.5rem;
  border-radius: '12px';
  display: none;
`

export const ItemPrimary = styled.div`
  height: 5.5rem;
  width: 5.5rem;
  background-color: ${(props) => props.theme.colors.blue[800]};
  border: 4px solid ${(props) => props.theme.colors.blue[800]};
  border-radius: '12px';
`

export const ItemSecondary = styled.div`
  height: 5.5rem;
  width: 5.5rem;
  border: 4px solid ${(props) => props.theme.colors.blue[800]};
  background-color: transparent;
  border-radius: '12px';
`

export const ItemImage = styled.div`
  height: 5.5rem;
  width: 5.5rem;
  border: none;
  border-radius: '12px';

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
