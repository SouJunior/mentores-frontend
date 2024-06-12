import { Spinner } from '@/components/atoms/Spinner'
import { PasswordTab } from '@/components/organisms/AccountPage/PasswordTab'
import { PersonalInfoTab } from '@/components/organisms/AccountPage/PersonalInfoTab'
import { ProfileTab } from '@/components/organisms/AccountPage/ProfileTab'
import { ScheduleTab } from '@/components/organisms/AccountPage/ScheduleTab'
import { useAuthContext } from '@/context/Auth/AuthContext'
import { EditPhotoProvider } from '@/context/EditPhotoContext'
import { useProtectPage } from '@/hooks/useProtectPage'
import {
  AsideContainer,
  AsideNavContainer,
  AsideNavItem,
  AsideTitle,
  Container,
  AsideDivider,
  ContentDivider,
  ContainerSpinnerLoading,
} from '@/styles/pages/me'
import * as Tabs from '@radix-ui/react-tabs'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export default function MePage() {
  const { mentor } = useAuthContext()
  const loading = useProtectPage()

  const router = useRouter()
  const initialTab = router.query.tab as string
  const [activeTab, setActiveTab] = useState(initialTab ?? 'personal-info')

  function handleTabChange(value: string) {
    setActiveTab(value)
    router.push({ query: { tab: value } })
  }

  useEffect(() => {
    setActiveTab(router.query.tab as string)
  }, [router.query.tab])

  if (loading) {
    return (
      <ContainerSpinnerLoading>
        <Spinner className="spinner" />
      </ContainerSpinnerLoading>
    )
  }

  return (
    <Tabs.Root
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
    </Tabs.Root>
  )
}
