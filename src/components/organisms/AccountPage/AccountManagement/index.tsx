import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { SubtitleTab, TabContainer, TitleTab } from '../styles';
import {
  Button,
  ButtonsContainer,
  Disclaimer,
  DisclaimerWrapper,
  Divider,
} from './style';

export default function AccountManagementTab() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const redirectDeleteAccountTab = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', 'delete-account');
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <TabContainer value="account-management">
      <TitleTab>Gestão da conta</TitleTab>
      <SubtitleTab>
        Você tem duas opções para se ausentar da plataforma: desativar ou
        excluir sua conta.
      </SubtitleTab>
      <DisclaimerWrapper>
        <Disclaimer>
          Desative sua conta e ela será temporariamente suspensa, mantendo seus
          dados e permitindo reativação a qualquer momento.
        </Disclaimer>
        <Disclaimer>
          Ao excluir, ela será deletada permanentemente após 30 dias. Após esse
          prazo, seus dados serão removidos definitivamente.
        </Disclaimer>
      </DisclaimerWrapper>
      <Divider />
      <ButtonsContainer>
        <Button variant="primary" disabled style={{ cursor: 'not-allowed' }}>
          Desativar Conta
          <ChevronRightIcon />
        </Button>
        <Button variant="danger" onClick={redirectDeleteAccountTab}>
          Excluir Conta
          <ChevronRightIcon />
        </Button>
      </ButtonsContainer>
    </TabContainer>
  );
}
