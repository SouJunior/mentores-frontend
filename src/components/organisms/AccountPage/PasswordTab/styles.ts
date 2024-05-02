import styled from 'styled-components'

export const WrapperInput = styled.div`
  position: relative;

  label {
    span:first-child {
      color: ${(props) => props.theme.colors.black[200]};

      .asterisk {
        color: ${(props) => props.theme.colors.blue[700]};
      }
    }

    input {
      font-size: 1rem;
      padding-right: 2rem;
    }
  }

  // Eye visibility
  button {
    right: 1rem;
    top: 2.5rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`
