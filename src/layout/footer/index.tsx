import Image from 'next/image';
import Link from 'next/link';
import { ModalPrivacyPolicy } from '@/layout/footer/modal-terms-and-policies/ModalPrivacyPolicy';
import ModalTerms from '@/layout/footer/modal-terms-and-policies/ModalTerms';

import logo from '@/assets/logos/sou-junior-black.webp';
import {
  DiscordLogo,
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TelegramLogo,
  TwitchLogo,
  YoutubeLogo,
} from 'phosphor-react';
import { Modal } from '@/components/modal';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#666666] text-white">
      <div className="container flex flex-col gap-10 py-16 px-8 max-[1133px]:px-4 max-[438px]:py-8">
        <div className="flex justify-between items-start gap-8 flex-wrap">
          <Link href="/" title="Início">
            <Image
              src={logo}
              alt="SouJunior logo"
              width={248}
              height={40}
              quality={100}
            />
          </Link>

          <div className="flex items-start flex-wrap gap-x-20 gap-y-8 max-[438px]:flex-col">
            <section className="flex flex-col gap-6">
              <h6 className="text-xl font-medium leading-6">Tenha mentorias</h6>
              <Link
                href="/#onboarding"
                className="text-base leading-[1.4rem] font-normal"
              >
                Como funciona
              </Link>
            </section>

            <section className="flex flex-col gap-6">
              <h6 className="text-xl font-medium leading-6">Mentores</h6>
              <Link
                href="/cadastro"
                className="text-base leading-[1.4rem] font-normal"
              >
                Cadastrar
              </Link>
              <Link
                href="/login"
                className="text-base leading-[1.4rem] font-normal"
              >
                Login
              </Link>
            </section>

            <section className="flex flex-col gap-6">
              <h6 className="text-xl font-medium leading-6">Suporte</h6>
              <Link
                href="/faq"
                className="text-base leading-[1.4rem] font-normal"
              >
                FAQ
              </Link>
            </section>

            <section className="flex flex-col gap-6">
              <h6 className="text-xl font-medium leading-6">Legal</h6>

              <Modal.Root>
                <Modal.Control asChild>
                  <button className="[all:unset] text-base leading-[1.4rem] cursor-pointer">
                    Termo de uso
                  </button>
                </Modal.Control>

                <ModalTerms />
              </Modal.Root>

              <Modal.Root>
                <Modal.Control asChild>
                  <button className="[all:unset] text-base leading-[1.4rem] cursor-pointer">
                    Política de privacidade
                  </button>
                </Modal.Control>

                <ModalPrivacyPolicy />
              </Modal.Root>
            </section>
          </div>
        </div>

        <div className="flex items-center gap-4 max-[438px]:gap-2 max-[438px]:justify-center [&_svg]:w-6 [&_svg]:h-6">
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
        </div>

        <p className="pt-4 border-t border-[#DEDEDE] text-[0.875rem] leading-5 text-right max-[438px]:text-left">
          © {currentYear} SouJunior. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
