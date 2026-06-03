'use client';

import logoImg from '@/assets/logos/sou-junior.svg';
import { Button } from '@/components/button';
import { UserAvatar } from '@/components/user-avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import UserLoginService from '@/services/user/userLoginService';
import { breakpoints } from '@/styles/theme';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userSession, mentor, setUserSession } = useAuthContext();
  const { logout } = UserLoginService();
  const breakpoint = useBreakpoint();

  function handleLogoutUser() {
    logout();
    setUserSession(null);
  }

  return (
    <header className="flex justify-between px-8 py-4 bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] max-[1133px]:px-4">
      <nav className="flex gap-2 items-center py-1">
        <Link
          href="/"
          className="w-[15.5rem] h-10 max-[438px]:w-[11.9rem] max-[438px]:h-8"
        >
          <Image
            src={logoImg}
            alt="Logo Sou Júnior"
            className="w-full h-full"
          />
        </Link>
        <div
          aria-hidden
          className="bg-[#003986] w-[2px] h-10 max-[1064px]:hidden"
        />

        <div className="flex items-center gap-2 max-[1064px]:hidden">
          <Link
            href="/#onboarding"
            className="px-2 py-1 text-[1.25rem] leading-7 text-[#003986] border-t-2 border-b-2 border-transparent hover:font-semibold hover:text-[1.225rem]"
          >
            Como Funciona
          </Link>
          <Link
            href="/#mentor"
            className="px-2 py-1 text-[1.25rem] leading-7 text-[#003986] border-t-2 border-b-2 border-transparent hover:font-semibold hover:text-[1.225rem]"
          >
            Encontre Seu Mentor
          </Link>
        </div>
      </nav>

      {userSession != null ? (
        <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DropdownMenuTrigger className="flex items-center gap-4 cursor-pointer leading-none [&_img]:w-11 [&_img]:h-11 [&_img]:rounded-full [&_svg]:w-[1.2rem] [&_svg]:h-[1.2rem] [&_svg]:text-[#666] [&_svg]:[rotate:270deg] [&_svg]:transition-all data-[state=open]:[&_svg]:[rotate:90deg] focus-visible:shadow-[0_0_0_2px_rgba(17,101,186,0.6)] max-[438px]:gap-2 max-[438px]:[&_img]:w-8 max-[438px]:[&_img]:h-8">
            <UserAvatar />
          </DropdownMenuTrigger>

          {isMenuOpen && (
            <div
              aria-hidden
              className="hidden fixed inset-0 z-[1] mt-20 bg-black/25 max-[1064px]:block"
            />
          )}

          <DropdownMenuContent
            side="bottom"
            align={breakpoint <= breakpoints.desktopXS ? 'center' : 'end'}
            sideOffset={20}
            className="py-2 rounded-lg bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-[#323232] flex flex-col z-[1] w-[17rem] max-[1064px]:w-full max-[1064px]:rounded-none max-[1064px]:-mt-[3px]"
          >
            <strong
              className="font-medium text-[1.25rem] leading-[120%] px-4 py-2"
              style={{ fontFamily: 'Radio Canada' }}
            >
              {mentor.data?.fullName}
            </strong>

            <span className="px-4">Mentor</span>
            <DropdownMenuSeparator className="w-full h-px bg-[#ACACAC] my-2" />

            <DropdownMenuItem
              render={
                <Link
                  href="/me"
                  className="block px-4 py-4 leading-[120%] flex-1 transition-[0.2s] hover:bg-[#D9D9D9] focus:bg-[#D9D9D9] hover:text-[#323232] focus:text-[#323232]"
                >
                  Minha conta
                </Link>
              }
            />

            <div className="hidden flex-col max-[1064px]:flex">
              <DropdownMenuItem
                render={
                  <Link
                    href="/#onboarding"
                    className="px-4 py-4 leading-[1.2rem] text-[#003986] outline-none"
                  >
                    Como Funciona
                  </Link>
                }
              />
              <DropdownMenuItem
                render={
                  <Link
                    href="/#mentor"
                    className="px-4 py-4 leading-[1.2rem] text-[#003986] outline-none"
                  >
                    Encontre Seu Mentor
                  </Link>
                }
              />
            </div>

            <DropdownMenuSeparator className="hidden w-full h-px bg-[#ACACAC] my-2 max-[1064px]:block" />

            <DropdownMenuItem
              render={
                <button
                  onClick={handleLogoutUser}
                  className="block px-4 py-4 leading-[120%] flex-1 transition-[0.2s] text-[#db2e34] hover:bg-[#D9D9D9] focus:bg-[#D9D9D9] cursor-pointer"
                >
                  Sair
                </button>
              }
            />
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex gap-4 max-[1064px]:hidden">
          <Button as={Link} href="/login" variant="secondary">
            Login mentores
          </Button>
          <Button as={Link} href="/cadastro">
            Cadastro mentores
          </Button>
        </div>
      )}

      {/* Mobile menu */}
      {!userSession && (
        <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DropdownMenuTrigger className="hidden cursor-pointer self-center text-[#003986] leading-none transition-transform duration-300 data-[state=open]:rotate-90 [&_svg]:w-10 [&_svg]:h-10 max-[1064px]:block">
            <Menu />
          </DropdownMenuTrigger>

          {isMenuOpen && (
            <div
              aria-hidden
              className="hidden fixed inset-0 z-[1] mt-20 bg-black/25 max-[1064px]:block"
            />
          )}

          <DropdownMenuContent
            sideOffset={12}
            className="hidden flex-col gap-2 z-[1] bg-white rounded-bl-lg rounded-br-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-t-2 border-[#C5C7C5] py-4 text-[#003986] w-full max-[1064px]:flex max-[438px]:-mt-[4px]"
          >
            <div className="flex flex-col">
              <DropdownMenuItem
                render={
                  <Link
                    href="/#onboarding"
                    className="px-4 py-4 leading-[1.2rem] outline-none"
                  >
                    Como Funciona
                  </Link>
                }
              />
              <DropdownMenuItem
                render={
                  <Link
                    href="/#mentor"
                    className="px-4 py-4 leading-[1.2rem] outline-none"
                  >
                    Encontre Seu Mentor
                  </Link>
                }
              />
            </div>

            <hr className="border-0 border-t-2 border-[#C5C7C5]" />

            <div className="flex flex-col gap-2 px-4 pt-2">
              <DropdownMenuItem
                render={
                  <Button as={Link} href="/login" variant="secondary">
                    Login mentores
                  </Button>
                }
              />
              <DropdownMenuItem
                render={
                  <Button as={Link} href="/cadastro">
                    Cadastro mentores
                  </Button>
                }
              />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </header>
  );
}
