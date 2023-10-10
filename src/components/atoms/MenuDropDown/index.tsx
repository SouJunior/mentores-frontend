import useUser from "@/context/Auth/useUser";
import {
  MenuContainer,
  UserName,
  UserType,
  StyledHR,
  StyleWrapper,
  ButtonsContainer,
} from "./styled";

interface MenuDropDown {
  isvisible: boolean;
}

export default function MenuDropDown({ isvisible }: MenuDropDown) {
  const { user, logout } = useUser();
  return (
    <MenuContainer isvisible={isvisible}>
      <StyleWrapper>
        <UserName>{user?.fullName}</UserName>
        <UserType>Mentor</UserType>
      </StyleWrapper>
      <StyledHR />
      <ButtonsContainer>
        <span>Minha Conta</span>
        <span style={{color:'red'}} onClick={logout}>Sair</span>
      </ButtonsContainer>
    </MenuContainer>
  );
}
