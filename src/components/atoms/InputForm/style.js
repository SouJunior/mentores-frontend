import styled from 'styled-components';

export const ContainerDiv = styled.div`
div{
    display: flex;
    width: 100%;

}
`
export const ContainerInput = styled.div`

input{
    width: 100%;
    background: ${(props) => props.theme.colors.white};
    border-radius: 5px;
    border: 1px solid gray;
    border-radius: 8px;
    align-items: center;
    padding: 12px 16px;
}

input:focus{
    border-radius:8px;
    -moz-border-radius:8px;
    -webkit-border-radius:8px;
    -webkit-box-shadow: 0px 0px 15px 1px ${(props) => props.theme.colors.blue[700]};
    -moz-box-shadow: 0px 0px 15px 1px ${(props) => props.theme.colors.blue[700]};
    box-shadow: 0px 0px 5px 0px ${(props) => props.theme.colors.blue[700]};
    border: ${(props) => props.theme.colors.blue[700]};
    outline:none;
    }


`

export const ContainerError = styled.div`
  .error-message{
    color: ${(props) => props.theme.colors.error};
    font-size: 14px;
  }
`