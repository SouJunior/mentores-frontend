import styled from "styled-components";

interface ModalProps{
    open:boolean;
}

export const ModalContainer = styled.div<ModalProps>`
position: absolute;
justify-content: space-between;
width: 802px;
height:479px;
top:0;
left:300px;   
background-color: white;
border-radius: 16px;
padding:32px;
display: ${({ open }) => (open ? "block" : "none")};

`

export const MainContainer = styled.div `
height:80%;

`

export const TitleContainer = styled.div`
display:flex;
justify-content: space-between;
`

export const PhotoContainer = styled.div `
display: flex;
align-items: center;
gap:15px;
`

export const MentorName = styled.span `
font-size: 40px;
line-height: 48px;
width: 219px;
`

export const SpecialityContainer = styled.div `
display: flex;
flex-direction: column;
gap:8px;
`

export const Specialitytitle = styled.span`
font-size: 14px;
color:#666666;
line-height: 16.8px;
margin-top: 24px;
`

export const StacksContainer = styled.span`
  display: flex;
  gap: 8px;
  width: 100%;
  flex-wrap: wrap;
`;

export const Stack = styled.span`
  background: #f5f1f3;
  font-size: 12px;
  line-height: 14px;
  height: 30px;
  min-width: 73px;
  color: #001633;
  padding: 8px;
  border-radius: 40px;
  text-align: center;
`;

export const AboutContainer = styled.div`
font-size: 16px;
line-height: 24px;
color:#666666;
margin-top:24px;

`

export const SchedButton = styled.button`
  width: 174.5px;
  height: 44px;
  padding: 16px 24px 16px 24px;
  border-radius: 8px;
  gap: 8px;
  background-color: #003986;
  border: none;
  color: white;
  font-size: 15px;
  line-height: 19.2px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #002c66;
  }
`;

export const ButtonClose = styled.button `
border:none;
color:#666666;
width: 32px;
height: 32px;
font-size: 26px;
background-color: white;

`