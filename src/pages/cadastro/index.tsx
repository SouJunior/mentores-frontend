import logoImg from '@/assets/logos/sou-junior.svg';
import { Button } from '@/components/atoms/Button';
import {
  ArrowForward,
  CheckCircle,
  SchoolOutlined,
  SupportAgentOutlined,
} from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import catPlayBallBackground from '../../../assets/catPlayBall.png';
import profileChoiceBackground from '../../../assets/image.png';
import { FormRegister } from '../../components/molecules/FormRegister';
import {
  ProfileBenefitItem,
  ProfileChoiceActions,
  ProfileChoiceCard,
  ProfileChoiceContainer,
  ProfileChoiceGrid,
  ProfileChoiceHeader,
  ProfileChoiceStage,
  ProfileHint,
  ProfileSelectionContent,
  RegisterBackButton,
  RegisterContainer,
} from '../../styles/pages/cadastro';

type RegisterProfile = 'mentor' | 'mentorado';

const profileText = {
  mentor: {
    title: 'Quero ser mentor(a) na comunidade',
    description: 'Já trilhei um caminho e quero compartilhar minha experiência',
    benefits: [
      'Desenvolva suas habilidades de liderança e comunicação',
      'Expanda sua rede de contatos e troque experiências',
    ],
    hint: 'A qualquer momento, na área logada, você pode ativar seu perfil de mentor(a).',
    button: 'Continuar como mentor(a)',
  },
  mentorado: {
    title: 'Quero ser mentorado(a) e evoluir',
    description: 'Estou começando e busco orientação de quem tem experiência',
    benefits: [
      'Receba orientação de profissionais experientes',
      'Acelere seu desenvolvimento de carreira',
      'Conecte-se com uma comunidade que apoia seu crescimento',
    ],
    button: 'Continuar como mentorado(a)',
  },
};

function RegisterPage() {
  const router = useRouter();
  const selectedProfile = router.query.perfil;
  const shouldShowProfileChoice = !selectedProfile;
  const profileType = selectedProfile === 'mentorado' ? 'mentee' : 'mentor';
  const [activeProfile, setActiveProfile] = useState<RegisterProfile>('mentorado');

  const selectedProfileText = useMemo(
    () => profileText[activeProfile],
    [activeProfile],
  );

  if (shouldShowProfileChoice) {
    return (
      <ProfileChoiceContainer $backgroundImage={profileChoiceBackground.src}>
        <ProfileChoiceHeader>
          <Image src={logoImg} alt="SouJunior" priority />

          <nav aria-label="Navegação principal">
            <Link href="/">Como funciona</Link>
            <Link href="/home">Encontre seu mentor(a)</Link>
          </nav>

          <ProfileChoiceActions>
            <Button
              type="button"
              variant="secondary"
              size="md"
              onClick={() => router.push('/login')}
            >
              Login
            </Button>
            <Button
              type="button"
              size="md"
              onClick={() => router.push('/cadastro')}
            >
              Junte-se à comunidade
            </Button>
          </ProfileChoiceActions>
        </ProfileChoiceHeader>

        <ProfileChoiceStage>
          <ProfileSelectionContent>
            <p>Que bom ter você na comunidade SouJunior</p>
            <h1>Como você quer começar?</h1>

            <ProfileChoiceGrid>
              <ProfileChoiceCard
                type="button"
                $isSelected={activeProfile === 'mentor'}
                $isMuted={activeProfile !== 'mentor'}
                aria-pressed={activeProfile === 'mentor'}
                onClick={() => setActiveProfile('mentor')}
              >
                <SupportAgentOutlined />
                <h2>{profileText.mentor.title}</h2>
                <strong>{profileText.mentor.description}</strong>

                {profileText.mentor.hint && (
                  <ProfileHint>{profileText.mentor.hint}</ProfileHint>
                )}

                {profileText.mentor.benefits.map(benefit => (
                  <ProfileBenefitItem key={benefit}>
                    <CheckCircle />
                    {benefit}
                  </ProfileBenefitItem>
                ))}
              </ProfileChoiceCard>

              <ProfileChoiceCard
                type="button"
                $isSelected={activeProfile === 'mentorado'}
                $isMuted={activeProfile !== 'mentorado'}
                aria-pressed={activeProfile === 'mentorado'}
                onClick={() => setActiveProfile('mentorado')}
              >
                <SchoolOutlined />
                <h2>{profileText.mentorado.title}</h2>
                <strong>{profileText.mentorado.description}</strong>

                {profileText.mentorado.benefits.map(benefit => (
                  <ProfileBenefitItem key={benefit}>
                    <CheckCircle />
                    {benefit}
                  </ProfileBenefitItem>
                ))}
              </ProfileChoiceCard>
            </ProfileChoiceGrid>

            <Button
              type="button"
              onClick={() => router.push(`/cadastro?perfil=${activeProfile}`)}
            >
              {selectedProfileText.button}
              <ArrowForward />
            </Button>
          </ProfileSelectionContent>
        </ProfileChoiceStage>
      </ProfileChoiceContainer>
    );
  }

  return (
    <RegisterContainer $backgroundImage={catPlayBallBackground.src}>
      <RegisterBackButton type="button" onClick={() => router.push('/cadastro')}>
        Trocar perfil
      </RegisterBackButton>
      <FormRegister profileType={profileType} />
    </RegisterContainer>
  );
}

export default RegisterPage;
