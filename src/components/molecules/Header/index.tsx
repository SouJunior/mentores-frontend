import logoImg from '@/assets/logos/sou-junior.svg'
import { Button } from '@/components/atoms/Button'
import Image from 'next/image'
import Link from 'next/link'
import {
  ContainerHeader,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  GroupBtn,
  LinkUserAccount,
  SignOutBtn,
} from './style'
import { UserAvatar } from '@/components/atoms/UserAvatar'
import useUser from '@/context/Auth/useUser'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export function Header() {
  const { user, logout } = useUser()

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

      {user != null ? (
        <DropdownMenu.Root modal={false}>
          <DropdownMenuTrigger>
            <UserAvatar />
          </DropdownMenuTrigger>

          <DropdownMenu.Portal>
            <DropdownMenuContent side="bottom" align="end" sideOffset={20}>
              <DropdownMenuLabel>{user?.fullName}</DropdownMenuLabel>

              <span>Mentor</span>
              <DropdownMenuSeparator />

              <LinkUserAccount href="/genericPage">Minha conta</LinkUserAccount>
              <SignOutBtn onClick={logout}>Sair</SignOutBtn>
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
    </ContainerHeader>
  )
}
