import logoImg from '@/assets/logos/sou-junior.svg';
import { Button } from '@/components/atoms/Button';
import Image from 'next/image';
import Link from 'next/link';
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
  ProfileBadge,
  ProfileSwitchButton,
  ProfileSwitchGroup,
  ProfileSwitchOverlay,
  ProfileStatusActions,
  ProfileStatusModal,
  SignOutBtn,
  MenuActionButton,
} from './style';
import { UserAvatar } from '@/components/atoms/UserAvatar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Menu } from '@mui/icons-material';
import { useState } from 'react';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { menteeOnboardingSourceKey } from '@/data/static-info';
import UserLoginService from '@/services/user/userLoginService';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { breakpoints } from '@/styles/theme';
import { useRouter } from 'next/router';
import { api } from '@/lib/axios';
import { handleError } from '@/utils/handleError';
import { AxiosError } from 'axios';
import { Modal } from '@/components/atoms/Modal';
import { toast } from 'react-toastify';

const PROFILE_NOT_FOUND_CODE = 'AUTH_PROFILE_NOT_FOUND';
const PROFILE_PAUSED_CODE = 'AUTH_PROFILE_PAUSED';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSwitchingProfile, setIsSwitchingProfile] = useState(false);
  const [openReactivateModal, setOpenReactivateModal] = useState(false);
  const {
    userSession,
    mentor,
    setUserSession,
    activeProfileType,
    switchProfile,
    profiles,
  } = useAuthContext();
  const { logout } = UserLoginService();
  const breakpoint = useBreakpoint();
  const router = useRouter();
  const isMentorProfilePaused =
    profiles.data?.mentor.paused ?? Boolean(mentor.data?.isProfilePaused);

  function handleLogoutUser() {
    logout();
    setUserSession(null);
    setIsMenuOpen(false);
    router.replace('/');
  }

  async function handleSwitchProfile(profileType: 'mentor' | 'mentee') {
    if (profileType === activeProfileType || !userSession?.token) {
      return;
    }

    setIsSwitchingProfile(true);

    try {
      let switchResponse;

      try {
        switchResponse = await switchProfile(profileType);
      } catch (error) {
        if (
          error instanceof AxiosError &&
          error.response?.data?.code === PROFILE_PAUSED_CODE
        ) {
          setOpenReactivateModal(true);
          return;
        }

        if (
          !(error instanceof AxiosError) ||
          error.response?.data?.code !== PROFILE_NOT_FOUND_CODE
        ) {
          throw error;
        }

        const activationEndpoint =
          profileType === 'mentor' ? '/mentor/profile' : '/user/profile';

        await api.post(
          activationEndpoint,
          {},
          {
            headers: {
              Authorization: `Bearer ${userSession.token}`,
            },
          }
        );

        switchResponse = await switchProfile(profileType);
      }

      setIsMenuOpen(false);

      if (!switchResponse?.info.registerComplete) {
        if (profileType === 'mentee') {
          if (activeProfileType === 'mentor') {
            sessionStorage.setItem(
              menteeOnboardingSourceKey,
              JSON.stringify({
                aboutMe: mentor.data?.aboutMe ?? '',
                gender: mentor.data?.gender ?? '',
                profile: mentor.data?.profile ?? '',
              })
            );
          }

          router.push({
            pathname: '/onboarding-mentee',
            query:
              activeProfileType === 'mentor' ? { origin: 'mentor' } : undefined,
          });
          return;
        }

        router.push('/onBoarding');
        return;
      }

      router.push('/me');
    } catch {
      handleError('Não foi possível alternar o perfil. Tente novamente.');
    } finally {
      setIsSwitchingProfile(false);
    }
  }

  async function handlePauseMentorProfile() {
    if (!userSession?.token) {
      return;
    }

    try {
      await api.patch(
        '/mentor/pause-profile',
        {},
        {
          headers: {
            Authorization: `Bearer ${userSession.token}`,
          },
        }
      );

      const updatedProfiles = await profiles.refetch();
      toast.success('Perfil de mentor(a) pausado com sucesso.');

      if (updatedProfiles.data?.mentee.exists) {
        await handleSwitchProfile('mentee');
      }
    } catch {
      handleError('Não foi possível pausar o perfil. Tente novamente.');
    }
  }

  async function handleReactivateMentorProfile() {
    if (!userSession?.token) {
      return;
    }

    try {
      setIsSwitchingProfile(true);
      await api.patch(
        '/mentor/reactivate-profile',
        {},
        {
          headers: {
            Authorization: `Bearer ${userSession.token}`,
          },
        }
      );

      await profiles.refetch();
      setOpenReactivateModal(false);
      await switchProfile('mentor');
      toast.success('Perfil de mentor(a) reativado com sucesso.');
      router.push('/me');
    } catch {
      handleError('Não foi possível reativar o perfil. Tente novamente.');
    } finally {
      setIsSwitchingProfile(false);
    }
  }

  const profileLabel =
    activeProfileType === 'mentor' ? 'Mentor(a)' : 'Mentorado(a)';
  const canRenderReactivateModal = Boolean(userSession?.token);

  return (
    <ContainerHeader>
      {isSwitchingProfile && (
        <ProfileSwitchOverlay>
          <span>Trocando de perfil...</span>
        </ProfileSwitchOverlay>
      )}

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
        <DropdownMenu.Root
          modal={breakpoint <= breakpoints.desktopXS}
          open={isMenuOpen}
          onOpenChange={setIsMenuOpen}
        >
          <DropdownMenuTrigger>
            <span className="hello-user">
              Olá, {mentor.data?.fullName?.split(' ')[0]}
            </span>
            <ProfileBadge>{profileLabel}</ProfileBadge>
            <UserAvatar />
          </DropdownMenuTrigger>

          {isMenuOpen && <MenuBurgerOverlay aria-hidden />}

          <DropdownMenu.Portal>
            <DropdownMenuContent
              side="bottom"
              align={breakpoint <= breakpoints.desktopXS ? 'center' : 'end'}
              sideOffset={20}
            >
              <DropdownMenuLabel>{mentor.data?.fullName}</DropdownMenuLabel>

              <ProfileSwitchGroup>
                <ProfileSwitchButton
                  type="button"
                  className={activeProfileType === 'mentor' ? 'active' : ''}
                  onClick={() => handleSwitchProfile('mentor')}
                >
                  Mentor(a)
                </ProfileSwitchButton>
                <ProfileSwitchButton
                  type="button"
                  className={activeProfileType === 'mentee' ? 'active' : ''}
                  onClick={() => handleSwitchProfile('mentee')}
                >
                  Mentorado(a)
                </ProfileSwitchButton>
              </ProfileSwitchGroup>
              <DropdownMenuSeparator />

              <DropdownMenu.Item asChild>
                <LinkUserAccount href="/me">Minha conta</LinkUserAccount>
              </DropdownMenu.Item>

              {activeProfileType === 'mentor' && (
                <MenuActionButton
                  onSelect={event => {
                    event.preventDefault();
                    if (isMentorProfilePaused) {
                      setOpenReactivateModal(true);
                      return;
                    }

                    handlePauseMentorProfile();
                  }}
                >
                  {isMentorProfilePaused
                    ? 'Reativar perfil mentor(a)'
                    : 'Pausar perfil mentor(a)'}
                </MenuActionButton>
              )}

              <div className="menu-burger-links">
                <DropdownMenu.Item asChild>
                  <Link href="/#onboarding">Como Funciona</Link>
                </DropdownMenu.Item>

                <DropdownMenu.Item asChild>
                  <Link href="/#mentor">Encontre Seu Mentor</Link>
                </DropdownMenu.Item>
              </div>

              <DropdownMenuSeparator className="with-user-log-in" />

              <DropdownMenu.Item asChild>
                <SignOutBtn onClick={handleLogoutUser}>Sair</SignOutBtn>
              </DropdownMenu.Item>
            </DropdownMenuContent>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      ) : (
        <GroupBtn>
          <Button as={Link} href="/login" variant="secondary">
            Login
          </Button>
          <Button as={Link} href="/cadastro">
            Junte-se à comunidade
          </Button>
        </GroupBtn>
      )}

      {/* Mobile menu */}
      {!userSession && (
        <DropdownMenu.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <MenuBurgerTrigger>
            <Menu />
          </MenuBurgerTrigger>

          {isMenuOpen && <MenuBurgerOverlay aria-hidden />}

          <DropdownMenu.Portal>
            <MenuBurgerContent sideOffset={12}>
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
                    Login
                  </Button>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <Button as={Link} href="/cadastro">
                    Junte-se à comunidade
                  </Button>
                </DropdownMenu.Item>
              </GroupBtnMobile>
            </MenuBurgerContent>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      )}

      {canRenderReactivateModal && (
        <Modal.Root
          open={openReactivateModal}
          onOpenChange={setOpenReactivateModal}
        >
          <ProfileStatusModal>
            <h2>Reativar perfil mentor(a)?</h2>
            <p>
              Seu perfil de mentor(a) está pausado no momento. Ao reativá-lo,
              ele volta a aparecer nos resultados de busca da plataforma.
            </p>
            <ProfileStatusActions>
              <Button
                type="button"
                variant="secondary"
                onClick={() => setOpenReactivateModal(false)}
              >
                Cancelar
              </Button>
              <Button type="button" onClick={handleReactivateMentorProfile}>
                Reativar perfil
              </Button>
            </ProfileStatusActions>
          </ProfileStatusModal>
        </Modal.Root>
      )}
    </ContainerHeader>
  );
}
