import styled from 'styled-components';

export const ContainerDiv = styled.div`
div{
    display: flex;
    width: 100%;
    margin-top: 5px;
}
`
export const ContainerInput = styled.div`

input{
    width: 100%;
    height: 29px;
    background: ${(props) => props.theme.colors.white};
    border-radius: 5px;
    border: 1px solid gray;
    
}

input:focus{
    border-radius:4px;
    -moz-border-radius:4px;
    -webkit-border-radius:4px;
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
    font-size: 12px;
  }
`

export const StyledLabel = styled.label`
	color: ${(props) => props.theme.colors.gray[700]};
`;

export const StyledLabelError = styled(StyledLabel)`
	color: ${(props) => props.theme.colors.error};

`;

