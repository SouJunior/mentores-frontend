import styled from 'styled-components'

export const UserProfileContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid ${(props) => props.theme.colors.gray[700]};
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  color: ${(props) => props.theme.colors.gray[700]};

  width: 8rem;
  height: 8rem;
  overflow: hidden;

  .icon-without-img {
    width: 2.5rem;
    height: 2.5rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
