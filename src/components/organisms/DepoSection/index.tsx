import { Button } from "@/components/atoms/Button";
import { MarqueeRolagem } from "@/components/atoms/MarqueeRolagem";
import { CardDepo } from "@/components/molecules/CardDepo";
import { mentores } from "@/mockups/mentores2";
import Link from "next/link";
import { ContainerBtn, ContainerDepo } from "./style";

export function DepoSection() {
  return (
    <ContainerDepo>
      <h2>Seja um mentor</h2>

      <MarqueeRolagem pauseOnHover={true} speed={30}>
        {mentores.map((mentor) => {
          return <CardDepo key={mentor.name} mentor={mentor} />;
        })}
      </MarqueeRolagem>

      <ContainerBtn>
        <Link href={"/cadastro"}>
          <Button content={"Quero mentorar"} btnRole={"primary"} />
        </Link>
      </ContainerBtn>
    </ContainerDepo>
  );
}
