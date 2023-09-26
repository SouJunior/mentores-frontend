import FormOnboard2 from "@/components/molecules/FormOnboard2";
import { PerfilContainer, StyledImportant } from "./styled";

export default function PerfilTab() {
  return (
    <PerfilContainer>
      <StyledImportant>
        <>*</> Indica um campo obrigatório
      </StyledImportant>{" "}
      <FormOnboard2 />
    </PerfilContainer>
  );
}
