import { ContainerError, ContainerInput } from "./style"
import { ContainerDiv } from "./style";


export default function InputForm({type, value, placeholder, valueChange, error}){
    return(
        <ContainerDiv>
            <ContainerInput>
        <input type={type} placeholder={placeholder} onChange={(e)=>valueChange(e.target.value)} value={value}></input>
            </ContainerInput>
            <ContainerError>
            {error && <p className="error-message">{error}</p>}
            </ContainerError>
        </ContainerDiv>
    )
}