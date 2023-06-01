import styled from 'styled-components';


// Estilos do componente
 export const ContainerForm = styled.div`
  width: 30%;
  height: fit-content;
  position: absolute;
  left: 65%;
  top: 30px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 12px;
  margin-left: auto;
`;

export const ContainerCadastro = styled.div`
  form {
    margin: 20px;
  }

  p {
    font-family: 'Radio Canada';
    font-style: normal;
    font-size: ${(props) => props.theme.fontSizes.xs};
    color: ${(props) => props.theme.colors.gray[700]};
    margin: 10px 0px;
  }

  input[type='radio'] {
    vertical-align: middle;
    margin-right: 5px;
  }

  .termo {
    font-size: ${(props) => props.theme.fontSizes.xs};
    color: ${(props) => props.theme.colors.blue[500]};
    margin-top: 10px;
  }

  .termo-button {
    border: none;
    background: none;
    text-decoration: underline;
    height: 10px;
    color: ${(props) => props.theme.colors.blue[500]};
  }

  .asteristico {
    color: ${(props) => props.theme.colors.blue[500]};
  }

  .souj {
    width: 65%;
    height: 53px;
  }
`;

export const ContainerTerms = styled.div`
  display: flex;
  max-height: 100px;
`;


export const TxtTerms = styled.div ``
