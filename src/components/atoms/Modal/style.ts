import styled from 'styled-components'

export const ButtonClose = styled.button<Partial<{ showBtn: boolean }>>`
  display: ${(props) => (props.showBtn === true ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;

  border: 1px solid red;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 0;
  border: none;
  background-color: transparent;

  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color: ${(props) => props.theme.colors.gray[700]};

  background-color: rgba(255, 255, 255, 0);

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`
