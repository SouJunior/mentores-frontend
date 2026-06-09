'use client';

import { logout } from '@/features/auth/actions/actions';
import { Button } from '@/shared/components/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu';
import { UserAvatar } from '@/shared/components/user-avatar';
import { useBreakpoint } from '@/shared/hooks/useBreakpoint';
import { breakpoints } from '@/shared/styles/theme';
import { Session } from '@/shared/types/Auth';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface HeaderProps {
  session: Session | null;
}

export function Header({ session }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const breakpoint = useBreakpoint();

  function handleLogoutUser() {
    logout();
  }

  return (
    <header className="flex justify-between px-8 py-4 bg-white shadow-card max-[1133px]:px-4">
      <nav className="flex gap-2 items-center py-1">
        <Link
          href="/"
          className="w-[15.5rem] h-10 max-[438px]:w-[11.9rem] max-[438px]:h-8"
        >
          <Image
            src={'/logos/sou-junior.svg'}
            alt="Logo Sou Júnior"
            className="w-full h-full"
            width={246}
            height={64}
          />
        </Link>
        <div
          aria-hidden
          className="bg-blue-800 w-[2px] h-10 max-[1064px]:hidden"
        />

        <div className="flex items-center gap-2 max-[1064px]:hidden">
          <Link
            href="/#onboarding"
            className="px-2 py-1 text-[1.25rem] leading-7 text-blue-800 border-t-2 border-b-2 border-transparent hover:font-semibold hover:text-[1.225rem]"
          >
            Como Funciona
          </Link>
          <Link
            href="/#mentor"
            className="px-2 py-1 text-[1.25rem] leading-7 text-blue-800 border-t-2 border-b-2 border-transparent hover:font-semibold hover:text-[1.225rem]"
          >
            Encontre Seu Mentor
          </Link>
        </div>
      </nav>

      {session != null ? (
        <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DropdownMenuTrigger className="flex items-center gap-4 cursor-pointer leading-none [&_img]:w-11 [&_img]:h-11 [&_img]:rounded-full [&_svg]:w-[1.2rem] [&_svg]:h-[1.2rem] [&_svg]:text-gray-700 [&_svg]:[rotate:270deg] [&_svg]:transition-all data-[state=open]:[&_svg]:[rotate:90deg] focus-visible:shadow-focus-ring max-[438px]:gap-2 max-[438px]:[&_img]:w-8 max-[438px]:[&_img]:h-8">
            <UserAvatar profile={session?.profile} />
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
            className="py-2 rounded-lg bg-white shadow-card text-black-200 flex flex-col z-1 w-full"
          >
            <strong
              className="font-medium text-[1.25rem] leading-[120%] px-4 py-2"
              style={{ fontFamily: 'Radio Canada' }}
            >
              {session?.fullName}
            </strong>

            <span className="px-4">Mentor</span>
            <DropdownMenuSeparator className="w-full h-px bg-gray-600 my-2" />

            <DropdownMenuItem
              render={
                <Link
                  href="/account/personal-info"
                  role="button"
                  className="block px-4 py-4 leading-[120%] flex-1 transition-[0.2s] hover:bg-gray-250 focus:bg-gray-250 hover:text-black-200 focus:text-black-200"
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
                    className="px-4 py-4 leading-[1.2rem] text-blue-800 outline-none"
                    role="button"
                  >
                    Como Funciona
                  </Link>
                }
              />
              <DropdownMenuItem
                render={
                  <Link
                    href="/#mentor"
                    className="px-4 py-4 leading-[1.2rem] text-blue-800 outline-none"
                    role="button"
                  >
                    Encontre Seu Mentor
                  </Link>
                }
              />
            </div>

            <DropdownMenuSeparator className="hidden w-full h-px bg-gray-600 my-2 max-[1064px]:block" />

            <DropdownMenuItem
              render={
                <div
                  onClick={handleLogoutUser}
                  role="button"
                  className="block px-4 py-4 leading-[120%] flex-1 transition-[0.2s] text-red-300 hover:bg-gray-250 focus:bg-gray-250 cursor-pointer"
                >
                  Sair
                </div>
              }
            />
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex gap-4 max-[1064px]:hidden">
          <Button as={Link} href="/login" size="xl" variant="secondary">
            Login mentores
          </Button>
          <Button as={Link} href="/cadastro" size="xl" variant="primary">
            Cadastro mentores
          </Button>
        </div>
      )}

      {/* Mobile menu */}
      {!session && (
        <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DropdownMenuTrigger className="hidden cursor-pointer self-center text-blue-800 leading-none transition-transform duration-300 data-[state=open]:rotate-90 [&_svg]:w-10 [&_svg]:h-10 max-[1064px]:block">
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
            className="hidden flex-col gap-2 z-[1] bg-white rounded-bl-lg rounded-br-lg shadow-card border-t-2 border-gray-500 py-4 text-blue-800 w-full max-[1064px]:flex max-[438px]:-mt-[4px]"
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

            <hr className="border-0 border-t-2 border-gray-500" />

            <div className="flex flex-col gap-2 px-4 pt-2">
              <DropdownMenuItem
                render={
                  <Button as={Link} href="/login" size="xl" variant="secondary">
                    Login mentores
                  </Button>
                }
              />
              <DropdownMenuItem
                render={
                  <Button as={Link} size="xl" href="/cadastro">
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
