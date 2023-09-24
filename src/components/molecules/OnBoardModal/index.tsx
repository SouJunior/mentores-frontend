import GridSpecialities from "@/components/atoms/GridSpecialities";
import {
  ModalContainer,
  TabsContainer,
  Tab,
  TabLabel,
  TabWrapper,
  TabLine,
  StyledSpan,
  StyledTitle,
  StyledImportant,
  StyledHR,
  NextButton,
} from "./styled";

export default function OnBoardModal() {
  return (
    <ModalContainer>
      <TabsContainer>
        <TabWrapper>
          <Tab>
            <TabLabel>ESPECIALIDADES</TabLabel>
            <TabLine />
          </Tab>
        </TabWrapper>
        <TabWrapper>
          <Tab>
            <TabLabel>PERFIL</TabLabel>
            <TabLine />
          </Tab>
        </TabWrapper>
      </TabsContainer>
      <StyledSpan>Olá, Fulano!</StyledSpan>
      <StyledTitle>Em quais áreas você deseja mentorar?</StyledTitle>
      <StyledImportant>
        <>*</> Indica um campo obrigatório
      </StyledImportant>
      <GridSpecialities />
      <StyledHR/>
      <NextButton>Continuar</NextButton>
    </ModalContainer>
  );
}
