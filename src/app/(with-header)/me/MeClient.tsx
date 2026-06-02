'use client';

import { Spinner } from '@/components/spinner';
import AccountManagementTab from '@/features/account/account-page/AccountManagement';
import { DeleteAccountTab } from '@/features/account/account-page/DeleteAccountTab';
import { PasswordTab } from '@/features/account/account-page/PasswordTab';
import { PersonalInfoTab } from '@/features/account/account-page/PersonalInfoTab';
import { ProfileTab } from '@/features/account/account-page/ProfileTab';
import { ScheduleTab } from '@/features/account/account-page/ScheduleTab';
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
  ContentDivider,
} from '@/styles/pages/me';
import { Tabs } from '@/components/ui/tabs';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const accountTabs = [
  'personal-info',
  'profile',
  'schedule',
  'password',
  'account-management',
];

export default function MeClient() {
  const { mentor } = useAuthContext();
  const loading = useProtectPage();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState('personal-info');

  function handleTabChange(value: string) {
    setActiveTab(value);
    router.push(`/me?tab=${value}`);
  }

  useEffect(() => {
    const currentTab = searchParams.get('tab');
    if (currentTab && accountTabs.includes(currentTab)) {
      setActiveTab(currentTab);
    } else {
      setActiveTab('personal-info');
      router.replace('/me?tab=personal-info');
    }
  }, [searchParams, router]);

  if (loading) {
    return (
      <ContainerSpinnerLoading>
        <Spinner className="spinner" />
      </ContainerSpinnerLoading>
    );
  }

  return (
    <Tabs
      value={activeTab}
      onValueChange={handleTabChange}
      defaultValue="personal-info"
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
              <AsideNavItem value="profile">Perfil</AsideNavItem>
              <AsideNavItem value="schedule">Agenda</AsideNavItem>
              <AsideNavItem value="password">Senha</AsideNavItem>
              <AsideNavItem value="account-management">
                Gestão de conta
              </AsideNavItem>
            </AsideNavContainer>
          </AsideContainer>

          <ContentDivider />

          <main>
            {mentor.isLoading ? (
              <ContainerSpinnerLoading>
                <Spinner className="spinner" />
              </ContainerSpinnerLoading>
            ) : (
              <>
                <PersonalInfoTab />
                <ProfileTab />
                <ScheduleTab />
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
          </main>
        </Container>
      </EditPhotoProvider>
    </Tabs>
  );
}
