import { ListCardsOnboarding } from "../../molecules/ListCardsOnboarding";
import { ContainerOnboarding } from "./style";

export function Onboarding() {
  return (
    <ContainerOnboarding id="onboarding">
      <h2>Conecte-se a um mentor em 4 passos</h2>
      <p>
        com a <span>facilidade e praticidade</span> oferecida pelo Portal de
        Mentorias.{" "}
      </p>
      <ListCardsOnboarding />
    </ContainerOnboarding>
  );
}
