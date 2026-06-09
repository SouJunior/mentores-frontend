'use client';

import AccountManagementTab from '@/features/account/components/account-page/AccountManagement';
import { DeleteAccountTab } from '@/features/account/components/account-page/DeleteAccountTab';
import { PasswordTab } from '@/features/account/components/account-page/PasswordTab';
import { PersonalInfoTab } from '@/features/account/components/account-page/PersonalInfoTab';
import { ProfileTab } from '@/features/account/components/account-page/ProfileTab';
import { ScheduleTab } from '@/features/account/components/account-page/ScheduleTab';
import { Tabs, TabsList, TabsTrigger } from '@/shared/components/ui/tabs';
import { EditPhotoProvider } from '@/shared/context/EditPhotoContext';
import { IMentor } from '@/shared/types/Auth';
import { ICalendlyUserInfo } from '@/shared/types/IUseUserCalendlyInfoService';
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

interface MeClientProps {
  mentor: IMentor;
  calendlyInfo: ICalendlyUserInfo;
}

export default function MeClient({ mentor, calendlyInfo }: MeClientProps) {
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

  return (
    <Tabs
      value={activeTab}
      onValueChange={handleTabChange}
      defaultValue="personal-info"
      orientation="vertical"
    >
      <EditPhotoProvider>
        <div className="flex gap-4 p-4 min-h-screen">
          <aside className="flex flex-col gap-2 text-[#323232]">
            <h1 className="text-[2rem] font-semibold leading-[2.4rem]">
              Minha conta
            </h1>

            <div className="h-px bg-[#ACACAC] w-full" />

            <TabsList className="flex flex-col gap-2 bg-transparent h-auto p-0 rounded-none">
              <TabsTrigger
                value="personal-info"
                className="[all:unset] text-base leading-[1.2rem] font-normal p-4 pl-0 w-full cursor-pointer transition-all duration-300 data-[state=active]:font-medium data-[state=active]:text-[#002C66] hover:bg-[#DEDEDE]"
              >
                Informações pessoais
              </TabsTrigger>
              <TabsTrigger
                value="profile"
                className="[all:unset] text-base leading-[1.2rem] font-normal p-4 pl-0 w-full cursor-pointer transition-all duration-300 data-[state=active]:font-medium data-[state=active]:text-[#002C66] hover:bg-[#DEDEDE]"
              >
                Perfil
              </TabsTrigger>
              <TabsTrigger
                value="schedule"
                className="[all:unset] text-base leading-[1.2rem] font-normal p-4 pl-0 w-full cursor-pointer transition-all duration-300 data-[state=active]:font-medium data-[state=active]:text-[#002C66] hover:bg-[#DEDEDE]"
              >
                Agenda
              </TabsTrigger>
              <TabsTrigger
                value="password"
                className="[all:unset] text-base leading-[1.2rem] font-normal p-4 pl-0 w-full cursor-pointer transition-all duration-300 data-[state=active]:font-medium data-[state=active]:text-[#002C66] hover:bg-[#DEDEDE]"
              >
                Senha
              </TabsTrigger>
              <TabsTrigger
                value="account-management"
                className="[all:unset] text-base leading-[1.2rem] font-normal p-4 pl-0 w-full cursor-pointer transition-all duration-300 data-[state=active]:font-medium data-[state=active]:text-[#002C66] hover:bg-[#DEDEDE]"
              >
                Gestão de conta
              </TabsTrigger>
            </TabsList>
          </aside>

          <div className="w-0.5 bg-[#D9D9D9]" />

          <main>
            <PersonalInfoTab mentor={mentor} />
            <ProfileTab mentor={mentor} />
            <ScheduleTab mentor={mentor} calendlyInfo={calendlyInfo} />
            <PasswordTab />
            <AccountManagementTab />
            <DeleteAccountTab />

            <ToastContainer
              autoClose={3500}
              hideProgressBar={true}
              closeOnClick
              theme="colored"
            />
          </main>
        </div>
      </EditPhotoProvider>
    </Tabs>
  );
}
