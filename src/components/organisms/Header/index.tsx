import logoImg from '@/assets/logos/sou-junior.svg'
import { Button } from '@/components/atoms/Button'
import Image from 'next/image'
import Link from 'next/link'
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
} from './style'
import { UserAvatar } from '@/components/atoms/UserAvatar'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Menu } from '@mui/icons-material'
import { useState } from 'react'
import { useAuthContext } from '@/context/Auth/AuthContext'
import UserLoginService from '@/services/user/userLoginService'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { userSession, mentor, setUserSession } = useAuthContext()
  const { logout } = UserLoginService()

  function handleLogoutUser() {
    logout()
    setUserSession(null)
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
        <DropdownMenu.Root modal={false}>
          <DropdownMenuTrigger>
            <UserAvatar />
          </DropdownMenuTrigger>

          <DropdownMenu.Portal>
            <DropdownMenuContent side="bottom" align="end" sideOffset={20}>
              <DropdownMenuLabel>{mentor.data?.fullName}</DropdownMenuLabel>

              <span>Mentor</span>
              <DropdownMenuSeparator />

              <LinkUserAccount href="/genericPage">Minha conta</LinkUserAccount>
              <SignOutBtn onClick={handleLogoutUser}>Sair</SignOutBtn>
            </DropdownMenuContent>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
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
      <DropdownMenu.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <MenuBurgerTrigger>
          <Menu />
        </MenuBurgerTrigger>

        {isMenuOpen && <MenuBurgerOverlay aria-hidden />}

        <MenuBurgerContent sideOffset={20}>
          <div className="menu-burger-links">
            <DropdownMenu.Item asChild>
              <Link href="/#onboarding">Como Funciona</Link>
            </DropdownMenu.Item>

            <DropdownMenu.Item asChild>
              <Link href="/#mentor">Encontre Seu Mentor</Link>
            </DropdownMenu.Item>
          </div>

          <Divider />

          <GroupBtnMobile>
            <DropdownMenu.Item asChild>
              <Button as={Link} href="/login" variant="secondary">
                Login mentores
              </Button>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
              <Button as={Link} href="/cadastro">
                Cadastro mentores
              </Button>
            </DropdownMenu.Item>
          </GroupBtnMobile>
        </MenuBurgerContent>
      </DropdownMenu.Root>
    </ContainerHeader>
  )
}
