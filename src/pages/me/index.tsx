import { PersonalInfoTab } from '@/components/organisms/AccountPage/PersonalInfoTab'
import {
  AsideContainer,
  AsideNavContainer,
  AsideNavItem,
  AsideTitle,
  Container,
  AsideDivider,
  ContentDivider,
} from '@/styles/pages/me'
import * as Tabs from '@radix-ui/react-tabs'

function GenericPage() {
  return (
    <Tabs.Root orientation="vertical">
      <Container>
        <AsideContainer>
          <AsideTitle>Minha conta</AsideTitle>

          <AsideDivider />

          <AsideNavContainer defaultValue={'tab-personal-info'}>
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
          <PersonalInfoTab />
        </main>
      </Container>
    </Tabs.Root>
  )
}

export default GenericPage
