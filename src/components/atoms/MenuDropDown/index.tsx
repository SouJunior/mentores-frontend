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
  isVisible: boolean;
}

export default function MenuDropDown({ isVisible }: MenuDropDown) {
  const { user } = useUser();
  return (
    <MenuContainer isVisible={isVisible}>
      <StyleWrapper>
        <UserName>{user?.fullName}</UserName>
        <UserType>Mentor</UserType>
      </StyleWrapper>
      <StyledHR />
      <ButtonsContainer>
        <span>Minha Conta</span>
        <span>Sair</span>
      </ButtonsContainer>
    </MenuContainer>
  );
}
