import { CardOnboarding } from '@/components/atoms/CardOnboarding';
import { Container, ContainerListCard, ContainerOnboarding } from './style';

import girlWithMagnifyingGlass from '@/assets/homepage/onboarding/encontre.svg';
import scheduleImg from '@/assets/homepage/onboarding/marque.svg';
import describeImg from '@/assets/homepage/onboarding/descreva.svg';

export function Onboarding() {
  return (
    <Container>
      <ContainerOnboarding id="onboarding" className="container">
        <h2>Conecte-se a um mentor em 4 passos</h2>
        <p className="description-onboarding">
          com a facilidade e praticidade oferecida pelo Portal de Mentorias.
        </p>

        <ContainerListCard>
          <CardOnboarding
            title="Encontre seu mentor"
            img={girlWithMagnifyingGlass}
          >
            Encontre seu mentor especializado na área desejada e mais adequado
            para você.
          </CardOnboarding>
          <CardOnboarding title="Marque um horário" img={scheduleImg}>
            Marque um horário disponível na agenda do mentor, que melhor se
            encaixa para vocês.
          </CardOnboarding>
          <CardOnboarding title="Descreva seu objetivo" img={describeImg}>
            Descreva seu objetivo com a mentoria, para que o mentor possa se
            preparar.
          </CardOnboarding>
          <CardOnboarding title="Conecte-se" img={girlWithMagnifyingGlass}>
            Compareça no dia e horário agendado e comece a aprender.
          </CardOnboarding>
        </ContainerListCard>
      </ContainerOnboarding>
    </Container>
  );
}
