'use client';

import logoImg from '@/assets/logos/sou-junior.svg';
import { Button } from '@/components/button';
import { UserAvatar } from '@/components/user-avatar';
import { DropdownMenu, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import UserLoginService from '@/services/user/userLoginService';
import { breakpoints } from '@/styles/theme';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  ContainerHeader,
  Divider,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  GroupBtn,
  GroupBtnMobile,
  LinkUserAccount,
  MenuBurgerContent,
  MenuBurgerOverlay,
  MenuBurgerTrigger,
  SignOutBtn,
} from './style';

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
    <ContainerHeader>
      <nav className="navigation">
        <Link href="/" className="nav-logo">
          <Image src={logoImg} alt="Logo Sou Júnior" />
        </Link>
        <div aria-hidden className="mySpan" />

        <div className="nav-links">
          <Link href="/#onboarding">Como Funciona</Link>
          <Link href="/#mentor">Encontre Seu Mentor</Link>
        </div>
      </nav>

      {userSession != null ? (
        <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DropdownMenuTrigger>
            <UserAvatar />
          </DropdownMenuTrigger>

          {isMenuOpen && <MenuBurgerOverlay aria-hidden />}

          <DropdownMenuContent
            side="bottom"
            align={breakpoint <= breakpoints.desktopXS ? 'center' : 'end'}
            sideOffset={20}
          >
            <DropdownMenuLabel>{mentor.data?.fullName}</DropdownMenuLabel>

            <span>Mentor</span>
            <DropdownMenuSeparator />

            <DropdownMenuItem
              render={<LinkUserAccount href="/me">Minha conta</LinkUserAccount>}
            />

            <div className="menu-burger-links">
              <DropdownMenuItem
                render={<Link href="/#onboarding">Como Funciona</Link>}
              />
              <DropdownMenuItem
                render={<Link href="/#mentor">Encontre Seu Mentor</Link>}
              />
            </div>

            <DropdownMenuSeparator className="with-user-log-in" />

            <DropdownMenuItem
              render={<SignOutBtn onClick={handleLogoutUser}>Sair</SignOutBtn>}
            />
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <GroupBtn>
          <Button as={Link} href="/login" variant="secondary">
            Login mentores
          </Button>
          <Button as={Link} href="/cadastro">
            Cadastro mentores
          </Button>
        </GroupBtn>
      )}

      {/* Mobile menu */}
      {!userSession && (
        <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <MenuBurgerTrigger>
            <Menu />
          </MenuBurgerTrigger>

          {isMenuOpen && <MenuBurgerOverlay aria-hidden />}

          <MenuBurgerContent sideOffset={12}>
            <div className="menu-burger-links">
              <DropdownMenuItem
                render={<Link href="/#onboarding">Como Funciona</Link>}
              />
              <DropdownMenuItem
                render={<Link href="/#mentor">Encontre Seu Mentor</Link>}
              />
            </div>

            <Divider />

            <GroupBtnMobile>
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
            </GroupBtnMobile>
          </MenuBurgerContent>
        </DropdownMenu>
      )}
    </ContainerHeader>
  );
}
