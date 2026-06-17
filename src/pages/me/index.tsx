import { Spinner } from '@/components/atoms/Spinner';
import AccountManagementTab from '@/components/organisms/AccountPage/AccountManagement';
import { DeleteAccountTab } from '@/components/organisms/AccountPage/DeleteAccountTab';
import { MenteeAppointmentsTab } from '@/components/organisms/AccountPage/MenteeAppointmentsTab';
import { PasswordTab } from '@/components/organisms/AccountPage/PasswordTab';
import { PersonalInfoTab } from '@/components/organisms/AccountPage/PersonalInfoTab';
import { ProfileTab } from '@/components/organisms/AccountPage/ProfileTab';
import { ReviewsTab } from '@/components/organisms/AccountPage/ReviewsTab';
import { ScheduleTab } from '@/components/organisms/AccountPage/ScheduleTab';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { EditPhotoProvider } from '@/context/EditPhotoContext';
import { useProtectPage } from '@/hooks/useProtectPage';
import {
  AsideContainer,
  AsideDivider,
  AsideNavContainer,
  AsideNavItem,
  AsideTitle,
  Container,
  ContainerSpinnerLoading,
  ContentCard,
} from '@/styles/pages/me';
import * as Tabs from '@radix-ui/react-tabs';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const accountTabs = [
  'schedule',
  'reviews',
  'profile',
  'account-management',
  'personal-info',
  'password',
  'delete-account',
];

export default function MePage() {
  const { mentor, activeProfileType, profiles } = useAuthContext();
  const loading = useProtectPage();

  const router = useRouter();
  const initialTab = router.query.tab as string;
  const [activeTab, setActiveTab] = useState(
    accountTabs.includes(initialTab) ? initialTab : 'schedule'
  );
  const profilesHasMentor = Boolean(profiles.data?.mentor.exists);

  function handleTabChange(value: string) {
    setActiveTab(value);
    router.push(
      {
        pathname: '/me',
        query: { tab: value },
      },
      undefined,
      { shallow: true }
    );
  }

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (
      activeProfileType === 'mentee' &&
      mentor.data?.registerComplete === false
    ) {
      router.replace({
        pathname: '/onboarding-mentee',
        query: profilesHasMentor ? { origin: 'mentor' } : undefined,
      });
      return;
    }

    const currentTab = router.query.tab as string;

    if (accountTabs.includes(currentTab)) {
      setActiveTab(currentTab);
      return;
    }

    setActiveTab('schedule');
    router.replace(
      {
        pathname: '/me',
        query: { tab: 'schedule' },
      },
      undefined,
      { shallow: true }
    );
  }, [
    activeProfileType,
    mentor.data?.registerComplete,
    profilesHasMentor,
    router,
  ]);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const calendlyStatus = router.query.calendly;

    if (calendlyStatus !== 'success' && calendlyStatus !== 'error') {
      return;
    }

    if (calendlyStatus === 'success') {
      toast.success('Calendly vinculado com sucesso!');
    }

    if (calendlyStatus === 'error') {
      toast.error('Não foi possível vincular o Calendly.');
    }

    const query = { ...router.query };
    delete query.calendly;

    router.replace(
      {
        pathname: '/me',
        query,
      },
      undefined,
      { shallow: true }
    );
  }, [router]);

  if (loading) {
    return (
      <ContainerSpinnerLoading>
        <Spinner className="spinner" />
      </ContainerSpinnerLoading>
    );
  }

  return (
    <Tabs.Root
      value={activeTab}
      onValueChange={handleTabChange}
      defaultValue="schedule"
      orientation="vertical"
    >
      <EditPhotoProvider>
        <Container>
          <AsideContainer>
            <AsideTitle>Minha conta</AsideTitle>

            <AsideDivider />

            <AsideNavContainer>
              <AsideNavItem value="personal-info">
                Informações pessoais
              </AsideNavItem>
              <AsideNavItem value="schedule">
                {activeProfileType === 'mentor' ? 'Agenda' : 'Agendamentos'}
              </AsideNavItem>
              <AsideNavItem value="reviews">Avaliações</AsideNavItem>
              <AsideNavItem value="profile">Perfil</AsideNavItem>
              <AsideNavItem value="password">Senha</AsideNavItem>
              <AsideDivider />
              <AsideNavItem value="account-management">
                Gestão de conta
              </AsideNavItem>
            </AsideNavContainer>
          </AsideContainer>

          <ContentCard>
            {mentor.isLoading ? (
              <ContainerSpinnerLoading>
                <Spinner className="spinner" />
              </ContainerSpinnerLoading>
            ) : (
              <>
                <PersonalInfoTab />
                <ProfileTab />
                {activeProfileType === 'mentor' ? (
                  <ScheduleTab />
                ) : (
                  <MenteeAppointmentsTab />
                )}
                <ReviewsTab />
                <PasswordTab />
                <AccountManagementTab />
                <DeleteAccountTab />
              </>
            )}

            <ToastContainer
              autoClose={3500}
              hideProgressBar={true}
              closeOnClick
              theme="colored"
            />
          </ContentCard>
        </Container>
      </EditPhotoProvider>
    </Tabs.Root>
  );
}
