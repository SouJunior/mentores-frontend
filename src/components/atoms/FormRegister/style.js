import styled from "styled-components";

export const ContainerForm = styled.div`
  width: 30%;
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
    height: 100%;
  }

  p {
    font-family: "Radio Canada";
    font-style: normal;
    font-size: ${(props) => props.theme.fontSizes.xs};
    color: ${(props) => props.theme.colors.gray[700]};
    margin: 10px 0px;
  }

  input[type="radio"] {
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
  text-align: center;
`;

export const TxtTerms = styled.div``;

export const ModalLogo = styled.img`
  max-width: 120px;
  align-self: center;
`;
export const ModalHash = styled.p`
  font-family: "Radio Canada";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #1165ba;
  margin-top: 5px;
`;

export const ModalBox = styled.div`
  max-height: 400px;
  overflow: auto;
  background-color: white;
  width: 100%;
  padding: 24px;
  margin-top: 30px;
`;

export const ModalBoxTitulo = styled.h2`
  width: 521px;
  height: 24px;
  font-family: "Radio Canada";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #1165ba;
`;

export const ModalBoxSubTitulo = styled.h2`
  font-family: "Radio Canada";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  color: #000000;
`;
export const ModalBoxParagrafo = styled.p`
  width: 521px;
  height: 2289px;
  font-family: "Radio Canada";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #000000;
`;
