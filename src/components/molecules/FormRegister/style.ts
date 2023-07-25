import styled from "styled-components";

export const ContainerForm = styled.div`
  width: 100%;
  max-width: 500px;
  height: fit-content;
  position: absolute;
  right: 70px;
  top: 30px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 12px;
  padding: 12px 0px;
`;

export const ContainerRegister = styled.div`
  form {
    margin: 8px 20px;
    height: 100%;

    img {
      width: 240px;
      height: 36px;
    }
  }

  p {
    font-family: "Radio Canada";
    font-style: normal;
    font-size: ${(props) => props.theme.fontSizes.xs};
    color: ${(props) => props.theme.colors.gray[700]};
    margin: 8px 0px;
  }

  input[type="radio"] {
    vertical-align: middle;
    margin-right: 5px;
  }

  .asterisk {
    color: ${(props) => props.theme.colors.blue[500]};
  }
`;

export const ContainerTerms = styled.div`
  display: flex;
  max-height: 100px;
  text-align: justify;
  align-items: flex-start;
  justify-content: center;
`;

export const TxtTerms = styled.div`
  font-size: 14px;
  width: 100%;
  margin-left: 8px;
  color: ${(props) => props.theme.colors.blue[500]};
`;

export const ContainerBtn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0px 0px;
  margin: 0px;
  gap: 16px;
`;
