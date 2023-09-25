import MentorPhoto from "@/components/molecules/MentorPhoto";
import { PerfilContainer, StyledImportant } from "./styled";

export default function PerfilTab() {
  return (
    <PerfilContainer>
      <StyledImportant>
        <>*</> Indica um campo obrigatório
      </StyledImportant>{" "}
      <MentorPhoto />
    </PerfilContainer>
  );
}
