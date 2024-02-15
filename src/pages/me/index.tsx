import { Spinner } from '@/components/atoms/Spinner'
import { PasswordTab } from '@/components/organisms/AccountPage/PasswordTab'
import { PersonalInfoTab } from '@/components/organisms/AccountPage/PersonalInfoTab'
import { ProfileTab } from '@/components/organisms/AccountPage/ProfileTab'
import { ScheduleTab } from '@/components/organisms/AccountPage/ScheduleTab'
import { useAuthContext } from '@/context/Auth/AuthContext'
import { EditPhotoProvider } from '@/context/EditPhotoContext'
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
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export default function MePage() {
  const { mentor } = useAuthContext()

  return (
    <Tabs.Root orientation="vertical" defaultValue="tab-personal-info">
      <EditPhotoProvider>
        <Container>
          <AsideContainer>
            <AsideTitle>Minha conta</AsideTitle>

            <AsideDivider />

            <AsideNavContainer>
              <AsideNavItem value="tab-personal-info">
                Informações pessoais
              </AsideNavItem>
              <AsideNavItem value="tab-profile">Perfil</AsideNavItem>
              <AsideNavItem value="tab-schedule">Agenda</AsideNavItem>
              <AsideNavItem value="tab-password">Senha</AsideNavItem>
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
