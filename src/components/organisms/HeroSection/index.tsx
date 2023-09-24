import lupa from "@/assets/icons/Lupa.svg";
import { Button } from "@/components/atoms/Button";
import { PersonTitle } from "@/components/atoms/PersonTitle";
import { Header } from "@/components/molecules/Header";
import { ListItemsHero } from "@/components/molecules/ListItemsHero";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimationTextHero } from "../../../styles/animations";
import { ContainerHero, ContainerInput, TextAnimated } from "./style";

export function HeroSection() {
  const text = ["mentorias personalizadas", "profissionais experientes"];
  const [textHero, setTextHero] = useState(text[0]);

  function textSwitch() {
    setTimeout(() => {
      if (textHero === text[0]) {
        setTextHero(text[1]);
      }
    }, 1500);

    setTimeout(() => {
      if (textHero === text[1]) {
        setTextHero(text[0]);
      }
    }, 1500);
  }

  useEffect(() => {
    textSwitch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textHero]);

  return (
    <ContainerHero>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <AnimatePresence>
            <PersonTitle text={"Decole sua carreira mais rápido com"} />
            <TextAnimated
              as={motion.h3}
              key={textHero}
              variants={AnimationTextHero}
              initial={"initial"}
              animate={"animate"}
              exit={"exit"}
            >
              {textHero}
            </TextAnimated>
          </AnimatePresence>
          <p>
            Tenha acesso a mentorias individuais e <br /> gratuitas com
            profissionais renomados.
          </p>
          <ContainerInput>
            <div>
              <Image src={lupa} alt="Lupa" />
              <input
                type="text"
                placeholder="Pesquisar por nome ou especialidade"
              />
            </div>
            <Button content="Encontrar mentor" btnRole={"primary"} />
          </ContainerInput>
        </div>
        <ListItemsHero />
      </div>
    </ContainerHero>
  );
}
