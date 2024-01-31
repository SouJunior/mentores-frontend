import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ModalPrivacyPolicy } from '../ModalPrivacyPolicy'
import ModalTerms from '../ModalTerms'

import {
  FooterBtn,
  FooterContainer,
  FooterContent,
  FooterCopyright,
  FooterLink,
  FooterMainInfo,
  FooterSitemap,
  FooterSocialMediaContainer,
  FooterTitle,
  FooterTitleContainer,
} from './style'

import logo from '@/assets/logos/sou-junior-black.webp'
import {
  DiscordLogo,
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TelegramLogo,
  TwitchLogo,
  YoutubeLogo,
} from 'phosphor-react'

export function Footer() {
  const [openTermos, setOpenTermos] = useState(false)
  const [openPoliticas, setOpenPoliticas] = useState(false)

  const handleOpenTermos = () => setOpenTermos(true)
  const handleCloseTermos = () => setOpenTermos(false)
  const handleOpenPoliticas = () => setOpenPoliticas(true)
  const handleClosePoliticas = () => setOpenPoliticas(false)

  return (
    <FooterContainer>
      <FooterContent className="container">
        <FooterMainInfo>
          <Image
            src={logo}
            alt="SouJunior logo"
            width={248}
            height={40}
            quality={100}
          />

          <FooterSitemap>
            <FooterTitleContainer>
              <FooterTitle>Tenha mentorias</FooterTitle>
              <FooterLink href="/#onboarding">Como funciona</FooterLink>
            </FooterTitleContainer>

            <FooterTitleContainer>
              <FooterTitle>Mentores</FooterTitle>
              <FooterLink href="/cadastro">Cadastrar</FooterLink>
              <FooterLink href="/login">Login</FooterLink>
            </FooterTitleContainer>

            <FooterTitleContainer>
              <FooterTitle>Suporte</FooterTitle>
              <FooterLink href="/faq">FAQ</FooterLink>
            </FooterTitleContainer>

            <FooterTitleContainer>
              <FooterTitle>Legal</FooterTitle>
              <FooterBtn onClick={handleOpenTermos}>Termo de uso</FooterBtn>
              <FooterBtn onClick={handleOpenPoliticas}>
                Política de privacidade
              </FooterBtn>

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
            </FooterTitleContainer>
          </FooterSitemap>
        </FooterMainInfo>

        <FooterSocialMediaContainer>
          <Link
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://www.linkedin.com/company/soujunior/"
            title="Linkedin"
          >
            <LinkedinLogo weight="bold" />
          </Link>
          <Link
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://github.com/SouJunior"
            title="Github"
          >
            <GithubLogo weight="bold" />
          </Link>
          <Link
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://discord.com/invite/soujunior-community-759176734460346423"
            title="Discord"
          >
            <DiscordLogo weight="bold" />
          </Link>
          <Link
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://www.youtube.com/@soujuniortech"
            title="Youtube"
          >
            <YoutubeLogo weight="bold" />
          </Link>
          <Link
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://twitter.com/SouJunior_Tech"
            title="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.7447 4.5H19.2748L13.7473 10.8176L20.25 19.4145H15.1584L11.1705 14.2005L6.60746 19.4145H4.07582L9.98808 12.6571L3.75 4.5H8.97083L12.5755 9.26575L16.7447 4.5ZM15.8567 17.9001H17.2587L8.20905 5.93485H6.7046L15.8567 17.9001Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://www.instagram.com/soujunior.tech/"
            title="Instagram"
          >
            <InstagramLogo weight="bold" />
          </Link>
          <Link
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://www.facebook.com/people/SouJunior/100086671131030"
            title="Facebook"
          >
            <FacebookLogo weight="bold" />
          </Link>
          <Link
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://t.me/soujuniortech"
            title="Telegram"
          >
            <TelegramLogo weight="bold" />
          </Link>
          <Link
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://www.twitch.tv/soujuniortech"
            title="Twitch"
          >
            <TwitchLogo weight="bold" />
          </Link>
        </FooterSocialMediaContainer>

        <FooterCopyright>
          © 2023 SouJunior. Todos os direitos reservados.
        </FooterCopyright>
      </FooterContent>
    </FooterContainer>
  )
}
