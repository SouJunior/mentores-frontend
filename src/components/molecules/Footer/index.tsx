import { Button } from "@/components/atoms/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ModalPrivacyPolicy } from "../ModalPrivacyPolicy";
import ModalTerms from "../ModalTerms";
import {
  ContainerFooter,
  ContainerModais,
  ContainerSocialMedias,
  SectionFooter,
  SectionFooterLinks,
} from "./style";

import discord from "@/assets/homepage/footer/discord.webp";
import facebook from "@/assets/homepage/footer/face.webp";
import github from "@/assets/homepage/footer/github.webp";
import insta from "@/assets/homepage/footer/insta.webp";
import linkedin from "@/assets/homepage/footer/linkedin.webp";
import telegram from "@/assets/homepage/footer/telegram.webp";
import twitch from "@/assets/homepage/footer/twitch.webp";
import twitter from "@/assets/homepage/footer/twitter.webp";
import youtube from "@/assets/homepage/footer/youtube.webp";
import logo from "@/assets/logos/sou-junior-black.webp";

export function Footer() {
  const [openTermos, setOpenTermos] = useState(false);
  const [openPoliticas, setOpenPoliticas] = useState(false);

  const handleOpenTermos = () => setOpenTermos(true);
  const handleCloseTermos = () => setOpenTermos(false);
  const handleOpenPoliticas = () => setOpenPoliticas(true);
  const handleClosePoliticas = () => setOpenPoliticas(false);

  return (
    <footer>
      <ContainerFooter>
        <SectionFooter>
          <Image src={logo} alt="Logo" width={260} height={40} />
          <ContainerModais>
            <Button
              content={"Termos de uso"}
              btnRole={"unstyled"}
              onClick={handleOpenTermos}
            />

            <span />
            <Button
              content={"Políticas de Privacidade"}
              btnRole={"unstyled"}
              onClick={handleOpenPoliticas}
            />
          </ContainerModais>
          <ModalTerms
            open={openTermos}
            onClose={handleCloseTermos}
            height={590}
            width={600}
          />
          <ModalPrivacyPolicy
            open={openPoliticas}
            onClose={handleClosePoliticas}
            height={590}
            width={600}
          />
        </SectionFooter>
        <SectionFooterLinks>
          <h2>Seja mentorado</h2>
          <Link href="/#mentor">Encontre seu mentor</Link>
          <Link href="/#onboarding">Como funciona</Link>
        </SectionFooterLinks>
        <SectionFooterLinks>
          <h2>Mentore</h2>
          <Link href="/cadastro">Cadastrar</Link>
          <Link href="/login">Entrar</Link>
        </SectionFooterLinks>
        <SectionFooterLinks>
          <h2>Suporte</h2>
          <Link href="/faq">FAQ</Link>
        </SectionFooterLinks>
      </ContainerFooter>
      <ContainerSocialMedias>
        <Link
          href={"https://www.linkedin.com/company/soujunior/"}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <Image width={40} height={40} src={linkedin} alt="logo Linkedin" />
        </Link>
        <Link
          href={"https://github.com/SouJunior"}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <Image width={40} height={40} src={github} alt="logo github" />
        </Link>
        <Link
          href={
            "https://discord.com/invite/soujunior-community-759176734460346423"
          }
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <Image width={40} height={40} src={discord} alt="logo discord" />
        </Link>
        <Link
          href={"https://www.youtube.com/@soujuniortech"}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <Image width={40} height={40} src={youtube} alt="logo youtube" />
        </Link>{" "}
        <Link
          href={"https://twitter.com/SouJunior_Tech"}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <Image width={40} height={40} src={twitter} alt="logo twitter" />
        </Link>{" "}
        <Link
          href={"https://www.instagram.com/soujunior.tech/"}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <Image width={40} height={40} src={insta} alt="logo instagram" />
        </Link>{" "}
        <Link
          href={"https://www.facebook.com/people/SouJunior/100086671131030"}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <Image width={40} height={40} src={facebook} alt="logo facebook" />
        </Link>{" "}
        <Link
          href={"https://t.me/soujuniortech"}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <Image width={40} height={40} src={telegram} alt="logo telegram" />
        </Link>{" "}
        <Link
          href={"https://www.twitch.tv/soujuniortech"}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <Image width={40} height={40} src={twitch} alt="logo twitch" />
        </Link>
      </ContainerSocialMedias>
    </footer>
  );
}
