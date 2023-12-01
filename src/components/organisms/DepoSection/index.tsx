import { Button } from "@/components/atoms/Button";
import { MarqueeRolagem } from "@/components/atoms/MarqueeRolagem";
import { CardDepo } from "@/components/molecules/CardDepo";
import Link from "next/link";
import { ContainerBtn, ContainerDepo } from "./style";
import { useEffect } from "react";
import { useTestimonyService } from "../../../services/user/useTestimonyService"

export function DepoSection() {

  const { handleGetTestimonies, testimonies, testimoniesErrors } = useTestimonyService()

  useEffect(() => {
    const handleLoadGetTestimonies = async () => {
      await handleGetTestimonies()
    }

    handleLoadGetTestimonies()
  }, [])
  return (
    <ContainerDepo>
      <h2>Seja um mentor</h2>

      <MarqueeRolagem pauseOnHover={true} speed={30}>
        {testimonies?.length && testimonies?.map((testimony) => {
          return <CardDepo key={testimony.id} testimony={testimony} />;
        })}
        {!testimonies?.length && <b>{testimoniesErrors}</b>}
      </MarqueeRolagem>

      <ContainerBtn>
        <Link href={"/cadastro"}>
          <Button content={"Quero mentorar"} btnRole={"primary"} />
        </Link>
      </ContainerBtn>
    </ContainerDepo>
  );
}
